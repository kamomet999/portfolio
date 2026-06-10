import {
  BLOCK_RADIUS,
  COST_PER_SECOND,
  ENEMY_DEF_MAP,
  INITIAL_COST,
  INITIAL_LIFE,
  INTER_WAVE_DELAY,
  MAX_COST,
  PATH_LENGTH,
  PROJECTILE_SPEED,
  TOTAL_ENEMIES,
  UNIT_DEF_MAP,
  WAVES,
  pointAtDist,
} from "./data";
import type {
  EnemyInstance,
  GameState,
  UnitDef,
  UnitInstance,
} from "./types";

export function createInitialState(): GameState {
  return {
    phase: "ready",
    time: 0,
    cost: INITIAL_COST,
    life: INITIAL_LIFE,
    maxLife: INITIAL_LIFE,
    waveIndex: 0,
    waveTime: 0,
    spawned: WAVES[0].events.map(() => false),
    interWaveTimer: 0,
    units: [],
    enemies: [],
    projectiles: [],
    effects: [],
    remainingEnemies: TOTAL_ENEMIES,
    nextUid: 1,
  };
}

function physicalDamage(atk: number, def: number): number {
  return Math.max(atk - def, Math.ceil(atk * 0.1));
}

function dealDamage(atk: number, def: number, type: "physical" | "magic") {
  return type === "magic" ? atk : physicalDamage(atk, def);
}

export function canPlaceUnit(
  state: GameState,
  def: UnitDef,
  col: number,
  row: number,
  pathTiles: Set<string>,
  rangedTiles: Set<string>
): boolean {
  if (state.cost < def.cost) return false;
  const key = `${col},${row}`;
  const validTile =
    def.kind === "melee" ? pathTiles.has(key) : rangedTiles.has(key);
  if (!validTile) return false;
  return !state.units.some((u) => u.col === col && u.row === row);
}

export function placeUnit(
  state: GameState,
  def: UnitDef,
  col: number,
  row: number
): void {
  state.cost -= def.cost;
  state.units.push({
    uid: state.nextUid++,
    defId: def.id,
    col,
    row,
    hp: def.hp,
    maxHp: def.hp,
    cooldown: 0,
    blockedEnemies: [],
  });
  state.effects.push({
    x: col + 0.5,
    y: row + 0.5,
    type: "spawn",
    ttl: 0.4,
    maxTtl: 0.4,
    color: "#ffffff",
  });
}

/** ユニットを撤退させ、コストの半分を返還する */
export function withdrawUnit(state: GameState, uid: number): void {
  const unit = state.units.find((u) => u.uid === uid);
  if (!unit) return;
  const def = UNIT_DEF_MAP.get(unit.defId)!;
  state.cost = Math.min(MAX_COST, state.cost + Math.floor(def.cost / 2));
  removeUnit(state, unit);
}

function removeUnit(state: GameState, unit: UnitInstance): void {
  for (const euid of unit.blockedEnemies) {
    const enemy = state.enemies.find((e) => e.uid === euid);
    if (enemy && enemy.blockedBy === unit.uid) enemy.blockedBy = null;
  }
  state.units = state.units.filter((u) => u.uid !== unit.uid);
}

function unitCenter(u: UnitInstance): [number, number] {
  return [u.col + 0.5, u.row + 0.5];
}

function distSq(ax: number, ay: number, bx: number, by: number): number {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}

function spawnEnemies(state: GameState): void {
  const wave = WAVES[state.waveIndex];
  wave.events.forEach((ev, i) => {
    if (!state.spawned[i] && state.waveTime >= ev.time) {
      state.spawned[i] = true;
      const def = ENEMY_DEF_MAP.get(ev.enemyId)!;
      const [x, y] = pointAtDist(0);
      state.enemies.push({
        uid: state.nextUid++,
        defId: def.id,
        dist: 0,
        hp: def.hp,
        maxHp: def.hp,
        cooldown: 0,
        blockedBy: null,
        x: x + 0.5,
        y: y + 0.5,
      });
    }
  });
}

