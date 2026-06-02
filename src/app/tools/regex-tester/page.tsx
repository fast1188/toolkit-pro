"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testStr, setTestStr] = useState("");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");

  const test = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const result = [];
      let m;
      if (flags.includes("g")) {
        while ((m = regex.exec(testStr)) !== null) {
          result.push({ value: m[0], index: m.index, groups: m.slice(1) });
          if (m.index === regex.lastIndex) regex.lastIndex++;
        }
      } else {
        m = regex.exec(testStr);
        if (m) result.push({ value: m[0], index: m.index, groups: m.slice(1) });
      }
      setMatches(result);
      setError("");
    } catch (e) {
      setError(e.message);
      setMatches([]);
    }
  };

  return (
    <ToolLayout title="正则表达式测试" description="在线测试正则表达式，高亮显示匹配结果">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">正则表达式</label>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-mono">/</span>
            <input value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="输入正则表达式"
              className="flex-1 rounded-lg border border-gray-200 px-3 py-2 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <span className="text-gray-400 font-mono">/</span>
            <input value={flags} onChange={(e) => setFlags(e.target.value)} placeholder="flags"
              className="w-16 rounded-lg border border-gray-200 px-3 py-2 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">测试文本</label>
          <textarea value={testStr} onChange={(e) => setTestStr(e.target.value)} placeholder="输入要测试的文本..."
            className="h-32 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none" />
        </div>
        <button onClick={test} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">测试匹配</button>
        {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>}
        {matches.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-sm font-medium text-gray-700 mb-2">找到 {matches.length} 个匹配</p>
            <div className="space-y-2">
              {matches.map((m, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-green-50 px-3 py-2">
                  <span className="text-xs text-gray-400">#{i + 1}</span>
                  <code className="font-mono text-sm text-green-800">{m.value}</code>
                  <span className="text-xs text-gray-400">位置: {m.index}</span>
                  {m.groups.length > 0 && (
                    <span className="text-xs text-blue-600">分组: {m.groups.join(", ")}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {matches.length === 0 && !error && pattern && testStr && (
          <div className="rounded-lg bg-yellow-50 p-3 text-sm text-yellow-700">没有找到匹配</div>
        )}
      </div>
    </ToolLayout>
  );
}