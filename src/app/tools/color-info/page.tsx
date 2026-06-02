"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function ColorInfoPage() {
  const [hex, setHex] = useState("#667eea");
  const hexToRgb = (h: string) => ({ r: parseInt(h.slice(1,3),16), g: parseInt(h.slice(3,5),16), b: parseInt(h.slice(5,7),16) });
  const hexToHsl = (h: string) => {
    let r=parseInt(h.slice(1,3),16)/255,g=parseInt(h.slice(3,5),16)/255,b=parseInt(h.slice(5,7),16)/255;
    const max=Math.max(r,g,b),min=Math.min(r,g,b);let h2=0,s=0,l=(max+min)/2;
    if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);if(max===r)h2=((g-b)/d+(g<b?6:0))/6;else if(max===g)h2=((b-r)/d+2)/6;else h2=((r-g)/d+4)/6;}
    return{h:Math.round(h2*360),s:Math.round(s*100),l:Math.round(l*100)};
  };
  const rgb = hexToRgb(hex);
  const hsl = hexToHsl(hex);
  return (
    <ToolLayout title="颜色信息" description="查看颜色的HEX、RGB、HSL值">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <input type="color" value={hex} onChange={e => setHex(e.target.value)} className="h-16 w-16 rounded-xl border cursor-pointer" />
          <input value={hex} onChange={e => setHex(e.target.value)} className="flex-1 rounded-lg border border-gray-200 px-3 py-2 font-mono text-lg" />
        </div>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="h-24" style={{background: hex}} />
          <div className="p-4 space-y-2">
            {[{l:"HEX",v:hex},{l:"RGB",v:`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`},{l:"HSL",v:`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}].map(x => (
              <div key={x.l} className="flex items-center justify-between"><span className="text-sm text-gray-500">{x.l}</span><div className="flex items-center gap-2"><code className="text-sm font-mono">{x.v}</code><CopyButton text={x.v} /></div></div>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}