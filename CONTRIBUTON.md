# EatWise Web 项目贡献指南

## 技术栈

本项目使用以下技术栈：

- Next.js 15 (App Router)
- TypeScript 5.8
- Node.js 22.6.0
- pnpm 10.5.2
- shadcn/ui (New York Style)
- Tailwind CSS 4
- Lucide React Icons
- ESLint 9
- Prettier 3
- Stylelint 16
- CSpell

## TypeScript 配置

项目启用了以下 TypeScript 严格模式标志：

- `strict: true`
- `useUnknownInCatchVariables: true`
- `noUncheckedIndexedAccess: true`

## React 组件规范

- 所有 React 组件必须使用 `FC` 类型注解：
- 避免使用 default export，使用 named export 代替：

```tsx
import { FC } from 'react';

export const Component: FC<Props> = ({ prop }) => {
  return <div>{prop}</div>;
};
```

## 导入规范

- 使用 `@/` 路径别名导入项目内部模块
- 类型导入使用 `import type` 语法：

```tsx
import type { ButtonProps } from '@/components/ui/button';
import { cn } from '@/utils/component';
```

导入文件时，使用最短路径，无需 `/index` 或 `/index.ts` 等后缀，对应 VSCode 配置：

```json
{
  "typescript.preferences.importModuleSpecifierEnding": "minimal"
}
```

举例：

```tsx
import { Button } from '@/components/ui/button';
```

## 目录结构

```plaintext
src/
├── app/          # Next.js App Router 页面和路由
├── components/   # 可复用组件
├── hooks/        # 自定义 React Hooks
├── icons/        # 图标组件
└── utils/        # 工具函数
```

## 代码风格与检查

项目使用 ESLint、Prettier、Stylelint 和 CSpell 进行代码质量检查和格式化。

### ESLint 和 Prettier

- 保存文件时会自动应用 ESLint 修复
- 使用 `pnpm run lint` 命令检查整个项目

### CSpell 拼写检查

如果遇到 CSpell 警告，可以将特定术语添加到项目根目录的 `cspell.config.yaml` 文件中：

```yaml
words:
  - eatwise
```

## 提交规范

提交信息应该清晰描述变更内容，并使用英文编写。除专业术语外，开头无需大写。

举例：

```plaintext
feat: ✨ add new feature
chore: 📦 update dependencies
fix: 🐛 something is not working
```

## 开发流程

1. 使用 `pnpm dev` 启动开发服务器（使用 Turbopack）
2. 编写代码并确保通过所有 lint 检查
3. 提交前运行 `pnpm lint` 确保代码质量
