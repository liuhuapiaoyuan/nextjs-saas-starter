# Next.js SaaS 启动模板

> **重要提示**  
> 本项目仍在开发中，如果您发现任何问题，请提出意见！

## 介绍

这是一个基于 **Next.js** 的SaaS应用程序启动模板，支持用户认证、Stripe支付集成以及为登录用户提供仪表盘。

## 特性

- 基于 `Next.js@15rc` 版本开发，体验最新的React特性。
- 集成 `Tailwind CSS` 和 `shadcn/ui` 组件库，轻松实现自定义主题。
- 集成 `NextAuth`，结合 `next-auth-oauth` 进行用户认证，支持多种登录方式（如微信、QQ、扫码关注等）。
- 集成 `SQLite` 数据库，轻量级数据库，方便一键启动。
- 完全可定制化的登录机制和登录界面样式。

## 技术栈

- Next.js@rc
- SQLite
- Tailwind CSS
- shadcn/ui
- NextAuth.js
- next-auth-oauth
- Zod 用于数据校验

## 技术栈

- **框架**: [Next.js@RC](https://nextjs.org/)
- **框架**: [React@RC](https://react.dev/)
- **CSS框架**: [Tailwind CSS](https://react.dev/)
- **授权框架**: [NextAuth](https://authjs.dev/)
- **授权框架**: [next-auth-oauth](https://liuhuapiaoyuan.github.io/next-auth-oauth/)
- **数据库**: [SQLite](https://www.sqlite.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **支付**: [Stripe](https://stripe.com/)
- **UI 库**: [shadcn/ui](https://ui.shadcn.com/)

## 实现功能

- [x] 登录页面
- [x] 注册页面
- [x] 第三方账号绑定页面
- [x] SaaS 落地页
- [x] SaaS 仪表盘
- [x] 用户个人资料（信息/安全/社交/登出）
- [x] 菜单栏/侧边栏（移动端兼容）
- [x] 页面切换动画
- [x] 图表演示页面

## 待办事项

- [ ] API 模块引入 tRPC，实现后端 API 接口
- [ ] 自动化 Swagger 文档生成

## 前端页面清单

- 账号-登录页面
- 账号-注册页面
- 账号-忘记密码找回邮件功能
- 账号-第三方账号绑定页面（GITHUB\GOOGLE）

- 个人信息 - 修改资料
- 个人信息 - 修改密码
- 个人信息 - 配置
- 个人信息 - 账单
- 个人信息 - 登出

- SaaS应用 - 落地页
- SAAS应用 - 仪表盘
- SAAS应用 - 分页表格/列表的演示页面
- SAAS应用 - 图表演示页面
- SAAS应用 - 表单提交演示页面
- SAAS应用 - 付费订阅页 - Stripe付费
- SAAS应用 - 支付账单页
- SAAS应用 - Excalidraw - 创建画布
- SAAS应用 - Excalidraw - 创作作品（查看、删除、打标签）
- SAAS应用 - Excalidraw - 坐标标签
- SAAS应用 - API - key管理（创建、删除、过期）
- SAAS应用 - API - 接口文档
- SaaS应用 - Team 团队（成员邀请、成员角(member,role),团队信息）

- 优化交互-精美交互菜单栏/侧边栏
- 优化交互-页面切换动画
- 优化交互-最小依赖的移动端兼容（css）

# Processings

- [ ] 菜单分组组件
- [ ] 菜单
- [ ] 菜单增加分组能力

## 部署

### 使用 Vercel 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuhuapiaoyuan%2Fnextjs-saas-starter)
