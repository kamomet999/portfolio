import { motion } from "framer-motion";
import { Camera, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "撮る",
    description: "買ってきた食材を、冷蔵庫に入れる前にスマホで撮影。それだけで完了です。",
    icon: Camera,
  },
  {
    step: "02",
    title: "解析される",
    description: "Google Gemini 2.5 が画像を解析。食材名・賞味期限・個数を自動でデータベース化します。",
    icon: ArrowRight,
  },
  {
    step: "03",
    title: "整う",
    description: "アプリを開けば、冷蔵庫の中身が一目瞭然。買い物リストも自動で作成されます。",
    icon: CheckCircle2,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-fresh-50/50 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-fresh-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              魔法のように、
              <br />
              一瞬で終わります。
            </h2>
            <p className="text-navy-600 mb-8 leading-relaxed">
              従来のアプリのように、ひとつひとつ手入力する必要はありません。
              最新の画像認識技術が、あなたの家事の時間を劇的に短縮します。
            </p>

            <div className="space-y-8">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center font-bold text-lg border border-navy-100">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-fresh-100 to-blue-50 relative overflow-hidden flex items-center justify-center border border-white/50 shadow-2xl">
              {/* Animated gradient background instead of external image */}
              <div className="absolute inset-0 bg-gradient-to-br from-fresh-200/30 via-blue-200/20 to-fresh-300/20" />
              
              <div className="relative z-10 w-64 h-64 border-2 border-fresh-400 rounded-lg flex flex-col justify-between p-4 bg-black/5 backdrop-blur-sm">
                <div className="flex justify-between">
                  <div className="w-8 h-8 border-t-4 border-l-4 border-fresh-500 rounded-tl-lg" />
                  <div className="w-8 h-8 border-t-4 border-r-4 border-fresh-500 rounded-tr-lg" />
                </div>
                
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-fresh-400 shadow-[0_0_15px_rgba(72,187,120,0.8)] animate-pulse" />
                
                <div className="bg-black/60 text-white text-xs p-2 rounded self-center backdrop-blur-md">
                  Analyzing... 98%
                </div>

                <div className="flex justify-between">
                  <div className="w-8 h-8 border-b-4 border-l-4 border-fresh-500 rounded-bl-lg" />
                  <div className="w-8 h-8 border-b-4 border-r-4 border-fresh-500 rounded-br-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
