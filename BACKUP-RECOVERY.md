# ToolKit Pro 数据备份与恢复指南

## 备份状态

| 备份类型 | 状态 | 位置 |
|---------|------|------|
| 本地代码 | ✅ 已提交 Git | toolkit-pro/ |
| 数据库备份 | ✅ 已备份 | toolkit-pro/backups/ |
| 线上部署 | ✅ 已部署 | https://toolkit-pro-delta.vercel.app |
| GitHub 远程 | ❌ 待登录 | 需要 gh auth login |

## 项目文件清单

### 核心代码
- src/app/          → 页面和路由
- src/components/   → React 组件
- src/lib/          → 工具函数（数据库、认证、工具配置）
- public/           → 静态资源（favicon、robots.txt、sitemap.xml）

### 配置文件
- package.json      → 依赖配置
- next.config.ts    → Next.js 配置
- .env              → 环境变量（不提交到 Git）
- Dockerfile        → Docker 部署配置

### 数据库
- dev.db            → SQLite 数据库（本地）
- backups/          → 数据库备份目录

## 恢复步骤

### 1. 从本地恢复
如果代码丢失，从 Git 恢复：
  cd toolkit-pro
  git log --oneline        # 查看提交记录
  git checkout <commit>    # 恢复到指定版本

### 2. 从 GitHub 恢复（需要先推送）
  git clone https://github.com/fast1188/toolkit-pro.git
  cd toolkit-pro
  npm install
  npm run dev

### 3. 从 Vercel 恢复
Vercel 保留了部署历史，可以回滚到任意版本：
  vercel ls --scope fast1188s-projects
  vercel rollback <deployment-url> --scope fast1188s-projects

### 4. 数据库恢复
  cp backups/toolkit_backup_*.db dev.db
  npm run dev

## 环境变量

| 变量 | 值 | 说明 |
|------|-----|------|
| DATABASE_URL | file:./dev.db | 数据库路径 |
| JWT_SECRET | toolkit-pro-jwt-secret-2026 | JWT 密钥 |
| NEXT_PUBLIC_APP_URL | https://toolkit-pro-delta.vercel.app | 线上地址 |

## Vercel 环境变量（已配置）

在 Vercel 控制台已配置：
- DATABASE_URL
- JWT_SECRET
- NEXT_PUBLIC_APP_URL

## 紧急联系

如果所有备份都丢失：
1. Vercel 有部署历史，至少可以恢复线上版本
2. 本地 Git 有完整提交记录
3. 数据库备份在 backups/ 目录

## 建议操作

1. **立即执行**: gh auth login → 创建 GitHub 仓库 → 推送代码
2. **定期备份**: 每周备份一次数据库
3. **环境变量**: 确保 .env 文件安全保存