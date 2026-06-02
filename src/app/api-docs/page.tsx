import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API 文档",
  description: "ToolKit Pro API 接口文档 - 在线工具 API 调用指南",
};

const endpoints = [
  { method: "POST", path: "/api/auth/register", desc: "用户注册", params: "name, email, password", response: "{ user: { id, name, email, plan } }" },
  { method: "POST", path: "/api/auth/login", desc: "用户登录", params: "email, password", response: "{ user: { id, name, email, plan } }" },
  { method: "POST", path: "/api/auth/logout", desc: "退出登录", params: "-", response: "{ success: true }" },
];

const methodColors: Record<string, string> = { POST: "bg-green-100 text-green-700", GET: "bg-blue-100 text-blue-700" };

export default function ApiDocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">API 文档</h1>
        <p className="mt-2 text-gray-500">ToolKit Pro 提供的 REST API 接口</p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">基础信息</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>基础地址: <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">https://toolkitpro.dev/api</code></p>
          <p>认证方式: JWT Bearer Token (Cookie)</p>
          <p>内容类型: application/json</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-6">接口列表</h2>
      <div className="space-y-4">
        {endpoints.map((ep) => (
          <div key={ep.path} className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${methodColors[ep.method]}`}>{ep.method}</span>
              <code className="font-mono text-sm text-gray-900">{ep.path}</code>
              <span className="text-sm text-gray-500">{ep.desc}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">请求参数</p>
                <code className="bg-gray-50 block p-3 rounded-lg font-mono text-xs text-gray-700">{ep.params}</code>
              </div>
              <div>
                <p className="text-gray-500 mb-1">响应示例</p>
                <code className="bg-gray-50 block p-3 rounded-lg font-mono text-xs text-gray-700">{ep.response}</code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">注意事项</h3>
        <ul className="space-y-2 text-sm text-amber-700">
          <li>- 所有 API 调用需要设置正确的 Content-Type 头</li>
          <li>- 密码至少需要 8 位字符</li>
          <li>- JWT Token 有效期为 7 天</li>
          <li>- 生产环境必须使用 HTTPS</li>
        </ul>
      </div>
    </div>
  );
}