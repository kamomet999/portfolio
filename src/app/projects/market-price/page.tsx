"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  Database,
  ExternalLink,
  Layers,
  LineChart,
  Search,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import { Github } from "@/components/icons/Github";
import Link from "next/link";

// TODO: Update these URLs when projects are published
// const GITHUB_URL = "https://github.com/username/market-price";
// const DEMO_URL = "https://market-price-demo.vercel.app";

const features = [
  {
    icon: Search,
    title: "自動チラシ収集",
    description:
      "競合店のチラシ情報を自動でクローリング・収集。手作業の情報収集を完全自動化。",
  },
  {
    icon: Layers,
    title: "マルチテナント設計",
    description:
      "企業ごとに完全なデータ分離を実現。セキュアで拡張性の高いアーキテクチャ。",
  },
  {
    icon: Target,
    title: "4P分析フレームワーク",
    description:
      "Product・Price・Place・Promotionの観点から競合戦略を体系的に分析。",
  },
  {
    icon: TrendingUp,
    title: "価格トレンド分析",
    description:
      "時系列での価格推移を可視化。季節変動や競合の価格戦略を把握。",
  },
];

const techStack = [
  { name: "SaaS Architecture", category: "Design" },
  { name: "Multi-tenant", category: "Architecture" },
  { name: "BI Dashboard", category: "Frontend" },
  { name: "Data Pipeline", category: "Backend" },
  { name: "4P Analysis", category: "Framework" },
];

const architectureFeatures = [
  {
    icon: Building2,
    title: "テナント分離",
    description: "企業ごとに独立したデータベーススキーマでセキュリティを担保",
  },
  {
    icon: Database,
    title: "スケーラブルDB",
    description: "大量のチラシデータを効率的に格納・検索できる設計",
  },
  {
    icon: Shield,
    title: "アクセス制御",
    description: "ロールベースの権限管理で適切なデータアクセスを実現",
  },
];

export default function MarketPriceIntelligencePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-fresh-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-100/50 to-transparent" />

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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-100 rounded-full text-navy-700 text-sm font-medium mb-4">
                <BarChart3 className="w-4 h-4" />
                SaaS / BI Platform
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                Market Price
                <span className="block text-lg md:text-xl font-normal text-navy-600 mt-2">
                  Intelligence
                </span>
              </h1>

              <p className="text-xl text-fresh-600 font-medium mb-6">
                競合分析を自動化するSaaS型BIツール
              </p>

              <p className="text-navy-600 leading-relaxed mb-8">
                競合店のチラシ相場を自動収集・分析し、マーケティング戦略の意思決定をサポート。
                マルチテナント設計による安全なデータ分離と、4P分析フレームワークに基づく
                体系的な競合分析を実現します。
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
                      market-price-intelligence.app
                    </div>
                  </div>
                </div>

                {/* Screenshot Area */}
                <div className="bg-gradient-to-br from-navy-50 to-fresh-50 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <LineChart className="w-16 h-16 text-navy-400 mx-auto mb-4" />
                    <p className="text-navy-400 text-sm">
                      ダッシュボードスクリーンショット
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
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-900">-40%</div>
                    <div className="text-xs text-navy-500">分析工数削減</div>
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
                  手作業でのチラシ情報収集に膨大な時間
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  競合の価格変動をリアルタイムで追えない
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  データの属人化と共有の困難さ
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                  体系的な分析フレームワークの欠如
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
                  自動クローリングで情報収集を完全自動化
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  リアルタイムダッシュボードで即座に把握
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  クラウドベースでチーム全体で共有
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  4P分析に基づく体系的アプローチ
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
              競合分析の自動化と戦略立案をサポートする機能群
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

      {/* Architecture Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              マルチテナントアーキテクチャ
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              企業ごとのデータ分離とセキュリティを担保する設計
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {architectureFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-8 rounded-2xl bg-navy-900"
                >
                  <div className="w-16 h-16 rounded-2xl bg-fresh-500/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-fresh-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-navy-300">{feature.description}</p>
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
