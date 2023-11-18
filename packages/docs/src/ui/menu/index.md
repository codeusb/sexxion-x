---
order: 9
group:
  title: 导航
toc: content
---

# Menu 菜单

<!-- ## ref 测试

<code src='./demos/ref.tsx'></code> -->

## 基本使用

<code src='./demos/basic.tsx'></code>

## 垂直模式

<code src='./demos/mode.tsx'></code>

## 子菜单

<code src='./demos/child.tsx'></code>

## API

#### Menu

| Name                 | Description                                                                         | Type                                            | Default        |
| -------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------- | -------------- |
| className            | 外联样式                                                                            | `string / string[]`                             | `-`            |
| style                | 指定样式                                                                            | `CSSProperties `                                | `-`            |
| activeKey            | 当前选中的 Menu.Item 的 key 值                                                      | `string`                                        | `-`            |
| items                | 导航菜单内容                                                                        | `ItemType[]`                                    | `-`            |
| mode                 | 导航菜单模式                                                                        | `'vertical' / 'horizontal' `                    | `'horizontal'` |
| activeKey            | 当前选中的 Menu.Item 的 key 值                                                      | `string`                                        | `-`            |
| defaultCollapsedList | 默认展开的父级 key 值列表(注意: 默认打开多层子菜单,需要把涉及的父级 key 值全部写入) | `string[] `                                     | `-`            |
| onSelect             | 选择菜单项触发的回调函数                                                            | `(eventKey: string, item: ItemType, e) => void` | `-`            |

#### ItemType

| Name       | Description        | Type               | Default |
| ---------- | ------------------ | ------------------ | ------- |
| label      | 菜单项标题         | `string `          | `-`     |
| eventKey   | 菜单项值(唯一标识) | `string `          | `-`     |
| disabled   | 是否禁用           | `boolean`          | `-`     |
| icon       | 菜单项图标         | `React.ReactNode ` | `-`     |
| childItems | 子菜单             | `ItemType[]`       | `-`     |

#### Menu.Item

**继承 ItemType 部分属性**
| Name | Description | Type | Default |
| --------- | ------------------------ | ------------------------------- | ------- |
| className | 外联样式 | `string / string[]` | `-` |
| style | 指定样式 | `CSSProperties ` | `-` |
| onSelect | 选择菜单项触发的回调函数 | `(eventKey: string, e) => void` | `-` |

#### Menu.Sub

**基本与 Menu.Item 一致**
