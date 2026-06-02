# ToolKit Pro 🔧

一站式在线工具集合 SaaS 平台 — 一人公司项目

## 功能特性

### 🛠️ 10+ 在线工具
- **字数统计** - 快速统计文本字数、字符数、行数等
- **JSON 格式化** - 在线 JSON 格式化、压缩、验证
- **二维码生成器** - 免费生成自定义二维码
- **Base64 编解码** - 文本和文件的 Base64 转换
- **颜色转换器** - HEX、RGB、HSL 格式互转
- **Markdown 预览** - 实时 Markdown 编辑和预览
- **密码生成器** - 生成安全随机密码
- **文本对比** - 在线文本差异对比 (Pro)
- **哈希生成器** - SHA-1/256/384/512 计算 (Pro)
- **占位文本生成** - Lorem Ipsum / 千字文生成

### 🏗️ 技术架构
- **框架**: Next.js 16 (App Router) + TypeScript
- **样式**: Tailwind CSS
- **数据库**: SQLite (Prisma ORM)
- **认证**: JWT + bcryptjs
- **部署**: Docker + Docker Compose

### 💰 商业模式
- **免费版**: 6+ 核心工具免费使用
- **Pro 版**: ¥29/月，解锁全部高级工具
- **企业版**: ¥99/月，团队协作 + 专属支持

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 初始化数据库
npx prisma migrate dev --name init

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### Docker 部署

```bash
# 构建并启动
docker-compose up -d

# 查看日志
docker-compose logs -f
```

## 项目结构

```
toolkit-pro/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # 认证页面
│   │   ├── api/               # API 路由
│   │   ├── dashboard/         # 用户控制台
│   │   ├── pricing/           # 定价页面
│   │   └── tools/             # 工具页面
│   │       ├── text-counter/
│   │       ├── json-formatter/
│   │       ├── qr-generator/
│   │       ├── base64/
│   │       ├── color-converter/
│   │       ├── markdown-preview/
│   │       ├── password-generator/
│   │       ├── text-diff/
│   │       ├── hash-generator/
│   │       └── lorem-ipsum/
│   ├── components/            # React 组件
│   └── lib/                   # 工具函数和配置
├── prisma/                    # 数据库 Schema
├── Dockerfile                 # Docker 配置
├── docker-compose.yml         # Docker Compose 配置
└── package.json
```

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `DATABASE_URL` | 数据库连接 | `file:./dev.db` |
| `JWT_SECRET` | JWT 密钥 | - |
| `NEXT_PUBLIC_APP_URL` | 应用地址 | `http://localhost:3000` |

## 部署指南

### Vercel (推荐)
```bash
npm i -g vercel
vercel
```

### 自有服务器
```bash
# 1. 克隆项目
git clone <repo-url>

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 编辑 .env 填入你的配置

# 4. 初始化数据库
npx prisma migrate deploy

# 5. 构建
npm run build

# 6. 启动
npm start
```

### 贡献
欢迎提交 Issue 和 PR！

### 许可
MIT License
