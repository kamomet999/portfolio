import type { Metadata } from "next";
import Link from "next/link";
import TowerDefenseGame from "./components/TowerDefenseGame";

export const metadata: Metadata = {
  title: "王国防衛戦 - Tower Defense Game",
  description:
    "千年戦争アイギス風のブラウザタワーディフェンスゲーム。近接ユニットで敵をブロックし、遠距離ユニットで殲滅しよう。",
};

export default function TowerDefensePage() {
  return (
    <main className="min-h-screen bg-navy-950 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-navy-300 hover:text-white text-sm transition-colors"
        >
          ← ポートフォリオに戻る
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-3">
          ⚔️ 王国防衛戦
        </h1>
        <p className="text-navy-300 text-sm mt-1">
          千年戦争アイギス風タワーディフェンス —
          コストを貯めてユニットを配置し、全5ウェーブの敵から城を守り抜け
        </p>
      </div>
      <TowerDefenseGame />
    </main>
  );
}
