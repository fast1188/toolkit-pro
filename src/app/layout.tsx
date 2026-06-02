import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ToolKit Pro - 一站式在线工具集合",
    template: "%s | ToolKit Pro",
  },
  description: "免费在线工具集合，包含字数统计、JSON格式化、二维码生成、颜色转换、密码生成等实用工具，让工作更高效。",
  keywords: ["在线工具", "工具集合", "JSON格式化", "二维码生成", "字数统计", "颜色转换", "Base64", "密码生成", "时间戳转换"],
  openGraph: {
    title: "ToolKit Pro - 一站式在线工具集合",
    description: "免费在线工具集合，让工作更高效。",
    type: "website",
    locale: "zh_CN",
    siteName: "ToolKit Pro",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}