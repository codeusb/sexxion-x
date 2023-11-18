---
order: 0
group: # 配置当前页所属的侧边菜单分组，未配置时不会展示分组。
  title: 基础 # 所在分组的名称
toc: content # 在页面右侧展示锚点链接
---

# Button 按钮

按钮，一种常见的组件

## 基本用法

<code src="./demos/type.tsx"></code>

## 按钮尺寸

<code src="./demos/size.tsx"></code>

## 圆角

<code src="./demos/round.tsx"></code>

## 禁用

<code src="./demos/disabled.tsx"></code>

<!-- ## ref 测试

<code src="./demos/ref.tsx"></code> -->

## API

| Name     | Description  | Type                                        | Default   |
| -------- | ------------ | ------------------------------------------- | --------- |
| type     | 按钮类型     | `default / primary / warn  / danger / dark` | `default` |
| size     | 按钮尺寸     | `small   /normal / large `                  | `normal`  |
| round    | 按钮圆角     | `boolean`                                   | `false`   |
| disabled | 按钮禁用     | `boolean`                                   | `false`   |
| htmlType | 原生按钮类型 | `submit / reset / button`                   | `button`  |

支持基本标签属性及方法
