---
order: 3
group:
  title: 布局
  # order: 3
toc: content
---

# Divider 分割线

和`<hr />`有部分区别

## 基本用法

<code src='./demos/basic.tsx'></code>

## 垂直分割线

<code src='./demos/layout.tsx'></code>

## API

| Name        | Description              | Type                    | Default      |
| ----------- | ------------------------ | ----------------------- | ------------ |
| className   | 外联样式                 | `string / string[]`     | `-`          |
| style       | 指定样式                 | `CSSProperties `        | `-`          |
| layout      | 分割线方向               | `horizontal / vertical` | `horizontal` |
| orientation | 水平分割线，文字排列方向 | `left / center / right` | `center`     |
