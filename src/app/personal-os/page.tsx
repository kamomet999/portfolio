"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  CheckSquare,
  Cog,
  Database,
  FileText,
  Github,
  Heart,
  LineChart,
  RefreshCw,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const systemComponents = [
  {
    icon: FileText,
    title: "Markdown Files",
    description: "全てのデータをテキストファイルで管理。ベンダーロックインを排除し、AIが読みやすい形式に。",
    color: "navy",
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "蓄積されたログと原則をAIが読み込み、あなたの「分身」として思考・判断を代行。",
    color: "fresh",
  },
  {
    icon: RefreshCw,
    title: "Feedback Loop",
    description: "「行動→記録→振り返り→原則の修正」のサイクルを回し、OS（人格）をアップデートし続ける。",
    color: "fresh",
  },
];

const dataFlow = [
  {
    icon: Database,
    label: "Input (Logs)",
    items: ["06_人生ログ (Daily)", "08_リスクと失敗", "10_自分史", "新しい経験・学び"],
  },
  {
    icon: Brain,
    label: "Process (AI/Me)",
    items: ["01_コア・原則の参照", "04_判断ロジックの適用", "AIによるパターン認識", "月次・年次振り返り"],
  },
  {
    icon: Target,
    label: "Output (Decision)",
    items: ["迷いのない意思決定", "09_振り返り (Update)", "行動指針の明確化", "自分固有のAIモデル"],
  },
];

const principles = [
  {
    icon: Brain,
    title: "Clarity",
    description: "頭の中を外部化し、認知負荷を下げる",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "繰り返し作業は自動化で時間を創出",
  },
  {
    icon: LineChart,
    title: "Measurement",
    description: "計測できないものは改善できない",
  },
  {
    icon: RefreshCw,
    title: "Iteration",
    description: "小さく試して、素早く改善する",
  },
];

export default function PersonalOSPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-fresh-500/20 rounded-full blur-xl"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-fresh-400/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="section-container relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-navy-300 hover:text-fresh-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-fresh-500/20 rounded-full text-fresh-400 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Self-Optimization System
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Personal
              <span className="text-fresh-400"> OS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-navy-200 mb-8 leading-relaxed"
            >
              「自分というリソース」を最大化するための管理システム。
              <br />
              タスク管理、振り返り、自動化を連携させ、
              <br />
              持続可能なパフォーマンスを実現する。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="https://github.com/taiki-horaguchi-alt/personal-os" target="_blank">
                <Button variant="primary" size="lg">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              なぜ Personal OS なのか
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              コンピュータにOSがあるように、人間にも「動作原理」を整理するシステムが必要。
              自分の状態を把握し、最適な行動を選択するための基盤。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-100 to-fresh-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-navy-700" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-navy-600">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20 bg-navy-50/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              システム構成
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              3つのコンポーネントが連携し、継続的な改善サイクルを回す
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {systemComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 border border-navy-100 hover:border-fresh-300 hover:shadow-xl transition-all duration-300 h-full">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                        component.color === "fresh"
                          ? "bg-fresh-100"
                          : "bg-navy-100"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${
                          component.color === "fresh"
                            ? "text-fresh-600"
                            : "text-navy-600"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      {component.title}
                    </h3>
                    <p className="text-navy-600">{component.description}</p>
                  </div>

                  {/* Connection Arrow */}
                  {index < systemComponents.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-navy-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Flow / Architecture */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              データフロー
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              入力から出力まで、データの流れを可視化
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {dataFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-fresh-500 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-fresh-400" />
                      </div>
                      <h3 className="text-xl font-bold">{step.label}</h3>
                    </div>

                    <ul className="space-y-2">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-navy-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-fresh-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  {index < dataFlow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-navy-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Folder Structure */}
      <section className="py-20 bg-navy-50/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              フォルダ構造
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              12のカテゴリで「自分」を体系的に整理
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-navy-100 p-4 shadow-lg">
              <Image
                src="/personal-os-structure.png"
                alt="Personal OS フォルダ構造"
                width={800}
                height={900}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results / Benefits */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              得られた効果
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                metric: "タスク完了率",
                value: "+40%",
                description: "優先順位の明確化により完了率が向上",
              },
              {
                icon: Calendar,
                metric: "計画精度",
                value: "+60%",
                description: "見積もりと実績の乖離が減少",
              },
              {
                icon: Heart,
                metric: "ストレス軽減",
                value: "-30%",
                description: "頭の中の整理により認知負荷が低下",
              },
            ].map((result, index) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-8 bg-gradient-to-br from-fresh-50 to-white rounded-2xl border border-fresh-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-fresh-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-fresh-600" />
                  </div>
                  <div className="text-4xl font-bold text-fresh-600 mb-2">
                    {result.value}
                  </div>
                  <div className="font-semibold text-navy-900 mb-1">
                    {result.metric}
                  </div>
                  <p className="text-sm text-navy-600">{result.description}</p>
                </motion.div>
              );
            })}
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
              自己最適化への取り組みに興味がありますか？
            </h2>
            <p className="text-navy-300 mb-8 max-w-xl mx-auto">
              Personal OSの詳細や、生産性向上のアプローチについてお話しできれば幸いです。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button variant="primary" size="lg">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
