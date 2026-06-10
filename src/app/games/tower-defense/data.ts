import type { EnemyDef, SpawnEvent, UnitDef, Wave } from "./types";

// ---- マップ定義 ----

export const GRID_COLS = 12;
export const GRID_ROWS = 7;
export const TILE = 64;

/** 敵の進行経路(タイル座標の中心を結ぶ折れ線)。始点と終点は画面外 */
export const WAYPOINTS: [number, number][] = [
  [-1, 1],
  [8, 1],
  [8, 3],
  [3, 3],
  [3, 5],
  [12, 5],
];

/** 経路の総距離(タイル単位) */
export const PATH_LENGTH = WAYPOINTS.reduce((acc, wp, i) => {
  if (i === 0) return 0;
  const [px, py] = WAYPOINTS[i - 1];
  return acc + Math.abs(wp[0] - px) + Math.abs(wp[1] - py);
}, 0);

/** 進行距離からマップ座標(タイル単位)を返す */
export function pointAtDist(dist: number): [number, number] {
  let remaining = dist;
  for (let i = 1; i < WAYPOINTS.length; i++) {
    const [ax, ay] = WAYPOINTS[i - 1];
    const [bx, by] = WAYPOINTS[i];
    const segLen = Math.abs(bx - ax) + Math.abs(by - ay);
    if (remaining <= segLen) {
      const t = segLen === 0 ? 0 : remaining / segLen;
      return [ax + (bx - ax) * t, ay + (by - ay) * t];
    }
    remaining -= segLen;
  }
  const [gx, gy] = WAYPOINTS[WAYPOINTS.length - 1];
  return [gx, gy];
}

function computePathTiles(): Set<string> {
  const tiles = new Set<string>();
  for (let i = 1; i < WAYPOINTS.length; i++) {
    const [ax, ay] = WAYPOINTS[i - 1];
    const [bx, by] = WAYPOINTS[i];
    const steps = Math.abs(bx - ax) + Math.abs(by - ay);
    for (let s = 0; s <= steps; s++) {
      const t = steps === 0 ? 0 : s / steps;
      const col = Math.round(ax + (bx - ax) * t);
      const row = Math.round(ay + (by - ay) * t);
      if (col >= 0 && col < GRID_COLS && row >= 0 && row < GRID_ROWS) {
        tiles.add(`${col},${row}`);
      }
    }
  }
  return tiles;
}

/** 近接ユニットを配置できるタイル(敵の通り道) */
export const PATH_TILES = computePathTiles();

function computeRangedTiles(): Set<string> {
  const tiles = new Set<string>();
  for (const key of PATH_TILES) {
    const [col, row] = key.split(",").map(Number);
    for (let dc = -1; dc <= 1; dc++) {
      for (let dr = -1; dr <= 1; dr++) {
        const c = col + dc;
        const r = row + dr;
        const k = `${c},${r}`;
        if (
          c >= 0 &&
          c < GRID_COLS &&
          r >= 0 &&
          r < GRID_ROWS &&
          !PATH_TILES.has(k)
        ) {
          tiles.add(k);
        }
      }
    }
  }
  return tiles;
}

/** 遠距離ユニットを配置できる高台タイル */
export const RANGED_TILES = computeRangedTiles();

// ---- ユニット定義 ----

export const UNIT_DEFS: UnitDef[] = [
  {
    id: "soldier",
    name: "ソルジャー",
    emoji: "🗡️",
    cost: 8,
    kind: "melee",
    hp: 600,
    atk: 90,
    def: 40,
    block: 2,
    range: 0,
    interval: 1.0,
    damageType: "physical",
    color: "#4a7fd4",
    desc: "低コストの近接職。2体までブロックできる序盤の壁役。",
  },
  {
    id: "heavy",
    name: "ヘビーアーマー",
    emoji: "🛡️",
    cost: 14,
    kind: "melee",
    hp: 1400,
    atk: 70,
    def: 130,
    block: 3,
    range: 0,
    interval: 1.3,
    damageType: "physical",
    color: "#6b7a8f",
    desc: "高HP・高防御の重装兵。3体ブロックで大群を受け止める。",
  },
  {
    id: "valkyrie",
    name: "ヴァルキリー",
    emoji: "⚔️",
    cost: 16,
    kind: "melee",
    hp: 950,
    atk: 190,
    def: 60,
    block: 1,
    range: 0,
    interval: 0.9,
    damageType: "physical",
    color: "#d44a8f",
    desc: "高攻撃力のアタッカー。ブロックは1体だが敵を素早く処理する。",
  },
  {
    id: "archer",
    name: "アーチャー",
    emoji: "🏹",
    cost: 12,
    kind: "ranged",
    hp: 420,
    atk: 130,
    def: 20,
    block: 0,
    range: 2.5,
    interval: 0.9,
    damageType: "physical",
    color: "#3da06a",
    desc: "高台から矢を放つ遠距離職。攻撃速度が速く雑魚処理が得意。",
  },
  {
    id: "mage",
    name: "メイジ",
    emoji: "🔮",
    cost: 18,
    kind: "ranged",
    hp: 360,
    atk: 210,
    def: 15,
    block: 0,
    range: 2.3,
    interval: 2.2,
    damageType: "magic",
    splashRadius: 0.9,
    color: "#8f4ad4",
    desc: "防御無視の範囲魔法。重装の敵には魔法攻撃が有効。",
  },
  {
    id: "healer",
    name: "ヒーラー",
    emoji: "✨",
    cost: 13,
    kind: "ranged",
    isHealer: true,
    hp: 380,
    atk: 115,
    def: 15,
    block: 0,
    range: 2.7,
    interval: 1.4,
    damageType: "magic",
    color: "#d4b04a",
    desc: "範囲内の味方を回復する。壁役の生存力が大きく上がる。",
  },
];

