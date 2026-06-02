"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function WebScreenshotPage() {
  const [url, setUrl] = useState("https://example.com");

  return (
    <ToolLayout title="网页截图" description="输入网址，生成网页截图预览">
      <div className="space-y-6">
        <div className="flex gap-2">
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="输入网址..." className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none" />
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 font-mono">{url}</div>
          </div>
          <iframe src={url} className="w-full h-96 border-none bg-white" sandbox="allow-same-origin" title="网页预览" />
        </div>
        <p className="text-xs text-gray-400">提示：部分网站可能不允许嵌入预览。如需截图功能，请使用浏览器截图工具。</p>
      </div>
    </ToolLayout>
  );
}