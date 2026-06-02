"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function FontPreviewPage() {
  const [text, setText] = useState("你好，世界！Hello World！");
  const [size, setSize] = useState(24);

  const fonts = [
    { name: "默认", family: "system-ui" },
    { name: "宋体", family: "SimSun, serif" },
    { name: "黑体", family: "SimHei, sans-serif" },
    { name: "楷体", family: "KaiTi, serif" },
    { name: "微软雅黑", family: "Microsoft YaHei, sans-serif" },
    { name: "等宽", family: "Consolas, monospace" },
  ];

  return (
    <ToolLayout title="字体预览" description="预览不同字体效果，选择最适合的字体">
      <div className="space-y-6">
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入要预览的文字..." className="h-20 w-full rounded-xl border border-gray-200 p-4 text-sm focus:border-blue-500 focus:outline-none resize-none" />
        <div className="flex items-center gap-4">
          <label className="text-sm text-gray-500">字号：</label>
          <input type="range" min="12" max="72" value={size} onChange={(e) => setSize(Number(e.target.value))} className="flex-1" />
          <span className="text-sm font-mono w-12">{size}px</span>
        </div>
        <div className="space-y-4">
          {fonts.map((f) => (
            <div key={f.name} className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs text-gray-400 mb-2">{f.name}</div>
              <div style={{ fontFamily: f.family, fontSize: size + "px" }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}