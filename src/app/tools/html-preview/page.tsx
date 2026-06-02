"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function HtmlPreviewPage() {
  const [html, setHtml] = useState("<h1 style=\"color: #667eea;\">你好，世界！</h1>\n<p>在这里输入HTML代码，实时预览效果。</p>");

  return (
    <ToolLayout title="HTML 预览" description="在线编辑和实时预览 HTML 代码">
      <div className="space-y-4">
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          placeholder="在此输入HTML代码..."
          className="h-64 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
        />
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-medium text-gray-500">预览效果</h3>
          <div className="min-h-[200px] rounded-lg border border-gray-100 bg-gray-50 p-4" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </ToolLayout>
  );
}