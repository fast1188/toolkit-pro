"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

function simpleMarkdown(md: string): string {
  let html = md
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-6 mb-3">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank">$1</a>')
    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul class="list-disc space-y-1 my-2">${match}</ul>`)
    .replace(/^---$/gm, '<hr class="my-4 border-gray-200" />')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');

  return html;
}

export default function MarkdownPreviewPage() {
  const [text, setText] = useState("# Hello World\n\n这是一个 **Markdown** 预览工具。\n\n## 功能\n\n- 支持标题\n- 支持粗体和斜体\n- 支持代码\n- 支持链接\n\n### 代码示例\n\n`console.log(\"Hello!\")`\n\n---\n\n*开始编辑左侧内容，右侧会实时预览。*");

  return (
    <ToolLayout title="Markdown 预览" description="实时 Markdown 编辑器和预览">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">编辑器</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-[500px] w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">预览</label>
          <div
            className="h-[500px] overflow-auto rounded-xl border border-gray-200 bg-white p-4 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: simpleMarkdown(text) }}
          />
        </div>
      </div>
    </ToolLayout>
  );
}