export const UNIT_DEF_MAP = new Map(UNIT_DEFS.map((u) => [u.id, u]));

// ---- 敵定義 ----

export const ENEMY_DEFS: EnemyDef[] = [
  {
    id: "goblin",
    name: "ゴブリン",
    emoji: "👺",
    hp: 350,
    atk: 60,
    def: 10,
    speed: 1.4,
    interval: 1.1,
    lifeDamage: 1,
    color: "#7da33d",
  },
  {
    id: "wolf",
    name: "ウルフ",
    emoji: "🐺",
    hp: 260,
    atk: 55,
    def: 0,
    speed: 2.2,
    interval: 0.9,
    lifeDamage: 1,
    color: "#8a8a9a",
  },
  {
    id: "orc",
    name: "オーク",
    emoji: "🧌",
    hp: 950,
    atk: 115,
    def: 50,
    speed: 0.9,
    interval: 1.4,
    lifeDamage: 1,
    color: "#5d8a4a",
  },
  {
    id: "armor",
    name: "アーマーナイト",
    emoji: "🤖",
    hp: 1700,
    atk: 135,
    def: 200,
    speed: 0.55,
    interval: 1.6,
    lifeDamage: 2,
    color: "#5a6a85",
  },
  {
    id: "ogre",
    name: "オーガロード",
    emoji: "👹",
    hp: 6500,
    atk: 260,
    def: 100,
    speed: 0.5,
    interval: 1.5,
    lifeDamage: 5,
    color: "#b03a3a",
    isBoss: true,
  },
];

export const ENEMY_DEF_MAP = new Map(ENEMY_DEFS.map((e) => [e.id, e]));

// ---- ウェーブ定義 ----

function series(
  start: number,
  count: number,
  gap: number,
  enemyId: string
): SpawnEvent[] {
  return Array.from({ length: count }, (_, i) => ({
    time: start + i * gap,
    enemyId,
  }));
}

export const WAVES: Wave[] = [
  {
    events: [...series(1, 6, 1.8, "goblin"), ...series(13, 3, 1.4, "wolf")],
  },
  {
    events: [
      ...series(1, 8, 1.4, "goblin"),
      ...series(6, 2, 5, "orc"),
      ...series(15, 4, 1.1, "wolf"),
    ],
  },
  {
    events: [
      ...series(1, 8, 0.9, "wolf"),
      ...series(9, 4, 3, "orc"),
      ...series(18, 5, 1.3, "goblin"),
    ],
  },
  {
    events: [
      ...series(1, 3, 6, "armor"),
      ...series(3, 10, 1.4, "goblin"),
      ...series(18, 3, 2.5, "orc"),
    ],
  },
  {
    events: [
      ...series(1, 6, 2.2, "orc"),
      ...series(6, 2, 7, "armor"),
      ...series(20, 1, 0, "ogre"),
      ...series(23, 6, 1.1, "wolf"),
    ],
  },
];

export const TOTAL_ENEMIES = WAVES.reduce(
  (acc, w) => acc + w.events.length,
  0
);

// ---- ゲーム定数 ----

export const INITIAL_COST = 10;
export const MAX_COST = 99;
export const COST_PER_SECOND = 1 / 0.85;
export const INITIAL_LIFE = 10;
export const INTER_WAVE_DELAY = 4;
export const BLOCK_RADIUS = 0.5;
export const PROJECTILE_SPEED = 8;
