import { motion } from "framer-motion";
import { CheckCircle2, Circle, Timer, Cpu, Sparkles, ShoppingCart } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "コア基盤の構築",
    status: "completed",
    date: "2025年 Q1",
    description: "Next.js 16 環境構築、Prisma + PostgreSQL、UIコンポーネント設計、データベーススキーマ定義",
    icon: Circle,
  },
  {
    phase: "Phase 2",
    title: "AI画像解析の統合",
    status: "completed",
    date: "2025年 Q1",
    description: "Google Gemini 2.5統合。チラシOCR解析、冷蔵庫スキャン機能の実装。モデルフォールバック対応。",
    icon: Sparkles,
  },
  {
    phase: "Phase 3",
    title: "生活支援機能",
    status: "completed",
    date: "2025年 Q1",
    description: "買い物リスト自動生成、市場相場データ連携、AIレシピ提案、サイトブランディング「ごはんナビ」",
    icon: ShoppingCart,
  },
  {
    phase: "Phase 4",
    title: "認証・通知・自律化",
    status: "in-progress",
    date: "開発中",
    description: "Clerk認証、リアルタイム賞味期限通知、自律エージェントによる献立・発注の自動化",
    icon: Cpu,
  },
];

export const Roadmap = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-container relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-fresh-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            開発ロードマップ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            進化し続ける、
            <br />
            スマートパントリー
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            このプロジェクトは現在進行形で開発が進んでいます。
            <br />
            最新のAgentic AI技術を取り入れ、単なる管理アプリから「自律的な家事パートナー」へと進化を目指しています。
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-100 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy-100 -translate-x-1/2 md:hidden" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 bg-white p-1 rounded-full border-4 border-white shadow-sm">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      item.status === 'completed' ? 'bg-fresh-50 border-fresh-500 text-fresh-600' :
                      item.status === 'in-progress' ? 'bg-blue-50 border-blue-500 text-blue-600' :
                      'bg-gray-50 border-gray-300 text-gray-400'
                    }`}>
                      {item.status === 'completed' ? <CheckCircle2 size={20} /> :
                       item.status === 'in-progress' ? <Timer size={20} className="animate-pulse" /> :
                       <Circle size={20} />}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isEven ? "md:text-right" : "md:text-left"
                  }`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-navy-50 hover:shadow-md transition-shadow duration-300">
                      <div className={`flex items-center gap-3 mb-2 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          item.status === 'completed' ? 'bg-fresh-100 text-fresh-700' :
                          item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {item.phase}
                        </span>
                        <span className="text-gray-400 text-xs font-mono">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                      <p className="text-navy-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
