"use client";
import { useState, useEffect } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function TimestampPage() {
  const [now, setNow] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [inputType, setInputType] = useState("timestamp");

  useEffect(() => {
    const timer = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (ts) => {
    const d = new Date(ts * 1000);
    return d.toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  };

  const convert = () => {
    if (inputType === "timestamp") {
      let ts = parseInt(input, 10);
      if (isNaN(ts)) { setResult("请输入有效的时间戳"); return; }
      if (ts > 1e12) ts = Math.floor(ts / 1000);
      setResult(formatDate(ts));
    } else {
      const d = new Date(input);
      if (isNaN(d.getTime())) { setResult("请输入有效的日期时间"); return; }
      setResult(Math.floor(d.getTime() / 1000).toString());
    }
  };

  const btnBase = "rounded-lg px-4 py-2 text-sm font-medium transition-colors ";
  const activeBtn = "bg-gray-900 text-white";
  const inactiveBtn = "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50";

  return (
    <ToolLayout title="时间戳转换" description="Unix 时间戳与日期时间格式互转">
      <div className="space-y-6">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm text-blue-700">当前时间戳</p>
          <div className="mt-1 flex items-center gap-4">
            <p className="font-mono text-2xl font-bold text-blue-900">{now}</p>
            <CopyButton text={now.toString()} />
          </div>
          <p className="mt-1 font-mono text-sm text-blue-600">{formatDate(now)}</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => { setInputType("timestamp"); setResult(""); }}
            className={btnBase + (inputType === "timestamp" ? activeBtn : inactiveBtn)}>时间戳转日期</button>
          <button onClick={() => { setInputType("date"); setResult(""); }}
            className={btnBase + (inputType === "date" ? activeBtn : inactiveBtn)}>日期转时间戳</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {inputType === "timestamp" ? "输入时间戳（秒或毫秒）" : "输入日期时间"}
          </label>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            placeholder={inputType === "timestamp" ? "例如: 1717334400" : "例如: 2024-06-01 12:00:00"}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <button onClick={convert} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">转换</button>
        {result && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">转换结果</label>
              <CopyButton text={result} />
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-lg text-gray-900">{result}</div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}