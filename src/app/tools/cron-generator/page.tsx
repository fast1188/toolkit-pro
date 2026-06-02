"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function CronGeneratorPage() {
  const [min, setMin] = useState("*");
  const [hour, setHour] = useState("*");
  const [day, setDay] = useState("*");
  const [month, setMonth] = useState("*");
  const [weekday, setWeekday] = useState("*");

  const cron = `${min} ${hour} ${day} ${month} ${weekday}`;

  const presets = [
    { label: "每分钟", cron: "* * * * *" },
    { label: "每小时", cron: "0 * * * *" },
    { label: "每天零点", cron: "0 0 * * *" },
    { label: "每天9点", cron: "0 9 * * *" },
    { label: "每周一9点", cron: "0 9 * * 1" },
    { label: "每月1号", cron: "0 0 1 * *" },
    { label: "工作日9点", cron: "0 9 * * 1-5" },
  ];

  const descriptions: Record<string, string> = {
    "*": "每",
    "0": "0点/0分",
    "1-5": "周一到周五",
    "1": "周一",
    "0 9": "上午9:00",
    "0 0": "零点",
    "0 0 1": "每月1号",
  };

  return (
    <ToolLayout title="Cron 表达式生成器" description="可视化创建 Cron 定时任务表达式">
      <div className="space-y-6">
        <div className="grid grid-cols-5 gap-3">
          {[
            { label: "分钟", value: min, set: setMin, opts: ["*", "0", "15", "30", "45"] },
            { label: "小时", value: hour, set: setHour, opts: ["*", "0", "6", "9", "12", "18"] },
            { label: "日期", value: day, set: setDay, opts: ["*", "1", "15"] },
            { label: "月份", value: month, set: setMonth, opts: ["*", "1", "6", "12"] },
            { label: "星期", value: weekday, set: setWeekday, opts: ["*", "1-5", "0", "6"] },
          ].map(({ label, value, set, opts }) => (
            <div key={label}>
              <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
              <select value={value} onChange={(e) => set(e.target.value)} className="w-full rounded-lg border border-gray-200 px-2 py-2 text-sm">
                {opts.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          ))}
        </div>
        <div className="relative">
          <pre className="rounded-xl bg-gray-900 p-4 text-center text-lg text-yellow-400 font-mono">{cron}</pre>
          <CopyButton text={cron} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">常用预设</h3>
          <div className="flex flex-wrap gap-2">
            {presets.map(p => (
              <button key={p.label} onClick={() => { const parts = p.cron.split(" "); setMin(parts[0]); setHour(parts[1]); setDay(parts[2]); setMonth(parts[3]); setWeekday(parts[4]); }}
                className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs text-blue-700 hover:bg-blue-100">{p.label}</button>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}