"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function RegexLitePage() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState<string[]>([]);
  const test = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const m = [...text.matchAll(regex)].map(x => x[0]);
      setMatches(m);
    } catch { setMatches([]); }
  };
  return (
    <ToolLayout title="正则表达式测试" description="在线测试正则表达式">
      <div className="space-y-4">
        <div className="flex gap-2">
          <input value={pattern} onChange={e => setPattern(e.target.value)} placeholder="正则表达式" className="flex-1 rounded-lg border border-gray-200 px-3 py-2 font-mono text-sm" />
          <input value={flags} onChange={e => setFlags(e.target.value)} className="w-16 rounded-lg border border-gray-200 px-3 py-2 font-mono text-sm text-center" placeholder="g" />
          <button onClick={test} className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm">测试</button>
        </div>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="输入测试文本..." className="h-32 w-full rounded-xl border border-gray-200 p-4 text-sm font-mono focus:border-blue-500 focus:outline-none resize-none" />
        <div className="text-sm text-gray-500">匹配结果: {matches.length} 个</div>
        <div className="flex flex-wrap gap-2">
          {matches.map((m, i) => (<span key={i} className="rounded bg-green-100 px-2 py-1 text-sm text-green-800">{m}</span>))}
        </div>
      </div>
    </ToolLayout>
  );
}