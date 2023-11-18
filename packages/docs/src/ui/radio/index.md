---
order: 8
group:
  title: 数据输入
toc: content
---

# Radio 单选框

<!-- <code src="./demos/ref.tsx"></code> -->

## 基本使用

<code src="./demos/basic.tsx"></code>

## 属性值

<code src="./demos/props.tsx"></code>

## 单选组合

<code src="./demos/group.tsx"></code>

## 垂直

<code src="./demos/dirgroup.tsx"></code>

## API

#### Radio

| Name      | Description                         | Type                                             | Default |
| --------- | ----------------------------------- | ------------------------------------------------ | ------- |
| className | 外联类名                            | `string / string[]`                              | `-`     |
| style     | 内联样式                            | `CSSProperties `                                 | `-`     |
| disabled  | 是否禁用                            | `boolean`                                        | `false` |
| value     | 选中的值,控件的 value(单独使用无效) | `any`                                            | `-`     |
| checked   | 是否选中                            | `boolean`                                        | `false` |
| onChange  | 选项值变化时的回调函数              | `(value?: boolean, event?: ChangeEvent) => void` | `-`     |

支持基本标签属性及方法

#### Radio.Group

| Name      | Description          | Type                                                             | Default    |
| --------- | -------------------- | ---------------------------------------------------------------- | ---------- |
| className | 外联类名             | `string / string[]`                                              | `-`        |
| style     | 内联样式             | `CSSProperties `                                                 | `-`        |
| direction | 方向                 | `vertical / horizontal`                                          | `vertical` |
| options   | 配置单选元素         | `OptionsType`                                                    | `-`        |
| value     | 选中的值             | `string / number / OptionType`                                   | `-`        |
| disabled  | 是否全部禁用         | `boolean`                                                        | `false`    |
| name      | HTML 元素原生属性    | `string`                                                         | `-`        |
| onChange  | 选项变化时的回调函数 | `(value: string/ number/OptionType, event: ChangeEvent) => void` | `-`        |

## 注意

1.单独使用`<Radio>`组件时，value 属性无实际效果

2.`<Radio.Group>`配合`<Radio>`使用时，要设置`<Radio>`的 value 属性。
