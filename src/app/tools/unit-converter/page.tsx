"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function UnitConverterPage() {
  const [category, setCategory] = useState("length");
  const [fromVal, setFromVal] = useState("1");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("cm");
  const cats: Record<string,{units:string[];conv:(v:number,f:string,t:string)=>number}> = {
    length:{units:["km","m","cm","mm","mi","yd","ft","in"],conv:(v,f,t)=>{const m:Record<string,number>={km:1000,m:1,cm:0.01,mm:0.001,mi:1609.344,yd:0.9144,ft:0.3048,in:0.0254};return v*m[f]/m[t];}},
    weight:{units:["kg","g","mg","lb","oz","t"],conv:(v,f,t)=>{const m:Record<string,number>={kg:1,g:0.001,mg:0.000001,lb:0.453592,oz:0.0283495,t:1000};return v*m[f]/m[t];}},
    temperature:{units:["C","F","K"],conv:(v,f,t)=>{let c=f==="C"?v:f==="F"?(v-32)*5/9:v-273.15;return t==="C"?c:t==="F"?c*9/5+32:c+273.15;}},
  };
  const cn:Record<string,string>={length:"长度",weight:"重量",temperature:"温度"};
  const result = cats[category]?.conv(parseFloat(fromVal)||0,fromUnit,toUnit);
  return (
    <ToolLayout title="单位换算" description="长度、重量、温度互转">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {Object.keys(cats).map(c=>(<button key={c} onClick={()=>{setCategory(c);setFromUnit(cats[c].units[0]);setToUnit(cats[c].units[1]);}} className={`rounded-lg px-3 py-1.5 text-sm ${category===c?"bg-blue-600 text-white":"bg-gray-100"}`}>{cn[c]}</button>))}
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
          <div><label className="block text-xs text-gray-500 mb-1">数值</label>
            <input type="number" value={fromVal} onChange={(e)=>setFromVal(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-lg" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">单位</label>
            <select value={fromUnit} onChange={(e)=>setFromUnit(e.target.value)} className="rounded-lg border border-gray-200 px-3 py-2">{cats[category].units.map(u=><option key={u} value={u}>{u}</option>)}</select></div>
          <div className="text-center text-2xl text-gray-400 pb-1">→</div>
          <div><label className="block text-xs text-gray-500 mb-1">单位</label>
            <select value={toUnit} onChange={(e)=>setToUnit(e.target.value)} className="rounded-lg border border-gray-200 px-3 py-2">{cats[category].units.map(u=><option key={u} value={u}>{u}</option>)}</select></div>
        </div>
        {result!==undefined&&!isNaN(result)&&(
          <div className="relative"><div className="rounded-xl bg-blue-50 border border-blue-200 p-6 text-center">
            <div className="text-sm text-blue-600 mb-1">转换结果</div>
            <div className="text-3xl font-bold text-blue-800">{Math.round(result*10000)/10000} {toUnit}</div>
          </div><CopyButton text={String(Math.round(result*10000)/10000)} /></div>
        )}
      </div>
    </ToolLayout>
  );
}