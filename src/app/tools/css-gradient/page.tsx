"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function CssGradientPage() {
  const [color1, setColor1] = useState("#667eea");
  const [color2, setColor2] = useState("#764ba2");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");

  const gradient = type === "linear"
    ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
    : `radial-gradient(circle, ${color1}, ${color2})`;

  const cssCode = `background: ${gradient};`;

  return (
    <ToolLayout title="CSS 渐变生成器" description="可视化创建 CSS 渐变效果，一键复制代码">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">起始颜色</label>
            <div className="flex gap-2">
              <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="h-10 w-10 rounded border cursor-pointer" />
              <input type="text" value={color1} onChange={(e) => setColor1(e.target.value)} className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">结束颜色</label>
            <div className="flex gap-2">
              <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="h-10 w-10 rounded border cursor-pointer" />
              <input type="text" value={color2} onChange={(e) => setColor2(e.target.value)} className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">渐变类型</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm">
              <option value="linear">线性渐变</option>
              <option value="radial">径向渐变</option>
            </select>
          </div>
          {type === "linear" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">角度: {angle}°</label>
              <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full" />
            </div>
          )}
        </div>
        <div className="h-48 rounded-xl" style={{ background: gradient }} />
        <div className="relative">
          <pre className="rounded-xl bg-gray-900 p-4 text-sm text-green-400 overflow-x-auto">{cssCode}</pre>
          <CopyButton text={cssCode} />
        </div>
      </div>
    </ToolLayout>
  );
}