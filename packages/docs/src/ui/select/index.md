---
order: 7
group:
  title: 数据输入
toc: content
---

# Select 选择框

<!-- <code src="./demos/ref.tsx"></code> -->

## 基本使用

<code src="./demos/basic.tsx"></code>

## 单/多选

<code src="./demos/mode.tsx"></code>

## 清除、提示

<code src="./demos/clear.tsx"></code>

## 禁用

<code src="./demos/disabled.tsx"></code>

## 事件函数

<code src="./demos/api.tsx"></code>

## API

| Name          | Description          | Type                                           | Default  |
| ------------- | -------------------- | ---------------------------------------------- | -------- |
| className     | 外联类名             | `string / string[]`                            | `-`      |
| style         | 内联样式             | `CSSProperties `                               | `-`      |
| defaultOpen   | 是否默认展开下拉框   | `boolean`                                      | `false`  |
| open          | 是否展开下拉框       | `boolean`                                      | `false`  |
| value         | 选中的条目           | `string / string[] / number / number[]`        | `-`      |
| options       | 选择数据数组         | `Options[]`                                    | `-`      |
| mode          | 选择模式             | `'single' / 'multiple'`                        | `single` |
| allowClear    | 是否支持清除         | `boolean`                                      | `false`  |
| placeholder   | 提示                 | `string`                                       | `-`      |
| disabled      | 禁用状态             | `boolean `                                     | `false`  |
| direction     | 下拉框方向           | `'up' / 'down'`                                | `down`   |
| onPopupScroll | 下拉列表滚动时的回调 | `(e) => void `                                 | `-`      |
| onChange      | 选中 option 时的回调 | `(value: OptionItem, option: Options) => void` | `-`      |

#### Options

| Name      | Description | Type               | Default |
| --------- | ----------- | ------------------ | ------- |
| label     | 文本        | `string / number`  | `-`     |
| value     | 值          | `string / number ` | `-`     |
| disabled? | 是否禁用    | `boolean`          | `-`     |
