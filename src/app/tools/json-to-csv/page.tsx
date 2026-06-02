"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function JsonToCsvPage() {
  const [json, setJson] = useState('[{"name":"张三","age":25,"city":"北京"},{"name":"李四","age":30,"city":"上海"}]');
  const [csv, setCsv] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    try {
      const arr = JSON.parse(json);
      if (!Array.isArray(arr) || arr.length === 0) { setError("请输入JSON数组"); setCsv(""); return; }
      const headers = Object.keys(arr[0]);
      const rows = arr.map(row => headers.map(h => `"${String(row[h] ?? "").replace(/"/g, '""')}"`).join(","));
      const result = [headers.join(","), ...rows].join("\n");
      setCsv(result);
      setError("");
    } catch (e: any) { setError("JSON格式错误: " + e.message); setCsv(""); }
  };

  return (
    <ToolLayout title="JSON 转 CSV" description="将 JSON 数据转换为 CSV 表格格式">
      <div className="space-y-4">
        <textarea value={json} onChange={(e) => setJson(e.target.value)} placeholder='[{"name":"张三","age":25}]' className="h-48 w-full rounded-xl border border-gray-200 p-4 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none" />
        <button onClick={convert} className="rounded-lg bg-blue-600 px-6 py-2 text-sm text-white hover:bg-blue-700">转换</button>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {csv && (
          <div className="relative">
            <pre className="rounded-xl bg-gray-900 p-4 text-sm text-green-400 overflow-x-auto whitespace-pre-wrap">{csv}</pre>
            <CopyButton text={csv} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}