function updateEnemies(state: GameState, dt: number): void {
  for (const enemy of state.enemies) {
    const def = ENEMY_DEF_MAP.get(enemy.defId)!;
    enemy.cooldown = Math.max(0, enemy.cooldown - dt);

    const blocker = enemy.blockedBy
      ? state.units.find((u) => u.uid === enemy.blockedBy)
      : undefined;

    if (blocker) {
      // ブロックされている間は壁役を攻撃する
      if (enemy.cooldown <= 0) {
        enemy.cooldown = def.interval;
        const udef = UNIT_DEF_MAP.get(blocker.defId)!;
        blocker.hp -= dealDamage(def.atk, udef.def, "physical");
        state.effects.push({
          x: blocker.col + 0.5,
          y: blocker.row + 0.5,
          type: "hit",
          ttl: 0.2,
          maxTtl: 0.2,
          color: "#ff6b6b",
        });
      }
      continue;
    }
    enemy.blockedBy = null;

    enemy.dist += def.speed * dt;
    const [px, py] = pointAtDist(enemy.dist);
    enemy.x = px + 0.5;
    enemy.y = py + 0.5;

    // ゴール到達
    if (enemy.dist >= PATH_LENGTH) {
      state.life -= def.lifeDamage;
      enemy.hp = 0;
      continue;
    }

    // 近接ユニットによるブロック判定
    for (const unit of state.units) {
      const udef = UNIT_DEF_MAP.get(unit.defId)!;
      if (udef.kind !== "melee") continue;
      if (unit.blockedEnemies.length >= udef.block) continue;
      const [ux, uy] = unitCenter(unit);
      if (distSq(enemy.x, enemy.y, ux, uy) <= BLOCK_RADIUS * BLOCK_RADIUS) {
        enemy.blockedBy = unit.uid;
        unit.blockedEnemies.push(enemy.uid);
        break;
      }
    }
  }
}

function findRangedTarget(
  state: GameState,
  unit: UnitInstance,
  range: number
): EnemyInstance | undefined {
  const [ux, uy] = unitCenter(unit);
  let best: EnemyInstance | undefined;
  for (const enemy of state.enemies) {
    if (enemy.hp <= 0) continue;
    if (distSq(enemy.x, enemy.y, ux, uy) > range * range) continue;
    // ゴールに最も近い敵を優先
    if (!best || enemy.dist > best.dist) best = enemy;
  }
  return best;
}

function updateUnits(state: GameState, dt: number): void {
  for (const unit of state.units) {
    const def = UNIT_DEF_MAP.get(unit.defId)!;
    unit.cooldown = Math.max(0, unit.cooldown - dt);

    // 死んだ敵をブロックリストから除去
    unit.blockedEnemies = unit.blockedEnemies.filter((uid) =>
      state.enemies.some((e) => e.uid === uid && e.hp > 0)
    );

    if (unit.cooldown > 0) continue;

    if (def.isHealer) {
      const [ux, uy] = unitCenter(unit);
      let target: UnitInstance | undefined;
      for (const ally of state.units) {
        if (ally.hp >= ally.maxHp || ally.hp <= 0) continue;
        const [ax, ay] = unitCenter(ally);
        if (distSq(ax, ay, ux, uy) > def.range * def.range) continue;
        if (!target || ally.hp / ally.maxHp < target.hp / target.maxHp) {
          target = ally;
        }
      }
      if (target) {
        unit.cooldown = def.interval;
        target.hp = Math.min(target.maxHp, target.hp + def.atk);
        state.effects.push({
          x: target.col + 0.5,
          y: target.row + 0.5,
          type: "heal",
          ttl: 0.4,
          maxTtl: 0.4,
          color: "#7dffa0",
        });
      }
      continue;
    }

    if (def.kind === "melee") {
      const targetUid = unit.blockedEnemies[0];
      const target = state.enemies.find(
        (e) => e.uid === targetUid && e.hp > 0
      );
      if (target) {
        unit.cooldown = def.interval;
        const edef = ENEMY_DEF_MAP.get(target.defId)!;
        target.hp -= dealDamage(def.atk, edef.def, def.damageType);
        state.effects.push({
          x: target.x,
          y: target.y,
          type: "hit",
          ttl: 0.2,
          maxTtl: 0.2,
          color: "#ffd34d",
        });
      }
      continue;
    }

    // 遠距離攻撃
    const target = findRangedTarget(state, unit, def.range);
    if (target) {
      unit.cooldown = def.interval;
      const [ux, uy] = unitCenter(unit);
      state.projectiles.push({
        x: ux,
        y: uy,
        targetUid: target.uid,
        speed: PROJECTILE_SPEED,
        damage: def.atk,
        damageType: def.damageType,
        splashRadius: def.splashRadius,
        color: def.color,
      });
    }
  }
}

