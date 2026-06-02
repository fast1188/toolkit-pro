"use client";

import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function TextCounterPage() {
  const [text, setText] = useState("");

  const stats = {
    chars: text.length,
    charsNoSpace: text.replace(/\s/g, "").length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text ? text.split("\n").length : 0,
    paragraphs: text.trim() ? text.trim().split(/\n\s*\n/).length : 0,
    chineseChars: (text.match(/[\u4e00-\u9fa5]/g) || []).length,
    englishWords: (text.match(/[a-zA-Z]+/g) || []).length,
    numbers: (text.match(/\d+/g) || []).length,
    symbols: (text.match(/[^\w\s\u4e00-\u9fa5]/g) || []).length,
  };

  return (
    <ToolLayout title="字数统计" description="快速统计文本的字数、字符数、行数等详细信息">
      <div className="space-y-6">
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="在此输入或粘贴文本..."
            className="h-64 w-full rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "总字符数", value: stats.chars },
            { label: "不含空格", value: stats.charsNoSpace },
            { label: "单词数", value: stats.words },
            { label: "行数", value: stats.lines },
            { label: "段落数", value: stats.paragraphs },
            { label: "中文字符", value: stats.chineseChars },
            { label: "英文单词", value: stats.englishWords },
            { label: "数字", value: stats.numbers },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <CopyButton text={JSON.stringify(stats, null, 2)} />
        </div>
      </div>
    </ToolLayout>
  );
}
