import type { Metadata } from "next";
import { Zap, Heart, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解 ToolKit Pro - 一站式在线工具集合平台",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">关于 ToolKit Pro</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          我们致力于打造最简单、最高效的在线工具集合，让每个人都能轻松完成日常任务。
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">我们的愿景</h2>
        <p className="text-gray-600 leading-relaxed">
          在数字化时代，各种小工具散落在互联网的各个角落。ToolKit Pro 的诞生就是为了解决这个痛点 -
          我们将最实用的工具整合到一个平台上，无需安装、无需注册、打开即用。
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">为什么选择我们</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100">
            <Zap className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div><h3 className="font-semibold text-gray-900">极速体验</h3><p className="text-sm text-gray-500 mt-1">所有计算在本地完成，响应时间极快</p></div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100">
            <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
            <div><h3 className="font-semibold text-gray-900">完全免费</h3><p className="text-sm text-gray-500 mt-1">核心工具永久免费，无隐藏收费</p></div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100">
            <Users className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div><h3 className="font-semibold text-gray-900">用户至上</h3><p className="text-sm text-gray-500 mt-1">根据用户反馈持续优化和新增功能</p></div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100">
            <Globe className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div><h3 className="font-semibold text-gray-900">隐私安全</h3><p className="text-sm text-gray-500 mt-1">数据不上传，所有处理在浏览器端完成</p></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">技术栈</h2>
        <p className="text-gray-600 leading-relaxed">
          ToolKit Pro 使用 Next.js、TypeScript、Tailwind CSS 等现代前端技术构建，
          确保高性能、高可用性和优秀的用户体验。
        </p>
      </div>
    </div>
  );
}