"use client";

import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Personal OS Template",
    description:
      "人格と意思決定プロセスを外部化・構造化した自分専用のオペレーティングシステム。テンプレートとして公開中。",
    tags: ["Markdown", "Obsidian", "AI Agents", "Life Management"],
    href: "/personal-os",
  },
];


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-fresh-50" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-fresh-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-navy-100 shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-fresh-500" />
              <span className="text-sm font-medium text-navy-700">
                Business × Technology × 現場感
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6"
            >
              Bridging Agriculture &{" "}
              <span className="text-fresh-500">Technology</span>
              <br />
              with Business Logic
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-navy-600 mb-10 max-w-2xl mx-auto"
            >
              現場の課題を、自らの手で実装し解決する。
              <br className="hidden sm:block" />
              ビジネスとテクノロジーの架け橋となるエンジニア。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#projects">
                <Button variant="primary" size="lg">
                  View Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-navy-300 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-navy-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                About <span className="text-fresh-500">Me</span>
              </h2>
              <p className="text-xl text-fresh-600 font-medium mb-8">
                10年の現場経験 × AI実装力で、農業の「不」を解消する。
              </p>
              <div className="space-y-5 text-navy-600 leading-relaxed text-lg">
                <p>
                  農家として10年間、土と向き合いながら、兼業でブロガーとしても活動。その後、青果卸・市場の現場を知る中で、アナログな業界の非効率さを肌で感じてきました。
                </p>
                <p>
                  かつてはVBAを駆使して自力で業務ツールを開発していましたが、現在は生成AIを活用した「Vibe Coding」へと手法を進化させました。
                </p>
                <p>
                  私の強みは、現場の痛みがわかる<span className="font-semibold text-navy-900">「ドメイン知識」</span>と、それを爆速で解決策に変える<span className="font-semibold text-navy-900">「実装力」</span>の掛け算にあります。「現場を知る人間こそが、最も使いやすいツールを作れる」という信念のもと、テクノロジーで農業の可能性を広げます。
                </p>
              </div>

              {/* Vibe Coding Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-fresh-400" />
                  <span className="text-fresh-400 font-semibold">Vibe Coding Stack</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <Terminal className="w-4 h-4 text-fresh-300" />
                    <span className="text-white font-medium">Claude Code</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <Sparkles className="w-4 h-4 text-fresh-300" />
                    <span className="text-white font-medium">Antigravity</span>
                  </div>
                </div>
                <p className="text-navy-300 text-sm mt-4">
                  AIとの対話で爆速プロトタイピング。アイデアを即座に形にする。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-navy-50/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Featured <span className="text-fresh-500">Projects</span>
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              現場の課題から生まれたプロジェクト。
              ビジネス価値とテクノロジーの融合を体現しています。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy-900">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3+", label: "Projects Shipped" },
              { value: "2+", label: "Years Learning" },
              { value: "5+", label: "Technologies" },
              { value: "∞", label: "Curiosity" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-fresh-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-navy-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-fresh-500/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-fresh-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Let&apos;s <span className="text-fresh-500">Connect</span>
            </h2>
            <p className="text-navy-600 mb-8">
              新しいプロジェクトやコラボレーションの機会について、
              お気軽にお問い合わせください。
            </p>
            <Link href="mailto:contact@example.com">
              <Button variant="primary" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
