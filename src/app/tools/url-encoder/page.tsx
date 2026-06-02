"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");

  const processUrl = () => {
    try {
      if (mode === "encode") { setOutput(encodeURIComponent(input)); }
      else { setOutput(decodeURIComponent(input)); }
    } catch { setOutput("解码失败：输入无效"); }
  };

  const swap = () => {
    if (mode === "decode" && output) setInput(output);
    setMode(mode === "encode" ? "decode" : "encode");
    setOutput("");
  };

  const btnBase = "rounded-lg px-4 py-2 text-sm font-medium transition-colors ";
  const activeBtn = "bg-gray-900 text-white";
  const inactiveBtn = "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50";

  return (
    <ToolLayout title="URL 编解码" description="在线 URL 编码和解码工具，处理特殊字符和中文">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button onClick={() => { setMode("encode"); setOutput(""); }}
            className={btnBase + (mode === "encode" ? activeBtn : inactiveBtn)}>编码</button>
          <button onClick={() => { setMode("decode"); setOutput(""); }}
            className={btnBase + (mode === "decode" ? activeBtn : inactiveBtn)}>解码</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {mode === "encode" ? "输入要编码的文本" : "输入编码后的 URL"}
          </label>
          <textarea value={input} onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "输入文本..." : "输入编码后的 URL..."}
            className="h-32 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none" />
        </div>
        <div className="flex gap-4">
          <button onClick={processUrl} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
            {mode === "encode" ? "编码" : "解码"}
          </button>
          <button onClick={swap} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">交换</button>
        </div>
        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">输出结果</label>
              <CopyButton text={output} />
            </div>
            <textarea readOnly value={output}
              className="h-32 w-full rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm resize-none" />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}