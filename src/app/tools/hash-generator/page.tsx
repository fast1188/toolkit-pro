"use client";

import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

async function hashString(algorithm: string, text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const algorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
    const results: Record<string, string> = {};

    for (const algo of algorithms) {
      results[algo] = await hashString(algo, input);
    }

    setHashes(results);
    setLoading(false);
  };

  return (
    <ToolLayout title="哈希生成器" description="MD5、SHA-1、SHA-256 哈希值在线计算">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">输入文本</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入要计算哈希值的文本..."
            className="h-32 w-full rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>

        <button
          onClick={generate}
          disabled={loading}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50 transition-colors"
        >
          {loading ? "计算中..." : "生成哈希值"}
        </button>

        {Object.keys(hashes).length > 0 && (
          <div className="space-y-3">
            {Object.entries(hashes).map(([algo, hash]) => (
              <div key={algo} className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-gray-500">{algo}</span>
                    <p className="mt-1 font-mono text-sm text-gray-900 break-all">{hash}</p>
                  </div>
                  <CopyButton text={hash} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
