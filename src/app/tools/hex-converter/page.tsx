"use client"
import { useState } from "react"
import { ToolLayout, CopyButton } from "@/components/ToolLayout"

export default function HexConverterPage() {
  const [input, setInput] = useState("255");
  const [fromBase, setFromBase] = useState("10");
  const convert = (base: number) => {
    try { return parseInt(input, parseInt(fromBase)).toString(base).toUpperCase(); } catch { return "Error"; }
  };
  const results = [{l:"Dec",v:convert(10)},{l:"Oct",v:convert(8)},{l:"Bin",v:convert(2)},{l:"Hex",v:convert(16)}];
  return (
    <ToolLayout title="Base Converter" description="Convert between number bases">
      <div className="space-y-6">
        <div className="flex gap-3">
          <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-lg font-mono focus:border-blue-500 focus:outline-none" placeholder="Enter number" />
          <select value={fromBase} onChange={e => setFromBase(e.target.value)} className="rounded-xl border border-gray-200 px-4 py-3">
            <option value="10">10</option><option value="8">8</option><option value="2">2</option><option value="16">16</option>
          </select>
        </div>
        <div className="space-y-2">
          {results.map(r => (<div key={r.l} className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3"><span className="text-sm text-gray-500">{r.l}</span><div className="flex items-center gap-2"><code className="text-lg font-mono">{r.v}</code><CopyButton text={r.v} /></div></div>))}
        </div>
      </div>
    </ToolLayout>
  );
}