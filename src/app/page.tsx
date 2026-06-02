"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Sparkles, Globe } from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/lib/tools";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function HomePage() {
  const freeTools = tools.filter((t) => !t.isPremium).slice(0, 6);

  return (
    <div>
      {/* 首屏 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div className="text-center" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
              <Sparkles className="h-4 w-4" />
              免费 · 快速 · 无需注册
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              一站式在线<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                工具集合
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              集合 12+ 实用在线工具，涵盖文本处理、开发辅助、设计配色、安全加密。<br />
              无需安装，打开即用，让你的工作效率翻倍。
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/tools" className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
                开始使用 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                查看定价
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 特性 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold text-gray-900">为什么选择 ToolKit Pro</h2>
            <p className="mt-4 text-lg text-gray-500">简单、高效、安全的在线工具</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { icon: Zap, title: "极速体验", desc: "所有工具响应时间极快，无需等待" },
              { icon: Shield, title: "隐私安全", desc: "数据本地处理，不上传服务器" },
              { icon: Globe, title: "免费使用", desc: "核心工具完全免费，无需注册" },
              { icon: Sparkles, title: "持续更新", desc: "每周新增工具，紧跟需求" },
            ].map((feature) => (
              <motion.div key={feature.title} variants={fadeUp} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 工具展示 */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold text-gray-900">热门工具</h2>
            <p className="mt-4 text-lg text-gray-500">精选最实用的在线工具，助你高效工作</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {freeTools.map((tool) => (
              <motion.div key={tool.slug} variants={fadeUp}>
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link href="/tools" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              查看全部工具 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 行动号召 */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white">准备好提升效率了吗？</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-blue-100">加入 ToolKit Pro，解锁全部高级工具</motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-x-6">
              <Link href="/register" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors">
                免费注册
              </Link>
              <Link href="/pricing" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                了解定价
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}