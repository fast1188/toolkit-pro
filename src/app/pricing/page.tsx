import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "定价方案",
  description: "ToolKit Pro 定价方案 - 选择适合你的计划，解锁全部高级工具。",
};

const plans = [
  {
    name: "免费版",
    price: "¥0",
    period: "永久",
    description: "适合个人用户，免费使用核心工具",
    features: [
      "6+ 免费在线工具",
      "无限次使用",
      "无需注册",
      "基础功能支持",
    ],
    cta: "免费开始",
    href: "/tools",
    highlighted: false,
  },
  {
    name: "Pro 版",
    price: "¥29",
    period: "/月",
    description: "适合专业用户，解锁全部高级工具",
    features: [
      "全部 10+ 在线工具",
      "高级文本对比",
      "哈希生成器",
      "优先技术支持",
      "无广告体验",
      "API 访问",
    ],
    cta: "升级 Pro",
    href: "/register",
    highlighted: true,
  },
  {
    name: "企业版",
    price: "¥99",
    period: "/月",
    description: "适合团队使用，独享全部功能",
    features: [
      "Pro 版全部功能",
      "团队协作 (5人)",
      "自定义品牌",
      "专属客服",
      "SLA 保障",
      "批量处理",
    ],
    cta: "联系我们",
    href: "#",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">简单透明的定价</h1>
        <p className="mt-4 text-lg text-gray-500">选择最适合你的方案，随时升级或降级</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              plan.highlighted
                ? "border-blue-500 bg-blue-50 shadow-lg scale-105"
                : "border-gray-200 bg-white"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                最受欢迎
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-sm text-gray-500">{plan.period}</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">{plan.description}</p>

            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                plan.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500">
          所有付费方案均支持 7 天无理由退款。如有疑问，请联系我们。
        </p>
      </div>
    </div>
  );
}
