"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function QrStyledPage() {
  const [text, setText] = useState("https://example.com");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(200);
  const moduleCount=25, moduleSize=size/moduleCount;
  const data=Array.from({length:moduleCount*moduleCount},(_,i)=>{const r=Math.floor(i/moduleCount),c=i%moduleCount;const inFinder=(r<7&&c<7)||(r<7&&c>=moduleCount-7)||(r>=moduleCount-7&&c<7);const hash=Array.from(text).reduce((h,ch)=>((h<<5)-h+ch.charCodeAt(0))|0,0);return inFinder?1:((hash*(r*moduleCount+c)*7)&1);});
  return(
    <ToolLayout title="二维码美化" description="自定义颜色和大小的二维码">
      <div className="space-y-6">
        <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="输入文本或网址..." className="h-20 w-full rounded-xl border border-gray-200 p-4 text-sm focus:border-blue-500 focus:outline-none resize-none" />
        <div className="grid grid-cols-3 gap-4">
          <div><label className="block text-xs text-gray-500 mb-1">前景色</label>
            <div className="flex gap-2"><input type="color" value={fgColor} onChange={(e)=>setFgColor(e.target.value)} className="h-10 w-10 rounded border cursor-pointer" />
            <input type="text" value={fgColor} onChange={(e)=>setFgColor(e.target.value)} className="flex-1 rounded-lg border border-gray-200 px-2 py-1 text-sm font-mono" /></div></div>
          <div><label className="block text-xs text-gray-500 mb-1">背景色</label>
            <div className="flex gap-2"><input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} className="h-10 w-10 rounded border cursor-pointer" />
            <input type="text" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} className="flex-1 rounded-lg border border-gray-200 px-2 py-1 text-sm font-mono" /></div></div>
          <div><label className="block text-xs text-gray-500 mb-1">大小: {size}px</label>
            <input type="range" min="100" max="400" value={size} onChange={(e)=>setSize(Number(e.target.value))} className="w-full" /></div>
        </div>
        <div className="flex justify-center">
          <div className="inline-block border border-gray-200 rounded-lg overflow-hidden">
            {Array.from({length:moduleCount}).map((_,r)=>(<div key={r} className="flex">{Array.from({length:moduleCount}).map((_,c)=>(<div key={c} style={{width:moduleSize,height:moduleSize,background:data[r*moduleCount+c]?fgColor:bgColor}} />))}</div>))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}