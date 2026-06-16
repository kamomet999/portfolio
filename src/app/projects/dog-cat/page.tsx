"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Gamepad2,
  Github,
  PawPrint,
  Smartphone,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Clock,
    title: "オフライン進行＋放置報酬",
    description:
      "アプリを閉じている間も時間が進行。戻ると空腹・成長・コインの変化が待っている放置ゲームの肝を実装。",
  },
  {
    icon: PawPrint,
    title: "4ステータスの世話",
    description:
      "「ごはん・あそぶ・おそうじ・ねんね」で時間減衰するステータスをケア。ながら世話で育てる。",
  },
  {
    icon: Trophy,
    title: "成長段階 ＆ 図鑑コレクション",
    description:
      "たまご→成長段階を経て育成。犬・猫を集めて図鑑（ずかん）を埋めていく収集要素。",
  },
  {
    icon: Smartphone,
    title: "PWA（インストール不要）",
    description:
      "ブラウザでそのまま遊べてオフラインでも動作。審査なしで即公開・即検証できる構成。",
  },
];

const techStack = [
  { name: "JavaScript", category: "Language" },
  { name: "PWA", category: "Platform" },
  { name: "HTML5 / CSS3", category: "Markup" },
  { name: "Service Worker", category: "Offline" },
  { name: "LocalStorage", category: "State" },
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
                <Gamepad2 className="w-4 h-4" />
                Idle Game × PWA
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
                いぬねこ図鑑
                <span className="block text-lg md:text-xl font-normal text-navy-600 mt-2">
                  Inuneko Zukan — 放置型ペット育成
                </span>
              </h1>

              <p className="text-xl text-fresh-600 font-medium mb-6">
                スマホで「ながら世話」する放置型ペット育成アプリ
              </p>

              <p className="text-navy-600 leading-relaxed mb-8">
                閉じている間も時間が進み、戻ると「お腹が空いた・成長した・コインが貯まった」が待っている。
                犬・猫を選んで育て、図鑑を埋めていくPWA。アイデアを仕様に落とし、AIと協働して0→1で形にしました。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
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
                    <Clock className="w-5 h-5 text-fresh-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-navy-900">オフライン進行</div>
                    <div className="text-xs text-navy-500">閉じても育つ</div>
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
                  たまごを選んで、犬か猫を育てる
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  すきま時間に世話するだけのゆるい設計
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  放置中も成長し、戻ると変化が待っている
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fresh-500 mt-2" />
                  集めて図鑑を埋めるコレクション性
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
              <h3 className="text-xl font-bold text-navy-900 mb-4">実装のこだわり</h3>
              <ul className="space-y-3 text-navy-700">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" />
                  放置ゲームの肝＝オフライン進行の時間計算を単体で設計
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" />
                  端末時計の巻き戻りを検知し放置報酬の不正を抑止
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" />
                  engine / art / ui / breeds に責務分割した構成
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
              「ながら世話」で続く、放置型育成の体験を支える機能
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
                href="https://github.com/kamomet999/dog_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
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
