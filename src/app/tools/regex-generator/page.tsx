"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function RegexGeneratorPage() {
  const [testText, setTestText] = useState("");
  const [selectedPattern, setSelectedPattern] = useState("");

  const patterns = [
    { name: "邮箱", regex: "[\\w.-]+@[\\w.-]+\\\\.[a-zA-Z]{2,}", example: "test@example.com" },
    { name: "手机号", regex: "1[3-9]\\d{9}", example: "13800138000" },
    { name: "身份证号", regex: "\\d{17}[\\dXx]", example: "110101199001011234" },
    { name: "IP地址", regex: "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}", example: "192.168.1.1" },
    { name: "网址", regex: "https?://[\\w.-]+[\\w./-]*", example: "https://example.com" },
    { name: "日期(YYYY-MM-DD)", regex: "\\d{4}-\\d{2}-\\d{2}", example: "2026-06-02" },
    { name: "中文字符", regex: "[\\u4e00-\\u9fa5]+", example: "你好世界" },
    { name: "数字", regex: "\\d+", example: "12345" },
  ];

  const getMatches = () => {
    if (!selectedPattern || !testText) return [];
    try {
      const regex = new RegExp(selectedPattern, "g");
      return [...testText.matchAll(regex)].map(m => m[0]);
    } catch { return []; }
  };

  return (
    <ToolLayout title="正则表达式生成器" description="常用正则表达式一键生成，支持在线测试">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {patterns.map(p => (
            <button key={p.name} onClick={() => { setSelectedPattern(p.regex); if (!testText) setTestText(p.example); }}
              className={`rounded-lg px-3 py-1.5 text-sm ${selectedPattern === p.regex ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{p.name}</button>
          ))}
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">正则表达式</label>
          <pre className="rounded-xl bg-gray-900 p-4 text-sm text-yellow-400 font-mono overflow-x-auto">{selectedPattern || "点击上方选择一个正则表达式"}</pre>
          {selectedPattern && <CopyButton text={selectedPattern} />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">测试文本</label>
          <textarea value={testText} onChange={(e) => setTestText(e.target.value)} placeholder="输入要测试的文本..." className="h-32 w-full rounded-xl border border-gray-200 p-4 text-sm focus:border-blue-500 focus:outline-none resize-none" />
        </div>
        {testText && selectedPattern && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">匹配结果 ({getMatches().length} 个)</h3>
            <div className="flex flex-wrap gap-2">
              {getMatches().map((m, i) => (
                <span key={i} className="rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">{m}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}