"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";

interface DiffLine {
  type: "same" | "added" | "removed";
  content: string;
}

function computeDiff(oldText: string, newText: string): DiffLine[] {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");
  const result: DiffLine[] = [];

  const maxLen = Math.max(oldLines.length, newLines.length);
  for (let i = 0; i < maxLen; i++) {
    const oldLine = oldLines[i];
    const newLine = newLines[i];

    if (oldLine === undefined) {
      result.push({ type: "added", content: newLine });
    } else if (newLine === undefined) {
      result.push({ type: "removed", content: oldLine });
    } else if (oldLine === newLine) {
      result.push({ type: "same", content: oldLine });
    } else {
      result.push({ type: "removed", content: oldLine });
      result.push({ type: "added", content: newLine });
    }
  }

  return result;
}

export default function TextDiffPage() {
  const [oldText, setOldText] = useState("这是一段示例文本。\n第二行内容。\n第三行保持不变。");
  const [newText, setNewText] = useState("这是修改后的文本。\n第二行内容。\n第三行保持不变。\n新增了第四行。");
  const [diff, setDiff] = useState<DiffLine[]>([]);

  const compare = () => {
    setDiff(computeDiff(oldText, newText));
  };

  const stats = {
    added: diff.filter((d) => d.type === "added").length,
    removed: diff.filter((d) => d.type === "removed").length,
  };

  return (
    <ToolLayout title="文本对比" description="在线文本差异对比工具，高亮显示不同之处">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">原始文本</label>
            <textarea
              value={oldText}
              onChange={(e) => setOldText(e.target.value)}
              className="h-48 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">修改后文本</label>
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="h-48 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
            />
          </div>
        </div>

        <button
          onClick={compare}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          对比差异
        </button>

        {diff.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm text-green-600">+{stats.added} 新增</span>
              <span className="text-sm text-red-600">-{stats.removed} 删除</span>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <pre className="p-4 font-mono text-sm overflow-auto">
                {diff.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.type === "added"
                        ? "bg-green-50 text-green-800"
                        : line.type === "removed"
                        ? "bg-red-50 text-red-800"
                        : "text-gray-600"
                    }
                  >
                    <span className="inline-block w-6 text-gray-400 select-none">
                      {line.type === "added" ? "+" : line.type === "removed" ? "-" : " "}
                    </span>
                    {line.content || "\u00A0"}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
