"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function TextEscapePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("escape");

  const doEscape = () => {
    let r = input;
    r = r.replace(/\//g, "\/");
    r = r.replace(/\n/g, "\\n");
    r = r.replace(/\r/g, "\\r");
    r = r.replace(/\t/g, "\\t");
    setOutput(r);
  };

  const doUnescape = () => {
    let r = input;
    r = r.replace(/\\n/g, String.fromCharCode(10));
    r = r.replace(/\\r/g, String.fromCharCode(13));
    r = r.replace(/\\t/g, String.fromCharCode(9));
    setOutput(r);
  };

  const btn = "rounded-lg px-4 py-2 text-sm font-medium transition-colors ";

  return (
    <ToolLayout title="文本转义" description="在线文本转义和反转义工具">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setMode("escape")} className={btn + (mode === "escape" ? "bg-gray-900 text-white" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50")}>转义</button>
          <button onClick={() => setMode("unescape")} className={btn + (mode === "unescape" ? "bg-gray-900 text-white" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50")}>反转义</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">输入文本</label>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="输入文本..."
            className="h-32 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none" />
        </div>
        <button onClick={() => mode === "escape" ? doEscape() : doUnescape()} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
          {mode === "escape" ? "转义" : "反转义"}
        </button>
        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">输出结果</label>
              <CopyButton text={output} />
            </div>
            <pre className="h-32 overflow-auto rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm whitespace-pre-wrap">{output}</pre>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
