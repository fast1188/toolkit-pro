"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function RmbConverterPage() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const convert = (val: string) => {
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) { setResult(""); return; }
    const digits = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    const units = ["", "拾", "佰", "仟"];
    const bigUnits = ["", "万", "亿"];
    const intPart = Math.floor(num);
    const decPart = Math.round((num - intPart) * 100);
    let r = "";
    if (intPart > 0) {
      const str = String(intPart);
      const groups = [];
      for (let i = str.length; i > 0; i -= 4) groups.unshift(str.slice(Math.max(0, i - 4), i));
      groups.forEach((g, gi) => {
        let gr = "";
        const pad = g.padStart(4, "0");
        let pz = false;
        for (let i = 0; i < 4; i++) {
          const d = parseInt(pad[i]);
          if (d === 0) { pz = true; } else { if (pz) gr += "零"; gr += digits[d] + units[3 - i]; pz = false; }
        }
        if (gr) r += gr + bigUnits[groups.length - 1 - gi];
      });
    } else { r = "零"; }
    r += "元";
    if (decPart === 0) { r += "整"; } else {
      const j = Math.floor(decPart / 10); const f = decPart % 10;
      if (j > 0) r += digits[j] + "角";
      if (f > 0) r += digits[f] + "分";
    }
    setResult(r);
  };

  return (
    <ToolLayout title="人民币大写" description="将数字金额转换为中文大写金额">
      <div className="space-y-6">
        <input type="text" value={amount} onChange={(e) => { setAmount(e.target.value); convert(e.target.value); }} placeholder="输入金额，如 12345.67" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg font-mono focus:border-blue-500 focus:outline-none" />
        {result && (
          <div className="relative">
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 text-center">
              <div className="text-sm text-amber-600 mb-2">中文大写金额</div>
              <div className="text-xl font-bold text-amber-800">{result}</div>
            </div>
            <CopyButton text={result} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}