function updateProjectiles(state: GameState, dt: number): void {
  const remaining: typeof state.projectiles = [];
  for (const proj of state.projectiles) {
    const target = state.enemies.find((e) => e.uid === proj.targetUid);
    if (!target || target.hp <= 0) continue;
    const dx = target.x - proj.x;
    const dy = target.y - proj.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    const step = proj.speed * dt;
    if (d <= step) {
      // 着弾
      const apply = (enemy: EnemyInstance) => {
        const edef = ENEMY_DEF_MAP.get(enemy.defId)!;
        enemy.hp -= dealDamage(proj.damage, edef.def, proj.damageType);
      };
      apply(target);
      if (proj.splashRadius) {
        for (const enemy of state.enemies) {
          if (enemy.uid === target.uid || enemy.hp <= 0) continue;
          if (
            distSq(enemy.x, enemy.y, target.x, target.y) <=
            proj.splashRadius * proj.splashRadius
          ) {
            apply(enemy);
          }
        }
        state.effects.push({
          x: target.x,
          y: target.y,
          type: "hit",
          ttl: 0.35,
          maxTtl: 0.35,
          color: proj.color,
        });
      } else {
        state.effects.push({
          x: target.x,
          y: target.y,
          type: "hit",
          ttl: 0.2,
          maxTtl: 0.2,
          color: proj.color,
        });
      }
    } else {
      proj.x += (dx / d) * step;
      proj.y += (dy / d) * step;
      remaining.push(proj);
    }
  }
  state.projectiles = remaining;
}

function cleanup(state: GameState): void {
  // 死亡した敵
  for (const enemy of state.enemies) {
    if (enemy.hp > 0) continue;
    state.remainingEnemies--;
    if (enemy.blockedBy) {
      const unit = state.units.find((u) => u.uid === enemy.blockedBy);
      if (unit) {
        unit.blockedEnemies = unit.blockedEnemies.filter(
          (uid) => uid !== enemy.uid
        );
      }
    }
    if (enemy.dist < PATH_LENGTH) {
      state.effects.push({
        x: enemy.x,
        y: enemy.y,
        type: "death",
        ttl: 0.35,
        maxTtl: 0.35,
        color: "#ffffff",
      });
    }
  }
  state.enemies = state.enemies.filter((e) => e.hp > 0);

  // 死亡したユニット
  for (const unit of [...state.units]) {
    if (unit.hp <= 0) {
      state.effects.push({
        x: unit.col + 0.5,
        y: unit.row + 0.5,
        type: "death",
        ttl: 0.35,
        maxTtl: 0.35,
        color: "#9bb0ff",
      });
      removeUnit(state, unit);
    }
  }
}

function updateWaves(state: GameState, dt: number): void {
  if (state.interWaveTimer > 0) {
    state.interWaveTimer -= dt;
    if (state.interWaveTimer <= 0) {
      state.waveIndex++;
      state.waveTime = 0;
      state.spawned = WAVES[state.waveIndex].events.map(() => false);
    }
    return;
  }

  state.waveTime += dt;
  spawnEnemies(state);

  const allSpawned = state.spawned.every(Boolean);
  if (allSpawned && state.enemies.length === 0) {
    if (state.waveIndex >= WAVES.length - 1) {
      state.phase = "victory";
    } else {
      state.interWaveTimer = INTER_WAVE_DELAY;
    }
  }
}

export function step(state: GameState, dt: number): void {
  if (state.phase !== "playing") return;

  state.time += dt;
  state.cost = Math.min(MAX_COST, state.cost + COST_PER_SECOND * dt);

  updateWaves(state, dt);
  updateEnemies(state, dt);
  updateUnits(state, dt);
  updateProjectiles(state, dt);
  cleanup(state);

  for (const effect of state.effects) effect.ttl -= dt;
  state.effects = state.effects.filter((e) => e.ttl > 0);

  if (state.life <= 0) {
    state.life = 0;
    state.phase = "defeat";
  }
}
