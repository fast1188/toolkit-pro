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
    "slug": "text-counter",
    "name": "字数统计",
    "description": "快速统计文本的字数、字符数、行数等",
    "category": "文本工具",
    "icon": "Hash",
    "isPremium": false,
    "href": "/tools/text-counter"
  },
  {
    "slug": "json-formatter",
    "name": "JSON 格式化",
    "description": "在线 JSON 格式化、压缩、验证",
    "category": "开发工具",
    "icon": "Braces",
    "isPremium": false,
    "href": "/tools/json-formatter"
  },
  {
    "slug": "qr-generator",
    "name": "二维码生成器",
    "description": "免费在线生成二维码",
    "category": "生成工具",
    "icon": "QrCode",
    "isPremium": false,
    "href": "/tools/qr-generator"
  },
  {
    "slug": "base64",
    "name": "Base64 编解码",
    "description": "在线 Base64 编码和解码",
    "category": "编码工具",
    "icon": "Binary",
    "isPremium": false,
    "href": "/tools/base64"
  },
  {
    "slug": "color-converter",
    "name": "颜色转换器",
    "description": "HEX、RGB、HSL 颜色格式互转",
    "category": "设计工具",
    "icon": "Palette",
    "isPremium": false,
    "href": "/tools/color-converter"
  },
  {
    "slug": "markdown-preview",
    "name": "Markdown 预览",
    "description": "实时 Markdown 编辑器和预览",
    "category": "文本工具",
    "icon": "FileText",
    "isPremium": false,
    "href": "/tools/markdown-preview"
  },
  {
    "slug": "password-generator",
    "name": "密码生成器",
    "description": "生成安全随机密码",
    "category": "安全工具",
    "icon": "Shield",
    "isPremium": false,
    "href": "/tools/password-generator"
  },
  {
    "slug": "text-diff",
    "name": "文本对比",
    "description": "在线文本差异对比工具",
    "category": "文本工具",
    "icon": "GitCompare",
    "isPremium": true,
    "href": "/tools/text-diff"
  },
  {
    "slug": "hash-generator",
    "name": "哈希生成器",
    "description": "MD5、SHA-1、SHA-256 哈希值计算",
    "category": "安全工具",
    "icon": "Fingerprint",
    "isPremium": true,
    "href": "/tools/hash-generator"
  },
  {
    "slug": "lorem-ipsum",
    "name": "占位文本生成",
    "description": "快速生成 Lorem Ipsum 占位文本",
    "category": "生成工具",
    "icon": "Type",
    "isPremium": false,
    "href": "/tools/lorem-ipsum"
  },
  {
    "slug": "url-encoder",
    "name": "URL 编解码",
    "description": "在线 URL 编码和解码",
    "category": "编码工具",
    "icon": "Link",
    "isPremium": false,
    "href": "/tools/url-encoder"
  },
  {
    "slug": "timestamp",
    "name": "时间戳转换",
    "description": "Unix 时间戳与日期时间互转",
    "category": "开发工具",
    "icon": "Clock",
    "isPremium": false,
    "href": "/tools/timestamp"
  },
  {
    "slug": "regex-tester",
    "name": "正则测试器",
    "description": "在线测试正则表达式",
    "category": "开发工具",
    "icon": "Regex",
    "isPremium": false,
    "href": "/tools/regex-tester"
  },
  {
    "slug": "text-escape",
    "name": "文本转义",
    "description": "在线文本转义和反转义",
    "category": "编码工具",
    "icon": "Code",
    "isPremium": false,
    "href": "/tools/text-escape"
  },
  {
    "slug": "uuid-generator",
    "name": "UUID 生成器",
    "description": "在线生成 UUID v4",
    "category": "生成工具",
    "icon": "Dna",
    "isPremium": false,
    "href": "/tools/uuid-generator"
  },
  {
    "slug": "html-preview",
    "name": "HTML 预览",
    "description": "在线编辑和实时预览 HTML 代码",
    "category": "开发工具",
    "icon": "Code",
    "isPremium": false,
    "href": "/tools/html-preview"
  },
  {
    "slug": "css-gradient",
    "name": "CSS 渐变生成器",
    "description": "可视化创建 CSS 渐变效果",
    "category": "设计工具",
    "icon": "Paintbrush",
    "isPremium": false,
    "href": "/tools/css-gradient"
  },
  {
    "slug": "markdown-table",
    "name": "Markdown 表格生成器",
    "description": "可视化创建 Markdown 表格",
    "category": "文本工具",
    "icon": "Table",
    "isPremium": false,
    "href": "/tools/markdown-table"
  },
  {
    "slug": "cron-generator",
    "name": "Cron 表达式生成器",
    "description": "可视化创建 Cron 定时任务表达式",
    "category": "开发工具",
    "icon": "Timer",
    "isPremium": false,
    "href": "/tools/cron-generator"
  },
  {
    "slug": "regex-generator",
    "name": "正则表达式生成器",
    "description": "常用正则表达式一键生成",
    "category": "开发工具",
    "icon": "Regex",
    "isPremium": false,
    "href": "/tools/regex-generator"
  },
  {
    "slug": "text-slug",
    "name": "文本转 Slug",
    "description": "将文本转换为 URL 友好的 Slug",
    "category": "文本工具",
    "icon": "Link",
    "isPremium": false,
    "href": "/tools/text-slug"
  },
  {
    "slug": "json-to-csv",
    "name": "JSON 转 CSV",
    "description": "将 JSON 数据转换为 CSV 表格",
    "category": "开发工具",
    "icon": "FileSpreadsheet",
    "isPremium": false,
    "href": "/tools/json-to-csv"
  },
  {
    "slug": "money-cn",
    "name": "金额大写转换",
    "description": "将数字金额转换为中文大写",
    "category": "文本工具",
    "icon": "Banknote",
    "isPremium": false,
    "href": "/tools/money-cn"
  },
  {
    "slug": "date-calc",
    "name": "日期计算器",
    "description": "计算两个日期之间的天数",
    "category": "开发工具",
    "icon": "Calendar",
    "isPremium": false,
    "href": "/tools/date-calc"
  },
  {
    "slug": "number-base",
    "name": "进制转换",
    "description": "二进制、八进制、十进制、十六进制互转",
    "category": "开发工具",
    "icon": "Binary",
    "isPremium": false,
    "href": "/tools/number-base"
  },
  {
    "slug": "image-to-base64",
    "name": "图片转 Base64",
    "description": "将图片转换为 Base64 编码",
    "category": "编码工具",
    "icon": "Image",
    "isPremium": false,
    "href": "/tools/image-to-base64"
  },
  {
    "slug": "font-preview",
    "name": "字体预览",
    "description": "预览不同字体效果",
    "category": "设计工具",
    "icon": "Type",
    "isPremium": false,
    "href": "/tools/font-preview"
  },
  {
    "slug": "text-to-speech",
    "name": "文本转语音",
    "description": "将文字转换为语音朗读",
    "category": "文本工具",
    "icon": "Volume2",
    "isPremium": false,
    "href": "/tools/text-to-speech"
  },
  {
    "slug": "rmb-converter",
    "name": "人民币大写",
    "description": "将数字金额转换为中文大写",
    "category": "文本工具",
    "icon": "Banknote",
    "isPremium": false,
    "href": "/tools/rmb-converter"
  },
  {
    "slug": "web-screenshot",
    "name": "网页截图",
    "description": "输入网址生成网页截图预览",
    "category": "开发工具",
    "icon": "Camera",
    "isPremium": false,
    "href": "/tools/web-screenshot"
  },
  {
    "slug": "bmi-calculator",
    "name": "BMI 计算器",
    "description": "计算身体质量指数",
    "category": "生活工具",
    "icon": "Heart",
    "isPremium": false,
    "href": "/tools/bmi-calculator"
  },
  {
    "slug": "unit-converter",
    "name": "单位换算",
    "description": "长度、重量、温度互转",
    "category": "生活工具",
    "icon": "ArrowLeftRight",
    "isPremium": false,
    "href": "/tools/unit-converter"
  },
  {
    "slug": "color-palette",
    "name": "颜色调色板",
    "description": "根据基础颜色生成渐变色板",
    "category": "设计工具",
    "icon": "SwatchBook",
    "isPremium": false,
    "href": "/tools/color-palette"
  },
  {
    "slug": "qr-styled",
    "name": "二维码美化",
    "description": "自定义颜色和大小的二维码",
    "category": "生成工具",
    "icon": "QrCode",
    "isPremium": false,
    "href": "/tools/qr-styled"
  },
  {
    "slug": "countdown-timer",
    "name": "倒计时器",
    "description": "设置倒计时，专注工作或休息",
    "category": "生活工具",
    "icon": "Timer",
    "isPremium": false,
    "href": "/tools/countdown-timer"
  },
  {
    "slug": "ascii-art",
    "name": "ASCII 艺术",
    "description": "将文字转换为ASCII艺术风格",
    "category": "生成工具",
    "icon": "Palette",
    "isPremium": false,
    "href": "/tools/ascii-art"
  },
  {
    "slug": "color-info",
    "name": "颜色信息",
    "description": "查看颜色的HEX、RGB、HSL值",
    "category": "设计工具",
    "icon": "Info",
    "isPremium": false,
    "href": "/tools/color-info"
  },
  {
    "slug": "json-visualizer",
    "name": "JSON 可视化",
    "description": "可视化展示JSON数据结构",
    "category": "开发工具",
    "icon": "TreePine",
    "isPremium": false,
    "href": "/tools/json-visualizer"
  },
  {
    "slug": "random-number",
    "name": "随机数生成器",
    "description": "生成指定范围的随机数",
    "category": "生成工具",
    "icon": "Dices",
    "isPremium": false,
    "href": "/tools/random-number"
  },
  {
    "slug": "regex-lite",
    "name": "轻量正则测试",
    "description": "在线快速测试正则表达式",
    "category": "开发工具",
    "icon": "Regex",
    "isPremium": false,
    "href": "/tools/regex-lite"
  },
    {
      "slug": "text-reverse",
      "name": "文本反转",
      "description": "将文本内容反转显示",
      "category": "文本工具",
      "icon": "FlipHorizontal",
      "isPremium": false,
      "href": "/tools/text-reverse"
    },

    {
      "slug": "word-frequency",
      "name": "词频统计",
      "description": "统计文本中每有词出现的频率",
      "category": "文本工具",
      "icon": "BarChart3",
      "isPremium": false,
      "href": "/tools/word-frequency"
    },

    {
      "slug": "color-mixer",
      "name": "颜色混合",
      "description": "混合两种颜色生成渝变色板",
      "category": "设计工具",
      "icon": "Blend",
      "isPremium": false,
      "href": "/tools/color-mixer"
    },

    {
      "slug": "hex-converter",
      "name": "进制转换器",
      "description": "不同进制数字之间互转换",
      "category": "开发工具",
      "icon": "Binary",
      "isPremium": false,
      "href": "/tools/hex-converter"
    },

    {
      "slug": "markdown-to-html",
      "name": "Markdown 转 HTML",
      "description": "将 Markdown 文本转换为 HTML 代码",
      "category": "开发工具",
      "icon": "FileCode",
      "isPremium": false,
      "href": "/tools/markdown-to-html"
    },

];

