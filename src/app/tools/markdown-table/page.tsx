"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function MarkdownTablePage() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(4);
  const [data, setData] = useState<string[][]>([
    ["姓名", "年龄", "城市"],
    ["张三", "25", "北京"],
    ["李四", "30", "上海"],
    ["王五", "28", "广州"],
  ]);

  const updateCell = (r: number, c: number, val: string) => {
    const newData = data.map((row, ri) => row.map((cell, ci) => (ri === r && ci === c ? val : cell)));
    setData(newData);
  };

  const addRow = () => { setData([...data, Array(cols).fill("")]); setRows(rows + 1); };
  const addCol = () => { setData(data.map(row => [...row, ""])); setCols(cols + 1); };

  const generateMarkdown = () => {
    const header = "| " + data[0].join(" | ") + " |";
    const divider = "| " + data[0].map(() => "---").join(" | ") + " |";
    const body = data.slice(1).map(row => "| " + row.join(" | ") + " |").join("\n");
    return header + "\n" + divider + "\n" + body;
  };

  return (
    <ToolLayout title="Markdown 表格生成器" description="可视化创建 Markdown 表格，一键复制">
      <div className="space-y-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {data.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-gray-200 p-1">
                      <input value={cell} onChange={(e) => updateCell(ri, ci, e.target.value)} className="w-full rounded border-none bg-transparent px-2 py-1 text-sm focus:bg-blue-50 focus:outline-none" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-2">
          <button onClick={addRow} className="rounded-lg bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200">+ 添加行</button>
          <button onClick={addCol} className="rounded-lg bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200">+ 添加列</button>
        </div>
        <div className="relative">
          <pre className="rounded-xl bg-gray-900 p-4 text-sm text-green-400 overflow-x-auto whitespace-pre-wrap">{generateMarkdown()}</pre>
          <CopyButton text={generateMarkdown()} />
        </div>
      </div>
    </ToolLayout>
  );
}