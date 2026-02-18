import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20">
      {/* Background Elements - Dynamic Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-fresh-100 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Copywriting */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-navy-500 hover:text-fresh-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-fresh-50 to-blue-50 border border-fresh-100 rounded-full text-fresh-700 text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-fresh-500" />
            <span className="bg-gradient-to-r from-fresh-600 to-blue-600 bg-clip-text text-transparent font-bold">
              ごはんナビ - AIキッチン管理
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-navy-900 leading-[1.1] mb-6 tracking-tight">
            冷蔵庫を
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fresh-500 to-blue-500">
              スマホで開こう。
            </span>
          </h1>

          <p className="text-xl text-navy-600 mb-8 leading-relaxed max-w-lg">
            もう、買い忘れも、使い忘れもありません。
            <br />
            <span className="font-semibold text-navy-800">
              画像認識AI
            </span>
            があなたに代わって在庫を管理し、
            <br />
            <span className="font-semibold text-navy-800">
              最適なレシピ
            </span>
            まで提案します。
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://smart-pantry-tracker-nine.vercel.app/"
              target="_blank"
            >
              <Button
                variant="primary"
                size="lg"
                className="shadow-lg shadow-fresh-200 hover:shadow-fresh-300 transition-all font-bold px-8"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            </Link>
            <Link
              href="https://github.com/taiki-horaguchi-alt/smart-pantry-tracker"
              target="_blank"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-navy-200 text-navy-600 hover:bg-navy-50 hover:text-navy-900 transition-all"
              >
                <Github className="w-5 h-5 mr-2" />
                Source Code
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Main Device Frame Mockup (CSS only) */}
          <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-navy-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-navy-900/10 transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500 ease-out z-10">
            {/* Screen Content */}
            <div className="h-full w-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col relative">
              {/* Status Bar */}
              <div className="h-6 w-full bg-white relative z-20 flex justify-between px-6 items-center pt-2">
                <div className="text-[10px] font-bold text-navy-900">9:41</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-navy-900 rounded-full opacity-20" />
                  <div className="w-3 h-3 bg-navy-900 rounded-full opacity-20" />
                </div>
              </div>

              {/* App Header */}
              <div className="px-5 pt-4 pb-2">
                <div className="text-xl font-bold text-navy-900">ごはんナビ</div>
                <div className="text-xs text-navy-400">24 アイテム管理中</div>
              </div>

              {/* Mock List Items */}
              <div className="flex-1 px-4 py-2 space-y-3 overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-fresh-100 rounded-lg flex items-center justify-center shrink-0">
                      <div className="w-5 h-5 bg-fresh-400 rounded-sm opacity-50" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="h-3 w-20 bg-navy-200 rounded mb-1" />
                      <div className="h-2 w-12 bg-navy-100 rounded" />
                    </div>
                    <div className="w-8 h-4 bg-orange-100 rounded-full border border-orange-200" />
                  </div>
                ))}

                {/* AI Suggestion Card */}
                <div className="mt-4 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 text-blue-100 text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      AI提案
                    </div>
                    <div className="font-bold text-sm mb-1">
                      豚肉とキャベツで
                      <br />
                      回鍋肉が作れます
                    </div>
                    <div className="mt-3 flex justify-end">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                        レシピを見る
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-navy-900 rounded-b-xl z-20" />
          </div>

          {/* Floating UI Elements */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-20 -right-4 lg:-right-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                🥬
              </div>
              <div>
                <div className="text-xs text-navy-500 font-medium">節約額</div>
                <div className="text-lg font-bold text-navy-900">¥3,400</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute bottom-20 -left-4 lg:-left-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-sm font-bold text-red-500">
                !
              </div>
              <div>
                <div className="text-xs text-navy-500 font-medium">期限切れ</div>
                <div className="text-sm font-bold text-red-500">2 日以内</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