export function getToolsByCategory(): Record<string, ToolConfig[]> {
  const categories: Record<string, ToolConfig[]> = {};
  for (const tool of tools) {
    if (!categories[tool.category]) {
      categories[tool.category] = [
    {
      "slug": "json-to-yaml",
      "name": "JSON 联型换",
      "description": " 联型系转换WalLML格式",
      "category": "开发工具",
      "icon": "Braces",
      "isPremium": false,
      "href": "/tools/json-to-yaml"
    },

    {
      "slug": "color-harmony",
      "name": "颜色赖型器",
      "description": "根择颜色赖型节开十色板",
      "category": "设计工具",
      "icon": "Palette",
      "isPremium": false,
      "href": "/tools/color-harmony"
    },

    {
      "slug": "text-similarity",
      "name": "文本相异性分析",
      "description": "识分文本相异性与差异分析",
      "category": "文本工具",
      "icon": "BarChart3",
      "isPremium": false,
      "href": "/tools/text-similarity"
    },

    {
      "slug": "text-to-money",
      "name": "数字转换器",
      "description": "将数字转换为中文币饰号",
      "category": "文本工具",
      "icon": "Banknote",
      "isPremium": false,
      "href": "/tools/text-to-money"
    },

    {
      "slug": "mockup-generator",
      "name": "设计名生成成",
      "description": "选用背高验开设计名生成成",
      "category": "设计工具",
      "icon": "Wand",
      "isPremium": false,
      "href": "/tools/mockup-generator"
    },
];
    }
    categories[tool.category].push(tool);
  }
  return categories;
}

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools.find((t) => t.slug === slug);
}
