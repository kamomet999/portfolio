import { motion } from "framer-motion";
import {
  ChefHat,
  Receipt,
  ScanLine,
  ShoppingCart,
  TrendingDown,
} from "lucide-react";

const bentoItems = [
  {
    title: "冷蔵庫OCR認識",
    description: "写真を撮るだけで、中身を自動リスト化。もう入力はいりません。",
    icon: ScanLine,
    className: "lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-navy-900 to-navy-800 text-white",
    iconClassName: "text-fresh-400 w-8 h-8",
  },
  {
    title: "食品ロス削減",
    description: "賞味期限を自動計算し、無駄にする前に通知します。",
    icon: TrendingDown,
    className: "bg-red-50 text-red-900 border border-red-100",
    iconClassName: "text-red-500 w-6 h-6",
  },
  {
    title: "チラシ価格分析",
    description: "近隣スーパーの最安値をAIが比較。",
    icon: Receipt,
    className: "bg-white text-navy-900 border border-navy-100",
    iconClassName: "text-navy-500 w-6 h-6",
  },
  {
    title: "AIレシピ提案",
    description: "あるものだけで作る、最高の献立。",
    icon: ChefHat,
    className: "bg-gradient-to-r from-fresh-50 to-blue-50 text-navy-900 border border-fresh-100",
    iconClassName: "text-fresh-600 w-6 h-6",
  },
  {
    title: "買い物リスト",
    description: "レシピと在庫から自動生成。予算目安も表示。",
    icon: ShoppingCart,
    className: "bg-blue-50 text-navy-900 border border-blue-100",
    iconClassName: "text-blue-500 w-6 h-6",
  },
];

export const BentoGrid = () => {
  return (
    <section className="py-24 bg-navy-50/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            ただの在庫管理じゃ、
            <br />
            終わらせない。
          </h2>
          <p className="text-navy-600">
            最新のAI技術を駆使して、あなたの生活を賢くサポート。
            <br className="hidden md:block" />
            面倒なことは全部アプリに任せて、美味しいご飯を楽しみましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ${item.className}`}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center shadow-sm mb-4">
                    <Icon className={item.iconClassName} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.title === "冷蔵庫OCR認識" && (
                  <div className="mt-4 flex gap-2 overflow-hidden opacity-50">
                    {/* Decorative seamless pattern for the main card */}
                    <div className="h-1 bg-white/20 w-8 rounded-full" />
                    <div className="h-1 bg-white/20 w-12 rounded-full" />
                    <div className="h-1 bg-white/20 w-4 rounded-full" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
