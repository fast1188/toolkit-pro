"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function DateCalcPage() {
  const [date1, setDate1] = useState(new Date().toISOString().split("T")[0]);
  const [date2, setDate2] = useState("");
  const [days, setDays] = useState("30");
  const [result, setResult] = useState<{ diff?: number; add?: string; sub?: string }>({});

  const calc = () => {
    const d1 = new Date(date1);
    const d2 = date2 ? new Date(date2) : null;
    const diff = d2 ? Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)) : null;
    const addDate = new Date(d1.getTime + parseInt(days || "0") * 86400000);
    const subDate = new Date(d1.getTime() - parseInt(days || "0") * 86400000);
    setResult({ diff: diff ?? undefined, add: addDate.toISOString().split("T")[0], sub: subDate.toISOString().split("T")[0] });
  };

  return (
    <ToolLayout title="日期计算器" description="计算两个日期之间的天数，或加减天数">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">起始日期</label>
            <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">目标日期</label>
            <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm" />
          </div>
        </div>
        <button onClick={calc} className="rounded-lg bg-blue-600 px-6 py-2 text-sm text-white hover:bg-blue-700">计算</button>
        {result.diff !== undefined && (
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{Math.abs(result.diff)} 天</div>
            <div className="text-sm text-blue-500 mt-1">{result.diff > 0 ? "之后" : result.diff < 0 ? "之前" : "同一天"}</div>
          </div>
        )}
        <div className="border-t pt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">日期加减</h3>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">加减天数：</span>
            <input type="number" value={days} onChange={(e) => setDays(e.target.value)} className="w-24 rounded-lg border border-gray-200 px-3 py-2 text-sm text-center" />
            <button onClick={calc} className="rounded-lg bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200">计算</button>
          </div>
        </div>
        {result.add && (
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
              <div className="text-sm text-green-600">加 {days} 天</div>
              <div className="text-lg font-bold text-green-800">{result.add}</div>
            </div>
            <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center">
              <div className="text-sm text-red-600">减 {days} 天</div>
              <div className="text-lg font-bold text-red-800">{result.sub}</div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}