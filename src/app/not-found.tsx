import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-7xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-500">页面未找到</p>
      <p className="mt-2 text-gray-400">你访问的页面不存在或已被移除</p>
      <Link href="/"
        className="mt-8 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
        返回首页
      </Link>
    </div>
  );
}