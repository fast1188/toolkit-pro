"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UuidGeneratorPage() {
  const [uuids, setUuids] = useState([]);
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [noDash, setNoDash] = useState(false);

  const generate = () => {
    const result = [];
    for (let i = 0; i < count; i++) {
      let uuid = generateUUID();
      if (uppercase) uuid = uuid.toUpperCase();
      if (noDash) uuid = uuid.replace(/-/g, "");
      result.push(uuid);
    }
    setUuids(result);
  };

  return (
    <ToolLayout title="UUID 生成器" description="在线生成 UUID v4，支持自定义格式">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-700">数量:</label>
            <input type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value))}
              className="w-20 rounded-lg border border-gray-200 px-3 py-1.5 text-sm" />
          </div>
          <label className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} className="rounded" />
            <span>大写</span>
          </label>
          <label className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50">
            <input type="checkbox" checked={noDash} onChange={(e) => setNoDash(e.target.checked)} className="rounded" />
            <span>无横线</span>
          </label>
        </div>
        <div className="flex gap-4">
          <button onClick={generate} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">生成</button>
          {uuids.length > 0 && <CopyButton text={uuids.join("\n")} />}
        </div>
        {uuids.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="space-y-2">
              {uuids.map((uuid, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                  <code className="font-mono text-sm text-gray-900">{uuid}</code>
                  <CopyButton text={uuid} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}