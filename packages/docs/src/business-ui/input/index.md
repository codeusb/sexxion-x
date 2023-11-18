---
order: 5
group:
  title: 数据输入
toc: content
---

# Input 输入框

输入框，一定要有的组件

## 基本用法

<code src="./demos/value.tsx" ></code>

## 输入框尺寸

<code src="./demos/size.tsx"></code>

## 前后缀、提示

<code src="./demos/fix.tsx"></code>

## 输入框 API

<code src="./demos/api.tsx"></code>

## 输入框类型

<code src="./demos/type.tsx"></code>

## 文本域

<code src="./demos/textarea.tsx"></code>

<!-- <code src="./demos/ref.tsx"></code> -->

## API

| Name          | Description              | Type                           | Default  |
| ------------- | ------------------------ | ------------------------------ | -------- |
| type          | 输入框类型               | `password / text / number `    | `text`   |
| size          | 输入框大小               | `small   /normal / large `     | `normal` |
| value         | 输入框值(可作默认值使用) | `-`                            | `-`      |
| allowClear    | 输入框是否可清除         | `boolean`                      | `false`  |
| disabled      | 输入框是否禁用           | `boolean`                      | `false`  |
| prefix        | 输入框前缀               | `React.ReactNode`              | `-`      |
| suffix        | 输入框后缀               | `React.ReactNode`              | `-`      |
| showTogglePwd | 密码框是否显示           | `boolean`                      | `false`  |
| onChange      | 输入框内容变化时的回调   | `(value?: string, e?) => void` | `-`      |
| onPressEnter  | 按下回车的回调           | `(e?) => void`                 | `-`      |
| showTextNum   | 文本框显示字数           | `boolean`                      | `false`  |

支持基本标签属性及方法
