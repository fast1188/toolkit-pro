import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { LogOut } from "lucide-react";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">控制台</h1>
          <p className="mt-2 text-gray-500">欢迎回来，{user.name || user.email}</p>
        </div>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            退出登录
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm font-medium text-gray-500">当前方案</p>
          <p className="mt-2 text-2xl font-bold text-gray-900 capitalize">{user.plan}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm font-medium text-gray-500">注册时间</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">
            {new Date(user.createdAt).toLocaleDateString("zh-CN")}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm font-medium text-gray-500">邮箱</p>
          <p className="mt-2 text-lg font-bold text-gray-900 truncate">{user.email}</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">快捷操作</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a href="/tools/text-counter" className="rounded-xl border border-gray-200 p-4 text-center hover:bg-gray-50 transition-colors">
            <p className="text-sm font-medium text-gray-900">字数统计</p>
          </a>
          <a href="/tools/json-formatter" className="rounded-xl border border-gray-200 p-4 text-center hover:bg-gray-50 transition-colors">
            <p className="text-sm font-medium text-gray-900">JSON 格式化</p>
          </a>
          <a href="/tools/qr-generator" className="rounded-xl border border-gray-200 p-4 text-center hover:bg-gray-50 transition-colors">
            <p className="text-sm font-medium text-gray-900">二维码生成</p>
          </a>
          <a href="/tools/password-generator" className="rounded-xl border border-gray-200 p-4 text-center hover:bg-gray-50 transition-colors">
            <p className="text-sm font-medium text-gray-900">密码生成器</p>
          </a>
        </div>
      </div>
    </div>
  );
}
