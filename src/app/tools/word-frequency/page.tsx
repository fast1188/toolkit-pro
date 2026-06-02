"use client"
import { useState } from "react"
import { ToolLayout } from "@/components/ToolLayout"

export default function WordFrequencyPage() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<{word:string;count:number}[]>([]);
  const analyze = () => {
    const freq: Record<string,number> = {};
    text.split(/\s+/).forEach(w => { if(w) freq[w]=(freq[w]||0)+1; });
    setResults(Object.entries(freq).map(([word,count])=>({word,count})).sort((a,b)=>b.count-a.count));
  };
  return (
    <ToolLayout title="Word Frequency" description="Count word frequency">
      <div className="space-y-4">
        <textarea value={text} onChange={e => setText(e.target.value)} className="h-32 w-full rounded-xl border border-gray-200 p-4 text-sm" placeholder="Enter text, words separated by spaces..." />
        <button onClick={analyze} className="w-full rounded-xl bg-blue-600 py-2.5 text-white font-medium hover:bg-blue-700">Analyze</button>
        {results.length > 0 && (<div className="rounded-xl border border-gray-200 p-4 space-y-2">
          <div className="text-xs text-gray-400">Total: {results.length} words</div>
          {results.map(r => (<div key={r.word} className="flex items-center justify-between"><span className="text-sm">{r.word}</span><div className="flex items-center gap-2"><div className="h-4 rounded bg-blue-500" style={{width:r.count*40+String.fromCharCode(34)+String.fromCharCode(112)+String.fromCharCode(120)+String.fromCharCode(34)}} /><span className="text-xs text-gray-500">{r.count}</span></div></div>))}
        </div>)}
      </div>
    </ToolLayout>
  );
}