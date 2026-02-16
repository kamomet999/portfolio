"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  CheckCircle,
  FileText,
  Github,
  MessageSquare,
  Package,
  Phone,
  ShoppingBag,
  Store,
  Truck,
  Users,
} from "lucide-react";
import Link from "next/link";

const painPoints = [
  {
    icon: Phone,
    title: "電話・FAX地獄",
    description: "毎朝複数の仕入先に個別連絡。時間と手間が膨大。",
  },
  {
    icon: FileText,
    title: "発注ミス",
    description: "手書きFAXによる伝達ミス。数量・品目の間違いが頻発。",
  },
  {
    icon: Package,
    title: "在庫管理の煩雑さ",
    description: "複数仕入先の納品スケジュール管理が困難。",
  },
];

const solutions = [
  {
    icon: MessageSquare,
    title: "LINE一括発注",
    description: "使い慣れたLINEで全仕入先に一括発注。操作学習コストゼロ。",
  },
  {
    icon: Store,
    title: "既存流通網の活用",
    description: "地域の流通パートナーの市場インフラを活用した確実な配送。",
  },
  {
    icon: Users,
    title: "50店舗規模のネットワーク",
    description: "地域の飲食店を束ねてスケールメリットを創出。",
  },
];

const businessModel = [
  { label: "月間取引目標", value: "300万円", sub: "50店舗 × 月6万円" },
  { label: "FAX削減率", value: "80%", sub: "デジタル化効果" },
  { label: "発注時間短縮", value: "70%", sub: "1店舗あたり" },
];

export default function ChefsMarketPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="section-container relative z-10">
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-fresh-500/20 rounded-full text-fresh-400 text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                B2B Platform
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Chef&apos;s Market
                <span className="block text-lg md:text-xl font-normal text-navy-300 mt-2">
                  Platform
                </span>
              </h1>

              <p className="text-xl text-fresh-400 font-medium mb-6">
                飲食店向けB2B食材調達プラットフォーム
              </p>

              <p className="text-navy-200 leading-relaxed mb-8">
                北海道の飲食店が抱える「仕入れの煩雑さ」を解消。
                複数の仕入先への発注をLINEで一元化し、
                FAX業務を80%削減。既存の流通網を活用したリアルなBtoBソリューション。
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="md" className="opacity-60 cursor-not-allowed">
                  🚧 Coming Soon
                </Button>
              </div>
            </motion.div>

            {/* Business Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                {/* Flow Diagram */}
                <div className="space-y-6">
                  {/* Restaurants */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-fresh-500/20 border-2 border-navy-700 flex items-center justify-center"
                        >
                          <Store className="w-5 h-5 text-fresh-400" />
                        </div>
                      ))}
                    </div>
                    <span className="text-navy-300 text-sm">50+ 飲食店</span>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-fresh-400 to-navy-600" />
                  </div>

                  {/* LINE Platform */}
                  <div className="bg-[#06C755]/20 rounded-xl p-4 text-center border border-[#06C755]/30">
                    <MessageSquare className="w-8 h-8 text-[#06C755] mx-auto mb-2" />
                    <span className="text-white font-medium">LINE 一括発注</span>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-[#06C755] to-navy-600" />
                  </div>

                  {/* Distribution Hub */}
                  <div className="bg-navy-700/50 rounded-xl p-4 text-center border border-navy-600">
                    <Truck className="w-8 h-8 text-fresh-400 mx-auto mb-2" />
                    <span className="text-white font-medium">地域流通パートナー</span>
                    <p className="text-navy-400 text-xs mt-1">既存物流インフラ活用</p>
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gradient-to-b from-navy-600 to-fresh-400" />
                  </div>

                  {/* Suppliers */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-navy-600 border-2 border-navy-700 flex items-center justify-center"
                        >
                          <ShoppingBag className="w-5 h-5 text-navy-300" />
                        </div>
                      ))}
                    </div>
                    <span className="text-navy-300 text-sm">複数仕入先</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              飲食店が抱える<span className="text-red-500">課題</span>
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              毎朝の仕入れ業務に追われる飲食店オーナーの声から生まれたソリューション
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-red-50 rounded-xl border border-red-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-red-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-red-700">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-navy-50/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Chef&apos;s Marketの<span className="text-fresh-500">解決策</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-navy-100 hover:border-fresh-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-fresh-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-fresh-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{solution.title}</h3>
                  <p className="text-sm text-navy-600">{solution.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-navy-900">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">ビジネスインパクト</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessModel.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-navy-800/50 rounded-2xl border border-navy-700"
              >
                <div className="text-4xl md:text-5xl font-bold text-fresh-400 mb-2">
                  {item.value}
                </div>
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-navy-400 text-sm">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MVP Approach */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                MVPアプローチ
              </h2>
              <p className="text-navy-600">
                モバイルアプリ開発ではなく、LINE APIを活用した最小限の実装で
                市場検証を優先するリーンな戦略
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                "LINE公式アカウントで受注（アプリ開発不要）",
                "既存の物流網を活用（配送インフラ構築不要）",
                "地域流通パートナーとの協業で信頼性を担保",
                "50店舗からスタートし、PMFを検証",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-fresh-50 rounded-xl border border-fresh-100"
                >
                  <CheckCircle className="w-6 h-6 text-fresh-500 shrink-0" />
                  <span className="text-navy-800">{item}</span>
                </motion.div>
              ))}
            </div>
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
              B2Bソリューションに興味がありますか？
            </h2>
            <p className="text-navy-300 mb-8 max-w-xl mx-auto">
              現場を知るからこそ作れるリアルなソリューション。
              業界DXの取り組みについてお話しできます。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button variant="primary" size="lg">
                  お問い合わせ
                </Button>
              </Link>
              <Link href="/projects/ape">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-navy-900"
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
