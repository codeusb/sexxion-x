---
order: 4
group:
  title: 布局
  # order: 4
toc: content
---

# Space 间隔

间隔，一种常见的组件

## 基本用法

<code src='./demos/basic.tsx'></code>

## 间距大小

<code src='./demos/size.tsx'></code>

## 间距对齐方式

<code src='./demos/align.tsx'></code>

## 间距分隔符

<code src='./demos/split.tsx'></code>

## API

| Name      | Description                   | Type                                 | Default      |
| --------- | ----------------------------- | ------------------------------------ | ------------ |
| className | 外联类名                      | `string / string[]`                  | `-`          |
| style     | 内联样式                      | `CSSProperties `                     | `-`          |
| direction | 间距排列方向                  | `horizontal / vertical`              | `horizontal` |
| size      | 间距大小,[水平间距, 垂直间距] | `SizeProps / [SizeProps, SizeProps]` | `medium`     |
| wrap      | 是否自动换行                  | `boolean `                           | `true`       |
| align     | 间隔对齐方式                  | `start / center / end / baseline`    | `start`      |
| split     | 间隔分隔符                    | `React.ReactNode`                    | `-`          |
