import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ToolConfig } from "@/lib/tools";

interface ToolCardProps {
  tool: ToolConfig;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300",
        tool.isPremium && "border-amber-200"
      )}
    >
      {tool.isPremium && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
          <Lock className="h-3 w-3" />
          Pro
        </div>
      )}

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
        <span className="text-lg font-bold">{tool.name.charAt(0)}</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-2">{tool.description}</p>

      <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
        立即使用
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
