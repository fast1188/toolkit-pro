"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function ColorPalettePage() {
  const [baseColor, setBaseColor] = useState("#667eea");
  const [count, setCount] = useState(5);
  const hexToHsl = (hex:string) => {
    let r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
    const max=Math.max(r,g,b),min=Math.min(r,g,b);let h=0,s=0,l=(max+min)/2;
    if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);
    if(max===r)h=((g-b)/d+(g<b?6:0))/6;else if(max===g)h=((b-r)/d+2)/6;else h=((r-g)/d+4)/6;}
    return{h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)};
  };
  const hslToHex=(h:number,s:number,l:number)=>{s/=100;l/=100;const a=s*Math.min(l,1-l);const f=(n:number)=>{const k=(n+h/30)%12;return l-a*Math.max(Math.min(k-3,9-k,1),-1);};return"#"+[f(0),f(8),f(4)].map(x=>Math.round(x*255).toString(16).padStart(2,"0")).join("");};
  const hsl=hexToHsl(baseColor);
  const palette=Array.from({length:count},(_,i)=>{const l=Math.round(95-(80/(count-1||1))*i);return{hex:hslToHex(hsl.h,hsl.s,l),l};});
  return(
    <ToolLayout title="颜色调色板" description="根据基础颜色生成渐变色板">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <input type="color" value={baseColor} onChange={(e)=>setBaseColor(e.target.value)} className="h-12 w-12 rounded-lg border cursor-pointer" />
          <input type="text" value={baseColor} onChange={(e)=>setBaseColor(e.target.value)} className="flex-1 rounded-lg border border-gray-200 px-3 py-2 font-mono" />
          <div><label className="text-xs text-gray-500">色阶数</label>
            <input type="number" min="3" max="10" value={count} onChange={(e)=>setCount(Number(e.target.value))} className="w-16 rounded-lg border border-gray-200 px-2 py-2 text-center" /></div>
        </div>
        <div className="space-y-2">
          {palette.map((c,i)=>(
            <div key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 overflow-hidden">
              <div className="w-16 h-12" style={{background:c.hex}} />
              <div className="flex-1 px-3"><span className="font-mono text-sm">{c.hex.toUpperCase()}</span><span className="text-xs text-gray-400 ml-2">L:{c.l}%</span></div>
              <CopyButton text={c.hex.toUpperCase()} />
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
}