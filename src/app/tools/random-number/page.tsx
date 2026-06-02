"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function RandomNumberPage() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<number[]>([]);
  const [noRepeat, setNoRepeat] = useState(false);
  const generate = () => {
    const nums: number[] = [];
    const actualCount = noRepeat ? Math.min(count, max - min + 1) : count;
    while (nums.length < actualCount) {
      const n = Math.floor(Math.random() * (max - min + 1)) + min;
      if (noRepeat && nums.includes(n)) continue;
      nums.push(n);
    }
    setResults(nums);
  };
  return (
    <ToolLayout title="随机数生成器" description="生成指定范围的随机数">
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-xs text-gray-500 mb-1">最小值</label><input type="number" value={min} onChange={e => setMin(Number(e.target.value))} className="w-full rounded-lg border border-gray-200 px-3 py-2" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">最大值</label><input type="number" value={max} onChange={e => setMax(Number(e.target.value))} className="w-full rounded-lg border border-gray-200 px-3 py-2" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">个数</label><input type="number" min="1" max="100" value={count} onChange={e => setCount(Number(e.target.value))} className="w-full rounded-lg border border-gray-200 px-3 py-2" /></div>
        </div>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={noRepeat} onChange={e => setNoRepeat(e.target.checked)} className="accent-blue-600" />不重复</label>
        <button onClick={generate} className="w-full rounded-xl bg-blue-600 py-2.5 text-white font-medium hover:bg-blue-700">生成</button>
        {results.length > 0 && (
          <div className="relative">
            <div className="flex flex-wrap gap-2 rounded-xl bg-gray-50 p-4">
              {results.map((n, i) => (<span key={i} className="rounded-lg bg-blue-100 px-3 py-1.5 text-sm font-mono text-blue-800">{n}</span>))}
            </div>
            <CopyButton text={results.join(", ")} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}