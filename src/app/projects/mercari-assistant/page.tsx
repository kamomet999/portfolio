"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Camera,
  CheckCircle,
  ExternalLink,
  ImageIcon,
  Lightbulb,
  Sparkles,
  Sun,
  Target,
  Upload,
  Zap,
} from "lucide-react";
import { Github } from "@/components/icons/Github";
import Link from "next/link";

// TODO: Update these URLs when projects are published
// const GITHUB_URL = "https://github.com/username/mercari-assistant";
// const DEMO_URL = "https://mercari-assistant-demo.streamlit.app";

const features = [
  {
    icon: Target,
    title: "構図分析",
    description:
      "商品の配置、余白のバランス、視線誘導を解析し、購買意欲を高める構図かを判定。",
  },
  {
    icon: Sun,
    title: "明るさ判定",
    description:
      "画像の明度・コントラストを分析。商品が魅力的に見える適切な明るさかを評価。",
  },
  {
    icon: ImageIcon,
    title: "視認性チェック",
    description:
      "商品の状態や特徴が伝わるか、ピント・解像度・情報量を総合的にスコアリング。",
  },
  {
    icon: Lightbulb,
    title: "改善提案",
    description:
      "スコアに基づき、より売れやすい写真にするための具体的なアドバイスを提示。",
  },
];

const techStack = [
  { name: "Python", category: "Language" },
  { name: "OpenCV", category: "Image Processing" },
  { name: "TensorFlow", category: "ML Framework" },
  { name: "NumPy", category: "Computation" },
  { name: "Streamlit", category: "UI" },
];

const workflowSteps = [
  {
    icon: Upload,
    title: "画像アップロード",
    description: "出品したい商品の写真をアップロード",
  },
  {
    icon: Brain,
    title: "AI解析",
    description: "複数の観点からAIが画像を分析",
  },
  {
    icon: CheckCircle,
    title: "スコア表示",
    description: "総合スコアと各項目の評価を確認",
  },
  {
    icon: Sparkles,
    title: "改善実行",
    description: "提案に従って写真を改善し再出品",
  },
];

export default function MercariAssistantPage() {
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
                <Brain className="w-4 h-4" />
                AI / Personal Tool
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                Mercari AI
                <span className="block text-lg md:text-xl font-normal text-navy-600 mt-2">
                  Listing Assistant
                </span>
              </h1>

              <p className="text-xl text-fresh-600 font-medium mb-6">
                「売れる写真」をAIが判定するツール
              </p>

              <p className="text-navy-600 leading-relaxed mb-8">
                フリマアプリ出品時の画像をAIが解析し、構図・明るさ・視認性を
                スコアリング。売れやすい写真かどうかを判定し、改善点を提案することで
                高値での売却をサポートする個人開発ツールです。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="md" disabled className="opacity-60 cursor-not-allowed">
                  <Github className="w-5 h-5 mr-2" />
                  Coming Soon
                </Button>
                <Button variant="primary" size="md" disabled className="opacity-60 cursor-not-allowed">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Coming Soon
                </Button>
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
                      mercari-ai-assistant.streamlit.app
                    </div>
                  </div>
                </div>

                {/* Screenshot Area */}
                <div className="bg-gradient-to-br from-navy-50 to-fresh-50 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="w-16 h-16 text-fresh-400 mx-auto mb-4" />
                    <p className="text-navy-400 text-sm">
                      スコアリング画面のスクリーンショット
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Score Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-navy-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fresh-400 to-fresh-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">85</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">
                      総合スコア
                    </div>
                    <div className="text-xs text-fresh-600">売れやすい写真です</div>
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
                  なかなか売れない原因がわからない
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  「売れる写真」の基準が曖昧
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  何度も写真を撮り直す手間
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  値下げ以外の改善策がわからない
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
                  AIが写真の問題点を明確に指摘
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  数値スコアで客観的に評価
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  出品前に改善点をチェック
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  具体的な改善アドバイスを提示
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
            <h2 className="text-3xl font-bold text-navy-900 mb-4">分析機能</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              複数の観点から画像を分析し、総合的なスコアを算出
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">使い方</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              シンプルな4ステップで売れる写真に改善
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="text-center p-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-fresh-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-fresh-500 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-semibold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-navy-600">{step.description}</p>
                  </div>

                  {/* Arrow connector */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 -right-3 z-10">
                      <ArrowRight className="w-6 h-6 text-navy-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-navy-50/50">
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

      {/* Sample Score Card */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              スコアカードサンプル
            </h2>

            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8">
              {/* Total Score */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-8 border-fresh-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-fresh-400">85</div>
                      <div className="text-sm text-navy-300">/ 100</div>
                    </div>
                  </div>
                  <Zap className="absolute -top-2 -right-2 w-8 h-8 text-fresh-400" />
                </div>
              </div>

              {/* Individual Scores */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "構図", score: 90, color: "bg-green-500" },
                  { label: "明るさ", score: 85, color: "bg-fresh-500" },
                  { label: "視認性", score: 80, color: "bg-yellow-500" },
                  { label: "情報量", score: 85, color: "bg-fresh-500" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm">{item.label}</span>
                      <span className="text-fresh-400 font-bold">
                        {item.score}
                      </span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestion */}
              <div className="mt-6 p-4 bg-fresh-500/20 rounded-xl border border-fresh-500/30">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-fresh-400 mt-0.5" />
                  <div>
                    <div className="text-fresh-400 font-medium text-sm mb-1">
                      改善ポイント
                    </div>
                    <p className="text-navy-200 text-sm">
                      背景をもう少しシンプルにすると、商品がより際立ちます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
