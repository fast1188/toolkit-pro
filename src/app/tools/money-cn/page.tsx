"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function MoneyCnPage() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const convert = (val: string) => {
    const num = parseFloat(val);
    if (isNaN(num) || num < 0 || num > 999999999999.99) { setResult("请输入有效金额（0-9999亿）"); return; }
    const digits = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    const units = ["", "拾", "佰", "仟"];
    const bigUnits = ["", "万", "亿", "万亿"];
    const intPart = Math.floor(num);
    const decPart = Math.round((num - intPart) * 100);
    let result = "";
    if (intPart === 0) { result = "零"; }
    else {
      const str = String(intPart);
      const groups = [];
      for (let i = str.length; i > 0; i -= 4) groups.unshift(str.slice(Math.max(0, i - 4), i));
      groups.forEach((group, gi) => {
        let groupResult = "";
        const padded = group.padStart(4, "0");
        let prevZero = false;
        for (let i = 0; i < 4; i++) {
          const d = parseInt(padded[i]);
          if (d === 0) { prevZero = true; }
          else { if (prevZero) groupResult += "零"; groupResult += digits[d] + units[3 - i]; prevZero = false; }
        }
        if (groupResult) result += groupResult + bigUnits[groups.length - 1 - gi];
      });
    }
    result += "元";
    if (decPart === 0) { result += "整"; }
    else {
      const jiao = Math.floor(decPart / 10);
      const fen = decPart % 10;
      if (jiao > 0) result += digits[jiao] + "角";
      if (fen > 0) result += digits[fen] + "分";
    }
    setResult(result);
  };

  return (
    <ToolLayout title="金额大写转换" description="将数字金额转换为中文大写金额">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">输入金额</label>
          <input type="text" value={amount} onChange={(e) => { setAmount(e.target.value); convert(e.target.value); }} placeholder="例如：12345.67" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none" />
        </div>
        {result && (
          <div className="relative">
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 text-center">
              <div className="text-sm text-amber-600 mb-2">中文大写金额</div>
              <div className="text-xl font-bold text-amber-800">{result}</div>
            </div>
            <CopyButton text={result} />
          </div>
        )}
        <div className="rounded-xl bg-gray-50 p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">示例</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <p>1234.56 → 壹仟贰佰叁拾肆元伍角陆分</p>
            <p>10000 → 壹万元整</p>
            <p>100000000 → 壹亿元整</p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}