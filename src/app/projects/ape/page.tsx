"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Calculator,
  Database,
  ExternalLink,
  FileText,
  Github,
  Leaf,
  LineChart,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Calculator,
    title: "収益シミュレーション",
    description:
      "作付計画から収益予測まで、複数シナリオを比較検討できます。",
  },
  {
    icon: LineChart,
    title: "コスト分析",
    description:
      "肥料、農薬、人件費など、各種コストを可視化し、利益率を改善。",
  },
  {
    icon: Database,
    title: "データ管理",
    description:
      "過去の実績データを蓄積し、経年変化の分析が可能。",
  },
  {
    icon: BarChart3,
    title: "レポート出力",
    description:
      "分析結果をPDFやExcel形式で出力。経営判断の資料として活用。",
  },
];

const techStack = [
  { name: "Python", category: "Language" },
  { name: "Streamlit", category: "Framework" },
  { name: "Pandas", category: "Data Processing" },
  { name: "Plotly", category: "Visualization" },
  { name: "NumPy", category: "Computation" },
];

export default function APEProjectPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fresh-50 via-white to-navy-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fresh-100/50 to-transparent" />

        <div className="section-container relative z-10">
          {/* Back Link */}
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
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-fresh-100 rounded-full text-fresh-700 text-sm font-medium mb-4">
                <Leaf className="w-4 h-4" />
                Agriculture × Data
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                APE
                <span className="block text-lg md:text-xl font-normal text-navy-600 mt-2">
                  Agri-Profit Engine
                </span>
              </h1>

              <p className="text-xl text-fresh-600 font-medium mb-6">
                農業経営の収益最大化シミュレーター
              </p>

              <p className="text-navy-600 leading-relaxed mb-8">
                「感覚」に頼りがちな農業経営を、データとシミュレーションで「ロジカル」に変革。
                作付計画から収益予測まで、農家の経営判断をサポートするツールです。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* View Source - Conditional Rendering */}
                {/* TODO: Set this variable to the repository URL when available. If undefined/null, "Coming Soon" will be displayed. */}
                {(() => {
                  const sourceUrl = "https://github.com/taiki-horaguchi-alt/APE";
                  
                  return sourceUrl ? (
                    <Link href={sourceUrl} target="_blank">
                      <Button variant="secondary" size="md">
                        <Github className="w-5 h-5 mr-2" />
                        View Source
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="secondary" size="md" disabled className="opacity-60 cursor-not-allowed">
                      <Github className="w-5 h-5 mr-2" />
                      Coming Soon
                    </Button>
                  );
                })()}

                {/* Live Demo - Updated to PDF */}
                <Link href="/documents/ape_demo_images.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </Button>
                </Link>

                {/* View Slides - New Button */}
                <Link href="/documents/ape_slides.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="md">
                    <FileText className="w-5 h-5 mr-2" />
                    View Slides
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Screenshot Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-100">
                {/* Mock Browser Chrome */}
                <div className="bg-navy-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-navy-400">
                      ape-demo.streamlit.app
                    </div>
                  </div>
                </div>

                {/* Screenshot Area */}
                <div className="bg-gradient-to-br from-navy-50 to-fresh-50 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <TrendingUp className="w-16 h-16 text-fresh-400 mx-auto mb-4" />
                    <p className="text-navy-400 text-sm">
                      スクリーンショットまたはデモ動画
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-navy-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-fresh-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-fresh-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-900">+23%</div>
                    <div className="text-xs text-navy-500">利益率改善</div>
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
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-red-50 border border-red-100"
            >
              <h3 className="text-xl font-bold text-red-900 mb-4">課題</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  経験と勘に頼った作付計画
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  コスト構造の不透明さ
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  収益予測の難しさ
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  データ活用の知識不足
                </li>
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-fresh-50 border border-fresh-100"
            >
              <h3 className="text-xl font-bold text-fresh-900 mb-4">解決策</h3>
              <ul className="space-y-3 text-fresh-800">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  データドリブンな作付シミュレーション
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  コスト項目の詳細な可視化
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  複数シナリオの収益比較
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  直感的なUIで誰でも使える
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
            <p className="text-navy-600 max-w-2xl mx-auto">
              農業経営の意思決定をサポートする機能を搭載
            </p>
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
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 bg-white rounded-xl border border-navy-100 hover:border-fresh-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-fresh-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-fresh-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-navy-600">{feature.description}</p>
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
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="px-6 py-3 bg-navy-900 text-white rounded-full"
              >
                <span className="font-medium">{tech.name}</span>
                <span className="text-navy-400 text-sm ml-2">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              興味を持っていただけましたか？
            </h2>
            <p className="text-navy-300 mb-8 max-w-xl mx-auto">
              このプロジェクトの詳細や、私のスキルについてお話しする機会をいただければ幸いです。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button variant="primary" size="lg">
                  お問い合わせ
                </Button>
              </Link>
              <Link href="/#projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-navy-900"
                >
                  他のプロジェクトを見る
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
