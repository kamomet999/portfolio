"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ENEMY_DEF_MAP,
  GRID_COLS,
  GRID_ROWS,
  MAX_COST,
  PATH_TILES,
  RANGED_TILES,
  TILE,
  UNIT_DEFS,
  UNIT_DEF_MAP,
  WAVES,
  WAYPOINTS,
} from "../data";
import {
  canPlaceUnit,
  createInitialState,
  placeUnit,
  step,
  withdrawUnit,
} from "../engine";
import type { GamePhase, GameState, UnitDef } from "../types";

const CANVAS_W = GRID_COLS * TILE;
const CANVAS_H = GRID_ROWS * TILE;

interface Hud {
  phase: GamePhase;
  cost: number;
  costFraction: number;
  life: number;
  maxLife: number;
  waveIndex: number;
  remainingEnemies: number;
  interWave: boolean;
}

interface SelectedUnitInfo {
  uid: number;
  name: string;
  emoji: string;
  hp: number;
  maxHp: number;
  refund: number;
}

function drawMap(
  ctx: CanvasRenderingContext2D,
  hoverTile: [number, number] | null,
  placingDef: UnitDef | null,
  state: GameState
) {
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      const key = `${col},${row}`;
      const x = col * TILE;
      const y = row * TILE;
      const isPath = PATH_TILES.has(key);
      const isRanged = RANGED_TILES.has(key);

      if (isPath) {
        ctx.fillStyle = (col + row) % 2 === 0 ? "#d9c28e" : "#d2ba84";
      } else if (isRanged) {
        ctx.fillStyle = (col + row) % 2 === 0 ? "#9db77a" : "#94b072";
      } else {
        ctx.fillStyle = (col + row) % 2 === 0 ? "#7aa85c" : "#71a054";
      }
      ctx.fillRect(x, y, TILE, TILE);

      if (isRanged) {
        // 高台タイルの縁取り
        ctx.strokeStyle = "rgba(255,255,255,0.25)";
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 3, y + 3, TILE - 6, TILE - 6);
      }

      // 配置モード中は配置可能タイルをハイライト
      if (placingDef) {
        const valid =
          placingDef.kind === "melee" ? isPath : isRanged;
        const occupied = state.units.some(
          (u) => u.col === col && u.row === row
        );
        if (valid && !occupied) {
          ctx.fillStyle =
            placingDef.kind === "melee"
              ? "rgba(74,127,212,0.35)"
              : "rgba(61,160,106,0.35)";
          ctx.fillRect(x, y, TILE, TILE);
        }
      }
    }
  }

  // グリッド線
  ctx.strokeStyle = "rgba(0,0,0,0.08)";
  ctx.lineWidth = 1;
  for (let c = 0; c <= GRID_COLS; c++) {
    ctx.beginPath();
    ctx.moveTo(c * TILE, 0);
    ctx.lineTo(c * TILE, CANVAS_H);
    ctx.stroke();
  }
  for (let r = 0; r <= GRID_ROWS; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * TILE);
    ctx.lineTo(CANVAS_W, r * TILE);
    ctx.stroke();
  }

  // 出撃地点とゴール
  const [sx, sy] = WAYPOINTS[0];
  const [gx, gy] = WAYPOINTS[WAYPOINTS.length - 1];
  ctx.font = "32px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("⛩️", Math.max(sx, 0) * TILE + 26, (sy + 0.5) * TILE);
  ctx.fillText(
    "🏰",
    Math.min(gx, GRID_COLS - 1) * TILE + TILE - 26,
    (gy + 0.5) * TILE
  );

  // ホバー中のタイル
  if (hoverTile && placingDef) {
    const [hc, hr] = hoverTile;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.strokeRect(hc * TILE + 2, hr * TILE + 2, TILE - 4, TILE - 4);
    if (placingDef.range > 0) {
      drawRangeCircle(ctx, hc + 0.5, hr + 0.5, placingDef.range);
    }
  }
}

function drawRangeCircle(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  range: number
) {
  ctx.beginPath();
  ctx.arc(cx * TILE, cy * TILE, range * TILE, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.5)";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawHpBar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  ratio: number,
  width: number,
  color: string
) {
  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.fillRect(x - width / 2, y, width, 5);
  ctx.fillStyle = color;
  ctx.fillRect(x - width / 2, y, width * Math.max(0, ratio), 5);
}

