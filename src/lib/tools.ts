export interface ToolConfig {
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  isPremium: boolean;
  href: string;
}

export const tools: ToolConfig[] = [
  {
    slug: "text-counter",
    name: "字数统计",
    description: "快速统计文本的字数、字符数、行数、段落数等详细信息",
    category: "文本工具",
    icon: "Hash",
    isPremium: false,
    href: "/tools/text-counter",
  },
  {
    slug: "json-formatter",
    name: "JSON 格式化",
    description: "在线 JSON 格式化、压缩、验证工具，支持语法高亮",
    category: "开发工具",
    icon: "Braces",
    isPremium: false,
    href: "/tools/json-formatter",
  },
  {
    slug: "qr-generator",
    name: "二维码生成器",
    description: "免费在线生成二维码，支持自定义颜色和大小",
    category: "生成工具",
    icon: "QrCode",
    isPremium: false,
    href: "/tools/qr-generator",
  },
  {
    slug: "base64",
    name: "Base64 编解码",
    description: "在线 Base64 编码和解码工具，支持文本和文件",
    category: "编码工具",
    icon: "Binary",
    isPremium: false,
    href: "/tools/base64",
  },
  {
    slug: "color-converter",
    name: "颜色转换器",
    description: "HEX、RGB、HSL 颜色格式互转，实时预览颜色效果",
    category: "设计工具",
    icon: "Palette",
    isPremium: false,
    href: "/tools/color-converter",
  },
  {
    slug: "markdown-preview",
    name: "Markdown 预览",
    description: "实时 Markdown 编辑器和预览，支持 GFM 语法",
    category: "文本工具",
    icon: "FileText",
    isPremium: false,
    href: "/tools/markdown-preview",
  },
  {
    slug: "password-generator",
    name: "密码生成器",
    description: "生成安全随机密码，可自定义长度和字符类型",
    category: "安全工具",
    icon: "Shield",
    isPremium: false,
    href: "/tools/password-generator",
  },
  {
    slug: "text-diff",
    name: "文本对比",
    description: "在线文本差异对比工具，高亮显示不同之处",
    category: "文本工具",
    icon: "GitCompare",
    isPremium: true,
    href: "/tools/text-diff",
  },
  {
    slug: "hash-generator",
    name: "哈希生成器",
    description: "MD5、SHA-1、SHA-256 哈希值在线计算",
    category: "安全工具",
    icon: "Fingerprint",
    isPremium: true,
    href: "/tools/hash-generator",
  },
  {
    slug: "lorem-ipsum",
    name: "占位文本生成",
    description: "快速生成 Lorem Ipsum 占位文本，支持中文",
    category: "生成工具",
    icon: "Type",
    isPremium: false,
    href: "/tools/lorem-ipsum",
  },
  {
    slug: "url-encoder",
    name: "URL 编解码",
    description: "在线 URL 编码和解码工具，处理特殊字符和中文",
    category: "编码工具",
    icon: "Link",
    isPremium: false,
    href: "/tools/url-encoder",
  },
  {
    slug: "timestamp",
    name: "时间戳转换",
    description: "Unix 时间戳与日期时间格式互转，支持毫秒和秒",
    category: "开发工具",
    icon: "Clock",
    isPremium: false,
    href: "/tools/timestamp",
  },
];

export function getToolsByCategory(): Record<string, ToolConfig[]> {
  const categories: Record<string, ToolConfig[]> = {};
  for (const tool of tools) {
    if (!categories[tool.category]) {
      categories[tool.category] = [  {
    slug: "regex-tester",
    name: "正则测试器",
    description: "在线测试正则表达式，高亮显示匹配结果",
    category: "开发工具",
    icon: "Regex",
    isPremium: false,
    href: "/tools/regex-tester",
  },
  {
    slug: "text-escape",
    name: "文本转义",
    description: "在线文本转义和反转义工具",
    category: "编码工具",
    icon: "Code",
    isPremium: false,
    href: "/tools/text-escape",
  },
  {
    slug: "uuid-generator",
    name: "UUID 生成器",
    description: "在线生成 UUID v4，支持自定义格式",
    category: "生成工具",
    icon: "Dna",
    isPremium: false,
    href: "/tools/uuid-generator",
  },];
    }
    categories[tool.category].push(tool);
  }
  return categories;
}

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((t) => t.slug === slug);
}
