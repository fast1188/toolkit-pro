"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function TextSlugPage() {
  const [text, setText] = useState("");
  const [separator, setSeparator] = useState("-");

  const toSlug = (t: string) => {
    return t
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, separator)
      .replace(/[^\w\u4e00-\u9fa5-]/g, "")
      .replace(new RegExp(`[${separator}]+`, "g"), separator)
      .replace(new RegExp(`^${separator}|${separator}$`, "g"), "");
  };

  const results = {
    slug: toSlug(text),
    snake: text.toLowerCase().trim().replace(/\s+/g, "_").replace(/[^\w\u4e00-\u9fa5]/g, ""),
    camel: text.replace(/[^\w\u4e00-\u9fa5\s]/g, "").split(/\s+/).map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(""),
    kebab: toSlug(text),
  };

  return (
    <ToolLayout title="文本转 Slug" description="将文本转换为 URL 友好的 Slug 格式">
      <div className="space-y-6">
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入要转换的文本..." className="h-24 w-full rounded-xl border border-gray-200 p-4 text-sm focus:border-blue-500 focus:outline-none resize-none" />
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-500">分隔符：</label>
          {["-", "_", "."].map(s => (
            <button key={s} onClick={() => setSeparator(s)} className={`rounded-lg px-3 py-1 text-sm ${separator === s ? "bg-blue-600 text-white" : "bg-gray-100"}`}>{s}</button>
          ))}
        </div>
        <div className="space-y-3">
          {Object.entries(results).map(([key, val]) => (
            <div key={key} className="flex items-center gap-3">
              <span className="w-16 text-xs font-medium text-gray-500 uppercase">{key}</span>
              <div className="flex-1 relative">
                <input readOnly value={val} className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm font-mono" />
                <CopyButton text={val} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}