function drawScene(
  ctx: CanvasRenderingContext2D,
  state: GameState,
  selectedUnitUid: number | null
) {
  // ユニット
  for (const unit of state.units) {
    const def = UNIT_DEF_MAP.get(unit.defId)!;
    const cx = (unit.col + 0.5) * TILE;
    const cy = (unit.row + 0.5) * TILE;

    if (unit.uid === selectedUnitUid && def.range > 0) {
      drawRangeCircle(ctx, unit.col + 0.5, unit.row + 0.5, def.range);
    }

    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fillStyle = def.color;
    ctx.fill();
    ctx.strokeStyle =
      unit.uid === selectedUnitUid ? "#ffffff" : "rgba(0,0,0,0.35)";
    ctx.lineWidth = unit.uid === selectedUnitUid ? 3 : 2;
    ctx.stroke();

    ctx.font = "22px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(def.emoji, cx, cy + 1);

    drawHpBar(ctx, cx, cy - 32, unit.hp / unit.maxHp, 44, "#4dd47a");
  }

  // 敵
  for (const enemy of state.enemies) {
    const def = ENEMY_DEF_MAP.get(enemy.defId)!;
    const cx = enemy.x * TILE;
    const cy = enemy.y * TILE;
    const radius = def.isBoss ? 26 : 17;

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = def.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.35)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = `${def.isBoss ? 28 : 18}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(def.emoji, cx, cy + 1);

    drawHpBar(
      ctx,
      cx,
      cy - radius - 10,
      enemy.hp / enemy.maxHp,
      def.isBoss ? 56 : 36,
      "#ff5d5d"
    );
  }

  // 弾
  for (const proj of state.projectiles) {
    ctx.beginPath();
    ctx.arc(proj.x * TILE, proj.y * TILE, 5, 0, Math.PI * 2);
    ctx.fillStyle = proj.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // エフェクト
  for (const effect of state.effects) {
    const progress = 1 - effect.ttl / effect.maxTtl;
    const cx = effect.x * TILE;
    const cy = effect.y * TILE;
    ctx.globalAlpha = 1 - progress;
    if (effect.type === "heal") {
      ctx.beginPath();
      ctx.arc(cx, cy, 14 + progress * 14, 0, Math.PI * 2);
      ctx.strokeStyle = effect.color;
      ctx.lineWidth = 3;
      ctx.stroke();
    } else if (effect.type === "death") {
      ctx.beginPath();
      ctx.arc(cx, cy, 8 + progress * 22, 0, Math.PI * 2);
      ctx.strokeStyle = effect.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    } else if (effect.type === "spawn") {
      ctx.beginPath();
      ctx.arc(cx, cy, 26 - progress * 8, 0, Math.PI * 2);
      ctx.strokeStyle = effect.color;
      ctx.lineWidth = 3;
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(cx, cy, 6 + progress * 12, 0, Math.PI * 2);
      ctx.fillStyle = effect.color;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}

export default function TowerDefenseGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>(createInitialState());
  const placingDefRef = useRef<UnitDef | null>(null);
  const selectedUnitRef = useRef<number | null>(null);
  const hoverTileRef = useRef<[number, number] | null>(null);
  const speedRef = useRef(1);
  const pausedRef = useRef(false);

  const [hud, setHud] = useState<Hud>({
    phase: "ready",
    cost: 10,
    costFraction: 0,
    life: 10,
    maxLife: 10,
    waveIndex: 0,
    remainingEnemies: 0,
    interWave: false,
  });
  const [placingId, setPlacingId] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<SelectedUnitInfo | null>(
    null
  );
  const [speed, setSpeed] = useState(1);
  const [paused, setPaused] = useState(false);

  const syncSelectedUnit = useCallback(() => {
    const uid = selectedUnitRef.current;
    if (uid == null) {
      setSelectedUnit(null);
      return;
    }
    const unit = stateRef.current.units.find((u) => u.uid === uid);
    if (!unit) {
      selectedUnitRef.current = null;
      setSelectedUnit(null);
      return;
    }
    const def = UNIT_DEF_MAP.get(unit.defId)!;
    setSelectedUnit({
      uid,
      name: def.name,
      emoji: def.emoji,
      hp: Math.max(0, Math.ceil(unit.hp)),
      maxHp: unit.maxHp,
      refund: Math.floor(def.cost / 2),
    });
  }, []);

  // ゲームループ
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let lastHudKey = "";

    const loop = (now: number) => {
      const rawDt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const state = stateRef.current;

      if (!pausedRef.current) {
        // 倍速時も挙動が安定するよう細かく刻んで更新する
        const total = rawDt * speedRef.current;
        const steps = Math.ceil(total / 0.02);
        for (let i = 0; i < steps; i++) step(state, total / steps);
      }

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        const dpr = window.devicePixelRatio || 1;
        if (canvas.width !== CANVAS_W * dpr) {
          canvas.width = CANVAS_W * dpr;
          canvas.height = CANVAS_H * dpr;
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        drawMap(ctx, hoverTileRef.current, placingDefRef.current, state);
        drawScene(ctx, state, selectedUnitRef.current);
      }

      const nextHud: Hud = {
        phase: state.phase,
        cost: Math.floor(state.cost),
        costFraction: state.cost - Math.floor(state.cost),
        life: state.life,
        maxLife: state.maxLife,
        waveIndex: state.waveIndex,
        remainingEnemies: state.remainingEnemies,
        interWave: state.interWaveTimer > 0,
      };
      const hudKey = JSON.stringify({
        ...nextHud,
        costFraction: Math.round(nextHud.costFraction * 20),
      });
      if (hudKey !== lastHudKey) {
        lastHudKey = hudKey;
        setHud(nextHud);
        syncSelectedUnit();
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [syncSelectedUnit]);

  const tileFromEvent = (
    e: React.PointerEvent<HTMLCanvasElement>
  ): [number, number] | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * CANVAS_W;
    const y = ((e.clientY - rect.top) / rect.height) * CANVAS_H;
    const col = Math.floor(x / TILE);
    const row = Math.floor(y / TILE);
    if (col < 0 || col >= GRID_COLS || row < 0 || row >= GRID_ROWS) {
      return null;
    }
    return [col, row];
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    hoverTileRef.current = tileFromEvent(e);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const tile = tileFromEvent(e);
    if (!tile) return;
    const [col, row] = tile;
    const state = stateRef.current;

    const placingDef = placingDefRef.current;
    if (placingDef && state.phase === "playing") {
      if (canPlaceUnit(state, placingDef, col, row, PATH_TILES, RANGED_TILES)) {
        placeUnit(state, placingDef, col, row);
        placingDefRef.current = null;
        setPlacingId(null);
      }
      return;
    }

    const unit = state.units.find((u) => u.col === col && u.row === row);
    selectedUnitRef.current = unit ? unit.uid : null;
    placingDefRef.current = null;
    setPlacingId(null);
    syncSelectedUnit();
  };

  const handleSelectCard = (def: UnitDef) => {
    if (hud.phase !== "playing") return;
    if (placingId === def.id) {
      placingDefRef.current = null;
      setPlacingId(null);
      return;
    }
    placingDefRef.current = def;
    setPlacingId(def.id);
    selectedUnitRef.current = null;
    setSelectedUnit(null);
  };

  const handleWithdraw = () => {
    if (selectedUnitRef.current == null) return;
    withdrawUnit(stateRef.current, selectedUnitRef.current);
    selectedUnitRef.current = null;
    setSelectedUnit(null);
  };

  const handleStart = () => {
    stateRef.current.phase = "playing";
  };

  const handleRestart = () => {
    stateRef.current = createInitialState();
    placingDefRef.current = null;
    selectedUnitRef.current = null;
    setPlacingId(null);
    setSelectedUnit(null);
    pausedRef.current = false;
    setPaused(false);
  };

  const toggleSpeed = () => {
    const next = speed === 1 ? 2 : 1;
    speedRef.current = next;
    setSpeed(next);
  };

  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  };

  const overlay =
    hud.phase === "ready" ? (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-900/80 rounded-lg text-center p-6">
        <h2 className="text-3xl font-bold text-white mb-3">⚔️ 王国防衛戦</h2>
        <p className="text-navy-100 max-w-md mb-2 text-sm leading-relaxed">
          鬼ヶ門から魔物が押し寄せてくる!
          道の上に<span className="text-blue-300 font-bold">近接ユニット</span>
          を置いて敵をブロックし、高台に
          <span className="text-green-300 font-bold">遠距離ユニット</span>
          を置いて殲滅せよ。
        </p>
        <p className="text-navy-200 text-xs mb-6">
          コストは時間で回復 / ユニットは撤退でコスト半分返還 / 全5ウェーブ
        </p>
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-fresh-500 hover:bg-fresh-600 text-white font-bold rounded-lg text-lg transition-colors"
        >
          出撃開始
        </button>
      </div>
    ) : hud.phase === "victory" ? (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-900/80 rounded-lg text-center p-6">
        <h2 className="text-4xl font-bold text-yellow-300 mb-3">🏆 勝利!</h2>
        <p className="text-white mb-1">
          王国を守り抜いた!残りライフ: {hud.life} / {hud.maxLife}
        </p>
        <p className="text-2xl mb-6">
          {"★".repeat(
            hud.life >= hud.maxLife ? 3 : hud.life >= hud.maxLife * 0.6 ? 2 : 1
          )}
          <span className="text-navy-400">
            {"★".repeat(
              3 -
                (hud.life >= hud.maxLife
                  ? 3
                  : hud.life >= hud.maxLife * 0.6
                    ? 2
                    : 1)
            )}
          </span>
        </p>
        <button
          onClick={handleRestart}
          className="px-8 py-3 bg-fresh-500 hover:bg-fresh-600 text-white font-bold rounded-lg transition-colors"
        >
          もう一度遊ぶ
        </button>
      </div>
    ) : hud.phase === "defeat" ? (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-950/80 rounded-lg text-center p-6">
        <h2 className="text-4xl font-bold text-red-300 mb-3">💀 敗北…</h2>
        <p className="text-white mb-6">城が陥落してしまった。再挑戦しよう。</p>
        <button
          onClick={handleRestart}
          className="px-8 py-3 bg-fresh-500 hover:bg-fresh-600 text-white font-bold rounded-lg transition-colors"
        >
          リトライ
        </button>
      </div>
    ) : null;

  return (
    <div className="w-full max-w-4xl mx-auto select-none">
      {/* HUD */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-3 px-4 py-3 bg-navy-800 rounded-lg text-white text-sm">
        <div className="flex items-center gap-1.5 font-bold">
          <span>❤️</span>
          <span
            className={hud.life <= 3 ? "text-red-400" : ""}
          >{`${hud.life} / ${hud.maxLife}`}</span>
        </div>
        <div className="flex items-center gap-2 flex-1 min-w-[160px]">
          <span className="font-bold text-yellow-300 whitespace-nowrap">
            💰 {hud.cost}
            <span className="text-navy-300 font-normal"> / {MAX_COST}</span>
          </span>
          <div className="flex-1 h-2 bg-navy-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400"
              style={{ width: `${hud.costFraction * 100}%` }}
            />
          </div>
        </div>
        <div className="font-bold">
          WAVE {Math.min(hud.waveIndex + 1, WAVES.length)} / {WAVES.length}
          {hud.interWave && (
            <span className="ml-2 text-fresh-300 font-normal animate-pulse">
              次ウェーブ準備中…
            </span>
          )}
        </div>
        <div>
          👿 残り <span className="font-bold">{hud.remainingEnemies}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={toggleSpeed}
            className="px-3 py-1 bg-navy-600 hover:bg-navy-500 rounded font-bold transition-colors"
          >
            ×{speed}
          </button>
          <button
            onClick={togglePause}
            disabled={hud.phase !== "playing"}
            className="px-3 py-1 bg-navy-600 hover:bg-navy-500 disabled:opacity-40 rounded font-bold transition-colors"
          >
            {paused ? "▶ 再開" : "⏸ 一時停止"}
          </button>
        </div>
      </div>

      {/* ゲーム画面 */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerDown}
          onPointerLeave={() => (hoverTileRef.current = null)}
          className="w-full rounded-lg shadow-lg cursor-pointer touch-none"
          style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
        />
        {overlay}
        {paused && hud.phase === "playing" && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900/50 rounded-lg pointer-events-none">
            <span className="text-4xl font-bold text-white">PAUSE</span>
          </div>
        )}
      </div>

      {/* 選択中ユニットの操作パネル */}
      {selectedUnit && (
        <div className="flex items-center gap-4 mt-3 px-4 py-2.5 bg-navy-700 rounded-lg text-white text-sm">
          <span className="text-xl">{selectedUnit.emoji}</span>
          <span className="font-bold">{selectedUnit.name}</span>
          <span>
            HP {selectedUnit.hp} / {selectedUnit.maxHp}
          </span>
          <button
            onClick={handleWithdraw}
            className="ml-auto px-4 py-1.5 bg-red-600 hover:bg-red-500 rounded font-bold transition-colors"
          >
            撤退(+{selectedUnit.refund} コスト返還)
          </button>
        </div>
      )}

      {/* ユニット選択 */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
        {UNIT_DEFS.map((def) => {
          const affordable = hud.cost >= def.cost;
          const active = placingId === def.id;
          return (
            <button
              key={def.id}
              onClick={() => handleSelectCard(def)}
              disabled={hud.phase !== "playing" || !affordable}
              title={def.desc}
              className={`flex flex-col items-center gap-0.5 px-2 py-2.5 rounded-lg border-2 text-xs font-bold transition-all ${
                active
                  ? "border-yellow-400 bg-navy-600 text-white scale-105"
                  : affordable && hud.phase === "playing"
                    ? "border-navy-500 bg-navy-700 text-white hover:border-navy-300"
                    : "border-navy-600 bg-navy-800 text-navy-400 opacity-60"
              }`}
            >
              <span className="text-2xl">{def.emoji}</span>
              <span>{def.name}</span>
              <span className="text-yellow-300">💰{def.cost}</span>
              <span
                className={`px-1.5 rounded text-[10px] ${
                  def.kind === "melee"
                    ? "bg-blue-500/40 text-blue-200"
                    : "bg-green-500/40 text-green-200"
                }`}
              >
                {def.kind === "melee" ? `近接 B${def.block}` : "遠距離"}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-navy-400 mt-3 text-center">
        ユニットカードを選んでマップをクリックで配置 /
        配置済みユニットをクリックで撤退 /
        近接は道(土色)、遠距離は高台(枠付き)に配置できます
      </p>
    </div>
  );
}
