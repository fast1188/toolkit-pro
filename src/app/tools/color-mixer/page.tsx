"use client"
import { useState } from "react"
import { ToolLayout, CopyButton } from "@/components/ToolLayout"

export default function ColorMixerPage() {
  const [c1, setC1] = useState("#FF0000");
  const [c2, setC2] = useState("#0000FF");
  const mix = (r: number) => {
    const h2c = (h: string, i: number) => parseInt(h.slice(i*2+1,i*2+3),16);
    const red = Math.round(h2c(c1,0)*(1-r)+h2c(c2,0)*r);
    const grn = Math.round(h2c(c1,1)*(1-r)+h2c(c2,1)*r);
    const blu = Math.round(h2c(c1,2)*(1-r)+h2c(c2,2)*r);
    return "#"+[red,grn,blu].map(x=>x.toString(16).padStart(2,"0")).join("");
  };
  const steps = [0,0.25,0.5,0.75,1.0];
  return (
    <ToolLayout title="Color Mixer" description="Mix two colors">
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-1"><label className="text-xs text-gray-400 mb-1 block">Color 1</label><input type="color" value={c1} onChange={e => setC1(e.target.value)} className="h-12 w-full rounded-xl border cursor-pointer" /></div>
          <div className="flex-1"><label className="text-xs text-gray-400 mb-1 block">Color 2</label><input type="color" value={c2} onChange={e => setC2(e.target.value)} className="h-12 w-full rounded-xl border cursor-pointer" /></div>
        </div>
        <div className="flex gap-2">
          {steps.map(s => (<div key={s} className="flex-1 text-center"><div className="h-16 rounded-xl mb-2" style={{background:mix(s)}} /><div className="text-xs font-mono text-gray-500">{mix(s)}</div><CopyButton text={mix(s)} /></div>))}
        </div>
      </div>
    </ToolLayout>
  );
}