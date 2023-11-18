---
order: 6
group:
  title: 导航
toc: content
---

# Pagination 分页器

<!-- ## ref 测试

<code src='./demos/ref.tsx'></code> -->

## 基本使用

<code src='./demos/basic.tsx'></code>

## 更多数据

<code src='./demos/more.tsx'></code>

## 跳转

<code src='./demos/goto.tsx'></code>

## 可控

<code src='./demos/control.tsx'></code>

## 全部配置

<code src='./demos/all.tsx'></code>

## 禁用

<code src='./demos/disabled.tsx'></code>

## 简洁模式

<code src='./demos/simple.tsx'></code>

## API

| Name           | Description                | Type                                         | Default |
| -------------- | -------------------------- | -------------------------------------------- | ------- |
| className      | 外联类名                   | `string / string[]`                          | `-`     |
| style          | 内联样式                   | `CSSProperties `                             | `-`     |
| current        | 当前页码(默认当前页数)     | `number`                                     | `1`     |
| pageSize       | 每页数据条数(暂时固定 20)  | `number`                                     | `10`    |
| total          | 总数据条数                 | `number `                                    | `-`     |
| showJumper     | 是否可以快速跳转至某页     | `boolean`                                    | `false` |
| showSizeChange | 是否显示每页数据条数       | `boolean`                                    | `false` |
| simple         | 是否精简模式               | `boolean`                                    | `false` |
| disabled       | 是否禁用                   | `boolean`                                    | `false` |
| showTotal      | 是否显示总数据条数         | `(total: number) => React.ReactNode `        | `-`     |
| onChange       | 页码或 pageSize 改变的回调 | `(page?: number, pageSize?: number) => void` | `-`     |
