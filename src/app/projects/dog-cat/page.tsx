"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  Github,
  PawPrint,
  PhoneOff,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: PhoneOff,
    title: "スマホを置くほど育つ",
    description:
      "スマホを見ない時間が、そのままこの子の「ごはん」になる。デジタルデトックスをそのまま育成のごほうびに変える独自ルール。",
  },
  {
    icon: PawPrint,
    title: "赤ちゃんをお迎え → 巣立ち",
    description:
      "ねんね中の赤ちゃんをお迎えし、おくるみ→赤ちゃん→子ども→成体へ。育てたら巣立たせ、また新しい子を迎える。",
  },
  {
    icon: BookOpen,
    title: "図鑑コレクション",
    description:
      "犬・猫それぞれ30種〜。性格の違う子を育てて巣立たせ、図鑑に殿堂入り。広告ゼロ・登録なしで気軽に。",
  },
  {
    icon: Smartphone,
    title: "iOS / Android ネイティブ",
    description:
      "Capacitorで両OSのネイティブアプリ化。ローカル通知と触覚フィードバックで、ふと戻りたくなる体験に。",
  },
];

const techStack = [
  { name: "JavaScript", category: "Language" },
  { name: "Capacitor", category: "iOS / Android" },
  { name: "Local Notifications", category: "Native" },
  { name: "HTML5 / CSS3", category: "UI" },
  { name: "PWA", category: "Web" },
];

export default function DogCatProjectPage() {
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
                <Sparkles className="w-4 h-4" />
                Digital Wellbeing × 育成
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                いぬねこ図鑑
                <span className="block text-lg md:text-xl font-normal text-navy-600 mt-2">
                  Inuneko Dex — スマホを置くほど育つ
                </span>
              </h1>

              <p className="text-xl text-fresh-600 font-medium mb-6">
                スマホを離れるほど、いぬねこが育つ。
              </p>

              <p className="text-navy-600 leading-relaxed mb-8">
                スマホを見ない時間が、そのままこの子の「ごはん」になる育成アプリ。
                ねんね中の赤ちゃんをお迎えし、おくるみ→赤ちゃん→子ども→成体へ。
                巣立たせて図鑑（犬・猫 各30種〜）を集める。広告ゼロ・登録なし。
                アイデアを仕様に落とし、AIと協働して0→1で形にしました。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://kamomet999.github.io/dog_cat/app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="md">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    遊んでみる
                  </Button>
                </Link>
                <Link
                  href="https://github.com/kamomet999/dog_cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="md">
                    <Github className="w-5 h-5 mr-2" />
                    View Source
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-fresh-50">
                <img
                  src="/previews/dog-cat.png"
                  alt="いぬねこ図鑑 スクリーンショット"
                  className="w-full h-auto max-h-[520px] object-contain mx-auto"
                />
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
                    <PhoneOff className="w-5 h-5 text-fresh-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-navy-900">置くほど育つ</div>
                    <div className="text-xs text-navy-500">スマホ断ち × 育成</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Craft */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-fresh-50 border border-fresh-100"
            >
              <h3 className="text-xl font-bold text-fresh-900 mb-4">体験</h3>
              <ul className="space-y-3 text-fresh-800">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  スマホを置くと「エサ」が貯まり、いぬねこが育つ
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  赤ちゃんをお迎えし、成体まで育てて巣立たせる
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  読書・運動・勉強の"おとも"に。画面から離れる時間を楽しく
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  集めて図鑑を埋めるコレクション性（広告ゼロ・登録なし）
                </li>
              </ul>
            </motion.div>

            {/* Craft */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-navy-50 border border-navy-100"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-4">こだわり</h3>
              <ul className="space-y-3 text-navy-700">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" />
                  「スマホを使わない時間」を報酬に変える独自ルール設計
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" />
                  おくるみ→赤ちゃん→子ども→成体の成長と放置時間の計算
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" />
                  Capacitorで iOS / Android ネイティブ化（通知・触覚）
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" />
                  企画→仕様→AI協働での実装→検証という作り方
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
              「スマホを置くほど育つ」体験を支える機能
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-fresh-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              企画から実装まで一人で
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              アイデアを、動くものに。
            </h2>
            <p className="text-navy-300 mb-8 max-w-xl mx-auto">
              現場の課題でも、ふと思いついた遊びでも——仕様に落としてAIと協働し、0→1で形にします。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://kamomet999.github.io/dog_cat/app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  遊んでみる
                </Button>
              </Link>
              <Link
                href="https://github.com/kamomet999/dog_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-navy-900"
                >
                  <Github className="w-5 h-5 mr-2" />
                  ソースを見る
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
