export type DamageType = "physical" | "magic";

export interface UnitDef {
  id: string;
  name: string;
  emoji: string;
  cost: number;
  kind: "melee" | "ranged";
  isHealer?: boolean;
  hp: number;
  atk: number;
  def: number;
  /** 近接ユニットが同時にブロックできる敵数 */
  block: number;
  /** 射程(タイル単位)。近接は0でブロック中の敵のみ攻撃 */
  range: number;
  /** 攻撃間隔(秒) */
  interval: number;
  damageType: DamageType;
  /** 範囲攻撃の半径(タイル単位) */
  splashRadius?: number;
  color: string;
  desc: string;
}

export interface EnemyDef {
  id: string;
  name: string;
  emoji: string;
  hp: number;
  atk: number;
  def: number;
  /** 移動速度(タイル/秒) */
  speed: number;
  /** 攻撃間隔(秒) */
  interval: number;
  /** ゴール到達時に減るライフ */
  lifeDamage: number;
  color: string;
  isBoss?: boolean;
}

export interface SpawnEvent {
  time: number;
  enemyId: string;
}

export interface Wave {
  events: SpawnEvent[];
}

export interface UnitInstance {
  uid: number;
  defId: string;
  col: number;
  row: number;
  hp: number;
  maxHp: number;
  cooldown: number;
  blockedEnemies: number[];
}

export interface EnemyInstance {
  uid: number;
  defId: string;
  /** 経路上の進行距離(タイル単位) */
  dist: number;
  hp: number;
  maxHp: number;
  cooldown: number;
  blockedBy: number | null;
  x: number;
  y: number;
}

export interface Projectile {
  x: number;
  y: number;
  targetUid: number;
  speed: number;
  damage: number;
  damageType: DamageType;
  splashRadius?: number;
  color: string;
}

export interface Effect {
  x: number;
  y: number;
  type: "hit" | "heal" | "death" | "spawn";
  ttl: number;
  maxTtl: number;
  color: string;
}

export type GamePhase = "ready" | "playing" | "victory" | "defeat";

export interface GameState {
  phase: GamePhase;
  time: number;
  cost: number;
  life: number;
  maxLife: number;
  waveIndex: number;
  waveTime: number;
  spawned: boolean[];
  /** ウェーブ間の待機残り時間 */
  interWaveTimer: number;
  units: UnitInstance[];
  enemies: EnemyInstance[];
  projectiles: Projectile[];
  effects: Effect[];
  /** 全ウェーブ通しての残り敵数 */
  remainingEnemies: number;
  nextUid: number;
}
