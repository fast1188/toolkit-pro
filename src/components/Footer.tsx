import Link from "next/link";
import { Zap, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ToolKit Pro</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">一站式在线工具集合，让工作更高效。</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">产品</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/tools" className="text-sm text-gray-500 hover:text-gray-900">全部工具</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900">定价方案</Link></li>
              <li><Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-900">控制台</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">工具分类</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/tools" className="text-sm text-gray-500 hover:text-gray-900">文本工具</Link></li>
              <li><Link href="/tools" className="text-sm text-gray-500 hover:text-gray-900">开发工具</Link></li>
              <li><Link href="/tools" className="text-sm text-gray-500 hover:text-gray-900">设计工具</Link></li>
              <li><Link href="/tools" className="text-sm text-gray-500 hover:text-gray-900">安全工具</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">关于</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">关于我们</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">联系我们</Link></li>
              <li><Link href="/api-docs" className="text-sm text-gray-500 hover:text-gray-900">API 文档</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ToolKit Pro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 flex items-center gap-1 text-sm">
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}