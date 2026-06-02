"use client";
import { useState, useEffect, useRef } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function CountdownTimerPage() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const totalRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => setRemaining(p => p - 1), 1000);
    } else if (remaining === 0 && running) {
      setRunning(false);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, remaining]);
  const start = () => { const t = hours * 3600 + minutes * 60 + seconds; totalRef.current = t; setRemaining(t); setRunning(true); };
  const pause = () => { setRunning(false); };
  const reset = () => { setRunning(false); setRemaining(0); };
  const fmt = (s: number) => String(Math.floor(s / 3600)).padStart(2, "0") + ":" + String(Math.floor((s % 3600) / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  const presets = [{ l: "1分钟", m: 1 }, { l: "5分钟", m: 5 }, { l: "10分钟", m: 10 }, { l: "15分钟", m: 15 }, { l: "25分钟(番茄)", m: 25 }, { l: "30分钟", m: 30 }];
  return (
    <ToolLayout title="倒计时器" description="设置倒计时，专注工作或休息">
      <div className="space-y-6">
        {!running && remaining === 0 && (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center"><label className="block text-xs text-gray-500 mb-1">小时</label>
              <input type="number" min="0" max="23" value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-center text-lg" /></div>
            <div className="text-center"><label className="block text-xs text-gray-500 mb-1">分钟</label>
              <input type="number" min="0" max="59" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-center text-lg" /></div>
            <div className="text-center"><label className="block text-xs text-gray-500 mb-1">秒</label>
              <input type="number" min="0" max="59" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-center text-lg" /></div>
          </div>
        )}
        {remaining > 0 && (
          <div className="text-center">
            <div className="text-7xl font-mono font-bold text-blue-600 mb-4">{fmt(remaining)}</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full transition-all" style={{width: (remaining / (totalRef.current || 1)) * 100 + "%"}} />
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2 justify-center">
          {presets.map(p => (<button key={p.l} onClick={() => { setHours(0); setMinutes(p.m); setSeconds(0); }} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs hover:bg-gray-200">{p.l}</button>))}
        </div>
        <div className="flex gap-3 justify-center">
          {!running && remaining === 0 && <button onClick={start} className="rounded-lg bg-blue-600 px-8 py-2.5 text-white hover:bg-blue-700">开始</button>}
          {running && <button onClick={pause} className="rounded-lg bg-yellow-500 px-8 py-2.5 text-white hover:bg-yellow-600">暂停</button>}
          {!running && remaining > 0 && <button onClick={start} className="rounded-lg bg-green-600 px-8 py-2.5 text-white hover:bg-green-700">继续</button>}
          <button onClick={reset} className="rounded-lg bg-gray-200 px-8 py-2.5 hover:bg-gray-300">重置</button>
        </div>
      </div>
    </ToolLayout>
  );
}