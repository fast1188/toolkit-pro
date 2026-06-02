"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function NumberBasePage() {
  const [input, setInput] = useState("255");
  const [fromBase, setFromBase] = useState(10);

  const bases = [2, 8, 10, 16];
  const baseNames: Record<number, string> = { 2: "二进制", 8: "八进制", 10: "十进制", 16: "十六进制" };

  const convert = () => {
    try {
      const num = parseInt(input, fromBase);
      if (isNaN(num)) return {};
      const result: Record<string, string> = {};
      bases.forEach(b => { result[b + ""] = num.toString(b).toUpperCase(); });
      return result;
    } catch { return {}; }
  };

  const results = convert();

  return (
    <ToolLayout title="进制转换" description="二进制、八进制、十进制、十六进制互转">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输入值</label>
            <input value={input} onChange={(e) => setInput(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg font-mono focus:border-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">输入进制</label>
            <select value={fromBase} onChange={(e) => setFromBase(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg">
              {bases.map(b => <option key={b} value={b}>{baseNames[b]} ({b})</option>)}
            </select>
          </div>
        </div>
        <div className="space-y-3">
          {bases.map(b => (
            <div key={b} className="flex items-center gap-3">
              <span className="w-20 text-sm font-medium text-gray-500">{baseNames[b]}</span>
              <div className="flex-1 relative">
                <input readOnly value={results[b + ""] || ""} className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm font-mono" />
                <CopyButton text={results[b + ""] || ""} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}