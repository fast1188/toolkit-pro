"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function AsciiArtPage() {
  const [text, setText] = useState("Hello");
  const fonts: Record<string, (t:string)=>string> = {
    "标准": t => t,
    "大字": t => t.toUpperCase(),
    "带框": t => "+-+-+-+-+\n" + t.split("").map(c => "|" + c).join("") + "|\n+-+-+-+",
    "波浪": t => t.split("").map((c,i) => i%2===0 ? c.toUpperCase() : c.toLowerCase()).join(""),
  };
  return (
    <ToolLayout title="ASCII 艺术" description="将文本转换为ASCII艺术风格">
      <div className="space-y-6">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="输入文字..." className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none" />
        <div className="space-y-4">
          {Object.entries(fonts).map(([name, fn]) => (
            <div key={name} className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs text-gray-400 mb-2">{name}</div>
              <pre className="font-mono text-sm whitespace-pre-wrap">{fn(text)}</pre>
              <CopyButton text={fn(text)} />
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}