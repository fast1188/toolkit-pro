import type { Metadata } from "next";
import { ToolCard } from "@/components/ToolCard";
import { tools, getToolsByCategory } from "@/lib/tools";

export const metadata: Metadata = {
  title: "全部工具",
  description: "ToolKit Pro 提供 " + tools.length + " 个在线工具，涵盖文本处理、开发辅助、设计配色、安全加密等分类。",
};

export default function ToolsPage() {
  const categories = getToolsByCategory();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">全部工具</h1>
        <p className="mt-2 text-gray-500">共 {tools.length} 个工具，涵盖 {Object.keys(categories).length} 个分类</p>
      </div>
      {Object.entries(categories).map(([category, categoryTools]) => (
        <div key={category} className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">{category}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((tool) => (<ToolCard key={tool.slug} tool={tool} />))}
          </div>
        </div>
      ))}
    </div>
  );
}