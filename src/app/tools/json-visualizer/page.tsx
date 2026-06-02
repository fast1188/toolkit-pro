"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function JsonVisualizerPage() {
  const [json, setJson] = useState('{"name":"张三","age":25,"city":"北京","skills":["JavaScript","Python"],"address":{"province":"北京","district":"海淀"}}');
  const [parsed, setParsed] = useState<any>(null);
  const [error, setError] = useState("");
  const parse = () => { try { setParsed(JSON.parse(json)); setError(""); } catch(e:any) { setError(e.message); setParsed(null); } };
  const Node = ({data, depth=0}: {data:any; depth?:number}) => {
    if (data === null) return <span className="text-gray-400">null</span>;
    if (typeof data === "boolean") return <span className="text-purple-600">{String(data)}</span>;
    if (typeof data === "number") return <span className="text-blue-600">{data}</span>;
    if (typeof data === "string") return <span className="text-green-600">"{data}"</span>;
    if (Array.isArray(data)) return (
      <div style={{paddingLeft: depth*16}}>
        <span className="text-gray-400">[</span>
        {data.map((item, i) => (<div key={i} className="ml-4"><Node data={item} depth={depth+1} />{i < data.length-1 ? "," : ""}</div>))}
        <span className="text-gray-400">]</span>
      </div>
    );
    return (
      <div style={{paddingLeft: depth*16}}>
        <span className="text-gray-400">{'{'}</span>
        {Object.entries(data).map(([k,v], i, arr) => (
          <div key={k} className="ml-4"><span className="text-blue-600">{k}</span>: <Node data={v} depth={depth+1} />{i < arr.length-1 ? "," : ""}</div>
        ))}
        <span className="text-gray-400">{'}'}</span>
      </div>
    );
  };
  return (
    <ToolLayout title="JSON 可视化" description="以树形结构展示JSON数据">
      <div className="space-y-4">
        <textarea value={json} onChange={e => setJson(e.target.value)} placeholder='输入JSON...' className="h-32 w-full rounded-xl border border-gray-200 p-4 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none" />
        <button onClick={parse} className="rounded-lg bg-blue-600 px-6 py-2 text-white text-sm">解析</button>
        {error && <div className="text-sm text-red-500">{error}</div>}
        {parsed && (
          <div className="rounded-xl border border-gray-200 p-4 bg-gray-50 overflow-x-auto">
            <Node data={parsed} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}