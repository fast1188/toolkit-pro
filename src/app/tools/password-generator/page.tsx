"use client";

import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const generate = () => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setPassword("请至少选择一种字符类型");
      return;
    }

    let result = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }
    setPassword(result);
    setHistory((prev) => [result, ...prev].slice(0, 10));
  };

  const strength = password.length >= 16 ? "强" : password.length >= 12 ? "中" : "弱";
  const strengthColor = password.length >= 16 ? "text-green-600" : password.length >= 12 ? "text-yellow-600" : "text-red-600";

  return (
    <ToolLayout title="密码生成器" description="生成安全随机密码，可自定义长度和字符类型">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "大写字母", checked: uppercase, onChange: setUppercase },
            { label: "小写字母", checked: lowercase, onChange: setLowercase },
            { label: "数字", checked: numbers, onChange: setNumbers },
            { label: "特殊字符", checked: symbols, onChange: setSymbols },
          ].map((opt) => (
            <label key={opt.label} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={opt.checked}
                onChange={(e) => opt.onChange(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            密码长度: {length}
          </label>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <button
          onClick={generate}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          生成密码
        </button>

        {password && (
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <code className="font-mono text-lg text-gray-900 break-all">{password}</code>
              <CopyButton text={password} />
            </div>
            <p className={`mt-2 text-sm font-medium ${strengthColor}`}>
              密码强度: {strength}
            </p>
          </div>
        )}

        {history.length > 1 && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">历史记录</h3>
            <div className="space-y-1">
              {history.slice(1).map((pw, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                  <code className="text-xs font-mono text-gray-600 truncate">{pw}</code>
                  <CopyButton text={pw} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
