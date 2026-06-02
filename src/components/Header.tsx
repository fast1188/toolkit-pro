"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ToolKit Pro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/tools" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            工具集
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            定价
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            关于
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            联系
          </Link>
          <Link href="/api-docs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            API
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            控制台
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            登录
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          <Link href="/tools" className="block text-sm font-medium text-gray-600" onClick={() => setMobileMenuOpen(false)}>
            工具集
          </Link>
          <Link href="/pricing" className="block text-sm font-medium text-gray-600" onClick={() => setMobileMenuOpen(false)}>
            定价
          </Link>
          <Link href="/about" className="block text-sm font-medium text-gray-600" onClick={() => setMobileMenuOpen(false)}>
            关于
          </Link>
          <Link href="/contact" className="block text-sm font-medium text-gray-600" onClick={() => setMobileMenuOpen(false)}>
            联系
          </Link>
          <Link href="/api-docs" className="block text-sm font-medium text-gray-600" onClick={() => setMobileMenuOpen(false)}>
            API 文档
          </Link>
          <Link href="/dashboard" className="block text-sm font-medium text-gray-600" onClick={() => setMobileMenuOpen(false)}>
            控制台
          </Link>
          <Link
            href="/login"
            className="block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            登录
          </Link>
        </div>
      )}
    </header>
  );
}
