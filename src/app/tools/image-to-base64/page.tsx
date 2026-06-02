"use client";
import { useState } from "react";
import { ToolLayout, CopyButton } from "@/components/ToolLayout";

export default function ImageToBase64Page() {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setPreview(dataUrl);
      setResult(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <ToolLayout title="图片转 Base64" description="将图片转换为 Base64 编码，支持预览和复制">
      <div className="space-y-6">
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
          <input type="file" accept="image/*" onChange={handleFile} className="hidden" id="fileInput" />
          <label htmlFor="fileInput" className="cursor-pointer">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-gray-500">点击选择图片或拖拽到此处</div>
            <div className="text-xs text-gray-400 mt-1">支持 JPG、PNG、GIF、WebP</div>
          </label>
        </div>
        {preview && (
          <div className="text-center">
            <img src={preview} alt="预览" className="max-h-48 mx-auto rounded-lg border" />
          </div>
        )}
        {result && (
          <div className="relative">
            <pre className="rounded-xl bg-gray-900 p-4 text-xs text-green-400 overflow-x-auto max-h-48 overflow-y-auto">{result.substring(0, 200)}...</pre>
            <CopyButton text={result} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}