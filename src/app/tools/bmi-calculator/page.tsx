"use client";
import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

export default function BmiCalculatorPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{bmi:number;level:string;color:string;advice:string}|null>(null);
  const calc = () => {
    const h = parseFloat(height)/100, w = parseFloat(weight);
    if (!h||!w||h<=0||w<=0) return;
    const bmi = w/(h*h);
    let level="",color="",advice="";
    if(bmi<18.5){level="偏瘦";color="#3b82f6";advice="建议增加营养摄入，适当增重。";}
    else if(bmi<24){level="正常";color="#22c55e";advice="体重正常，继续保持！";}
    else if(bmi<28){level="偏胖";color="#f59e0b";advice="建议控制饮食，增加运动。";}
    else{level="肥胖";color="#ef4444";advice="建议咨询医生，科学减重。";}
    setResult({bmi:Math.round(bmi*10)/10,level,color,advice});
  };
  return (
    <ToolLayout title="BMI 计算器" description="计算身体质量指数">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">身高 (cm)</label>
            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="170" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">体重 (kg)</label>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="65" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none" /></div>
        </div>
        <button onClick={calc} className="w-full rounded-xl bg-blue-600 py-3 text-white font-medium hover:bg-blue-700">计算 BMI</button>
        {result && (
          <div className="rounded-xl border-2 p-6 text-center" style={{borderColor:result.color}}>
            <div className="text-5xl font-bold mb-2" style={{color:result.color}}>{result.bmi}</div>
            <div className="text-xl font-medium mb-2">{result.level}</div>
            <div className="text-sm text-gray-500">{result.advice}</div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}