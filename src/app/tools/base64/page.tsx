"use client";

import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const process = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
      setError("");
    } catch (e) {
      setError("解码失败：输入不是有效的 Base64 字符串");
      setOutput("");
    }
  };

  const swap = () => {
    setOutput("");
    setError("");
    if (mode === "encode") {
      setMode("decode");
    } else {
      setInput(output);
      setMode("encode");
    }
  };

  return (
    <ToolLayout title="Base64 编解码" description="在线 Base64 编码和解码工具">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setMode("encode"); setOutput(""); setError(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              mode === "encode"
                ? "bg-gray-900 text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            编码
          </button>
          <button
            onClick={() => { setMode("decode"); setOutput(""); setError(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              mode === "decode"
                ? "bg-gray-900 text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            解码
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {mode === "encode" ? "输入文本" : "输入 Base64"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "输入要编码的文本..." : "输入 Base64 字符串..."}
            className="h-32 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={process}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            {mode === "encode" ? "编码" : "解码"}
          </button>
          <button
            onClick={swap}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            交换
          </button>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>
        )}

        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">输出结果</label>
              <CopyButton text={output} />
            </div>
            <textarea
              readOnly
              value={output}
              className="h-32 w-full rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm resize-none"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
