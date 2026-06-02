"use client"
import { useState } from "react"
import { ToolLayout, CopyButton } from "@/components/ToolLayout"

export default function TextReversePage() {
  const [text, setText] = useState("Hello World");
  const reversed = text.split("").reverse().join("");
  return (
    <ToolLayout title="text-reverse" description="Reverse text">
      <div className="space-y-4">
        <textarea value={text} onChange={e => setText(e.target.value)} className="w-full rounded-xl border p-4 h-32" />
        <div className="rounded-xl border p-4">
          <div className="text-xs text-gray-400 mb-2">"Reversed"</div>
          <pre className="text-sm whitespace-pre-wrap">{reversed}</pre>
          <CopyButton text={reversed} />
        </div>
      </div>
    </ToolLayout>
  );
}