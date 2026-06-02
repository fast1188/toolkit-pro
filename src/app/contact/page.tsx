import type { Metadata } from "next";
import { Mail, MessageCircle, Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们",
  description: "如有问题或建议，欢迎联系 ToolKit Pro 团队",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">联系我们</h1>
        <p className="mt-4 text-lg text-gray-500">有任何问题或建议？我们很想听到你的声音</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">电子邮件</h3>
          <p className="mt-2 text-sm text-gray-500">support@toolkitpro.dev</p>
          <p className="text-xs text-gray-400 mt-1">24 小时内回复</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
            <MessageCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">在线反馈</h3>
          <p className="mt-2 text-sm text-gray-500">使用产品内的反馈功能</p>
          <p className="text-xs text-gray-400 mt-1">即时提交</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
            <Bug className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">报告问题</h3>
          <p className="mt-2 text-sm text-gray-500">发现 Bug？请提交 Issue</p>
          <p className="text-xs text-gray-400 mt-1">快速修复</p>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">发送消息</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">你的名称</label>
              <input type="text" placeholder="请输入你的名称"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">邮箱地址</label>
              <input type="email" placeholder="请输入邮箱地址"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">主题</label>
            <select className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>功能建议</option>
              <option>问题反馈</option>
              <option>商务合作</option>
              <option>其他</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">消息内容</label>
            <textarea rows={5} placeholder="请输入你想说的内容..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none" />
          </div>
          <button type="button"
            className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
            发送消息
          </button>
        </form>
      </div>
    </div>
  );
}