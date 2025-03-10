# 图标组件

我们使用 TSX 组件实现图标，而非直接使用 SVG 文件。这种方法提供了多项技术优势：

1. **类型安全与静态分析** - 通过 TypeScript 的类型系统，可以在编译时捕获潜在错误，并获得完整的 IDE 智能提示
2. **动态属性绑定** - 可以响应式地绑定属性，实现复杂的交互效果和状态管理
3. **CSS-in-JS 集成** - 与 styled-components 等样式解决方案无缝集成，实现主题化和动态样式
4. **Tree-shaking 优化** - 支持打包工具的 tree-shaking，减小最终包体积
5. **动画与交互增强** - 可以利用 React 的生命周期和状态管理实现复杂的 SVG 动画和交互
6. **ARIA 与可访问性** - 更容易实现符合 WAI-ARIA 标准的可访问性功能
7. **渲染优化** - 可以利用 React 的虚拟 DOM 和 memo 等特性优化渲染性能

## 工具

我们使用 [SVGR](https://react-svgr.com/) 将 SVG 文件转换为 React 组件。这个工具提供了强大的功能：

- **SVG 优化** - 自动移除冗余属性、合并路径、优化数值精度
- **TypeScript 集成** - 生成带有完整类型定义的组件
- **自定义模板** - 支持自定义组件模板，实现统一的代码风格
- **属性传递** - 智能处理 SVG 属性与 React 属性的映射
- **可访问性增强** - 自动添加 ARIA 属性和角色
- **批量转换** - 支持目录批量处理，提高工作效率

## 图标组件编写

```tsx
import { FC, SVGProps } from 'react';

export const IconExample: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="..." />
  </svg>
);
```

## 高级特性

使用 TSX 组件可以实现以下直接导入 SVG 无法实现的高级特性：

1. **条件渲染部分路径** - 基于状态或属性动态显示/隐藏图标的特定部分
2. **复合变换** - 实现基于状态的复杂变换，如路径变形、坐标计算等
3. **响应式颜色系统** - 支持多色图标，可根据主题或状态动态调整多个填充颜色
4. **交互热区** - 为图标的不同部分定义独立的交互区域和事件处理
5. **渐变与滤镜的动态控制** - 程序化控制 SVG 的高级渲染特性
6. **路径动画** - 实现基于 SMIL 或 JavaScript 的复杂路径动画
7. **性能优化** - 通过 memo 和 useCallback 优化频繁更新的图标渲染
