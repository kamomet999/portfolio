"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Camera,
  ChefHat,
  ExternalLink,
  Github,
  LineChart,
  Receipt,
  RefreshCw,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Camera,
    title: "冷蔵庫OCR認識",
    description: "写真を撮るだけで食材を自動認識。賞味期限もAIが読み取り。",
  },
  {
    icon: Receipt,
    title: "チラシ価格分析",
    description: "スーパーのチラシをOCR解析し、最安値の店舗を自動比較。",
  },
  {
    icon: ChefHat,
    title: "AIレシピ提案",
    description: "冷蔵庫の食材からGoogle Geminiが最適なレシピを提案。",
  },
  {
    icon: ShoppingCart,
    title: "スマート買い物リスト",
    description: "期限切れ間近の食材と特売情報を組み合わせた最適な買い物リスト。",
  },
];

const techStack = [
  { name: "Next.js 16", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Prisma", category: "ORM" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Google Gemini", category: "AI" },
  { name: "Tailwind CSS", category: "Styling" },
];

const metrics = [
  { value: "30%", label: "食品ロス削減", icon: TrendingDown },
  { value: "¥5,000", label: "月間節約額", icon: LineChart },
  { value: "80%", label: "テストカバレッジ目標", icon: RefreshCw },
];

export default function SmartPantryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fresh-50 via-white to-navy-50" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-navy-600 hover:text-fresh-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-fresh-100 rounded-full text-fresh-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                AI-Powered Consumer App
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                Smart Pantry
                <span className="block text-lg md:text-xl font-normal text-navy-600 mt-2">
                  Tracker
                </span>
              </h1>

              <p className="text-xl text-fresh-600 font-medium mb-6">
                AI搭載の家庭用在庫管理アプリ
              </p>

              <p className="text-navy-600 leading-relaxed mb-8">
                冷蔵庫の中身をOCRで認識し、チラシの価格分析とAIレシピ提案を組み合わせることで、
                食品ロスの削減と家計の節約を同時に実現するスマートアプリ。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="https://smart-pantry-tracker-cnrflemev-kamomes-projects-668d3222.vercel.app" target="_blank">
                  <Button variant="primary" size="md">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </Button>
                </Link>
                <Link href="https://github.com/taiki-horaguchi-alt/smart-pantry-tracker" target="_blank">
                  <Button variant="secondary" size="md">
                    <Github className="w-5 h-5 mr-2" />
                    View Source
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* App Screenshot Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-100 bg-white p-4">
                {/* Phone Frame */}
                <div className="bg-navy-900 rounded-2xl p-2">
                  <div className="bg-gradient-to-br from-fresh-50 to-white rounded-xl aspect-[9/16] flex flex-col items-center justify-center p-6">
                    <Smartphone className="w-16 h-16 text-fresh-400 mb-4" />
                    <p className="text-navy-400 text-sm text-center">
                      アプリスクリーンショット
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-navy-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-fresh-100 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-fresh-600" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-navy-900">Gemini AI</div>
                    <div className="text-navy-500">レシピ提案</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-navy-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-fresh-100 flex items-center justify-center">
                    <Camera className="w-4 h-4 text-fresh-600" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-navy-900">OCR認識</div>
                    <div className="text-navy-500">自動登録</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-red-50 border border-red-100"
            >
              <h3 className="text-xl font-bold text-red-900 mb-4">課題</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  冷蔵庫の中身を把握しきれず、同じものを買ってしまう
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  賞味期限切れで食材を廃棄してしまう
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  複数店舗のチラシ比較が面倒
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  献立を考えるのが大変
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-fresh-50 border border-fresh-100"
            >
              <h3 className="text-xl font-bold text-fresh-900 mb-4">解決策</h3>
              <ul className="space-y-3 text-fresh-800">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  OCRで冷蔵庫を撮影するだけで在庫を自動管理
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  賞味期限アラートで食品ロスを防止
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  AIがチラシを分析し、最安値を自動比較
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  在庫から最適なレシピをAIが提案
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy-50/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">主な機能</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-navy-100 hover:border-fresh-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-fresh-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-fresh-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-navy-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-navy-900">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-fresh-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-fresh-400" />
                  </div>
                  <div className="text-4xl font-bold text-fresh-400 mb-2">{metric.value}</div>
                  <div className="text-navy-300">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">技術スタック</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-navy-900 text-white rounded-full"
              >
                <span className="font-medium">{tech.name}</span>
                <span className="text-navy-400 text-sm ml-2">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-fresh-600 to-fresh-500">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              AIビジネスコンペティション出展予定
            </h2>
            <p className="text-fresh-100 mb-8 max-w-xl mx-auto">
              このプロジェクトの詳細や、AI活用のアプローチについてお話しできます。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-fresh-600 hover:bg-fresh-50"
                >
                  お問い合わせ
                </Button>
              </Link>
              <Link href="/projects/chefs-market">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-fresh-600"
                >
                  次のプロジェクト
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
