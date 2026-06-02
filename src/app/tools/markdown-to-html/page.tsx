"use client"
import { useState } from "react"
import { ToolLayout, CopyButton } from "@/components/ToolLayout"

export default function MarkdownToHtmlPage() {
  const [md, setMd] = useState("# Hello World\n\nThis is **bold** and *italic*.\n\n- Item 1\n- Item 2\n\n> Blockquote");
  const [html, setHtml] = useState("");
  const convert = () => {
    let h = md
      .replace(/^### (.+)$/gm, "<h3></h3>")
      .replace(/^## (.+)$/gm, "<h2></h2>")
      .replace(/^# (.+)$/gm, "<h1></h1>")
      .replace(/\\*\\*(.+?)\\*\\*/g, "<strong></strong>")
      .replace(/\\*(.+?)\\*/g, "<em></em>")
      .replace(/^> (.+)$/gm, "<blockquote></blockquote>")
      .replace(/^- (.+)$/gm, "<li></li>")
      .replace(/\n/g, "<br>");
    setHtml(h);
  };
  return (
    <ToolLayout title="Markdown to HTML" description="Convert Markdown to HTML">
      <div className="space-y-4">
        <textarea value={md} onChange={e => setMd(e.target.value)} className="h-40 w-full rounded-xl border border-gray-200 p-4 text-sm font-mono focus:border-blue-500 focus:outline-none resize-none" />
        <button onClick={convert} className="w-full rounded-xl bg-blue-600 py-2.5 text-white font-medium hover:bg-blue-700">Convert</button>
        {html && (<div className="space-y-4">
          <div className="rounded-xl border border-gray-200 p-4"><div className="text-xs text-gray-400 mb-2">Preview</div><div dangerouslySetInnerHTML={{__html: html}} /></div>
          <div className="rounded-xl border border-gray-200 p-4"><div className="text-xs text-gray-400 mb-2">HTML</div><pre className="text-sm font-mono whitespace-pre-wrap">{html}</pre><CopyButton text={html} /></div>
        </div>)}
      </div>
    </ToolLayout>
  );
}