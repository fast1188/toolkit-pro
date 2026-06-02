"use client";

import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

export default function ColorConverterPage() {
  const [hex, setHex] = useState("#3b82f6");
  const [copied, setCopied] = useState("");

  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const formats = [
    { label: "HEX", value: hex },
    { label: "RGB", value: rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "-" },
    { label: "HSL", value: hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : "-" },
  ];

  return (
    <ToolLayout title="颜色转换器" description="HEX、RGB、HSL 颜色格式互转，实时预览颜色效果">
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div
            className="h-32 w-32 rounded-2xl border border-gray-200 shadow-inner"
            style={{ backgroundColor: hex }}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">选择颜色</label>
            <input
              type="color"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="h-12 w-32 cursor-pointer rounded-lg border border-gray-200"
            />
            <input
              type="text"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="mt-2 block w-32 rounded-lg border border-gray-200 px-3 py-1.5 font-mono text-sm"
            />
          </div>
        </div>

        <div className="space-y-3">
          {formats.map((format) => (
            <div key={format.label} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3">
              <div>
                <span className="text-xs font-medium text-gray-500">{format.label}</span>
                <p className="font-mono text-sm text-gray-900">{format.value}</p>
              </div>
              <CopyButton text={format.value} />
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}
