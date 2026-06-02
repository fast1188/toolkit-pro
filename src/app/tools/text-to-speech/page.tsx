"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function TextToSpeechPage() {
  const [text, setText] = useState("你好，欢迎使用在线工具集合！");
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (!text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <ToolLayout title="文本转语音" description="将文字转换为语音朗读，支持中文">
      <div className="space-y-6">
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="输入要朗读的文字..." className="h-40 w-full rounded-xl border border-gray-200 p-4 text-sm focus:border-blue-500 focus:outline-none resize-none" />
        <div className="flex gap-3">
          <button onClick={speaking ? stop : speak} className={`rounded-lg px-6 py-2.5 text-sm font-medium ${speaking ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
            {speaking ? "⏹ 停止" : "🔊 朗读"}
          </button>
        </div>
        {speaking && <div className="text-sm text-blue-500 animate-pulse">正在朗读中...</div>}
      </div>
    </ToolLayout>
  );
}