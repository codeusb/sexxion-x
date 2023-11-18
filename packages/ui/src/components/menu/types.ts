export interface MenuBaseProps {
  children?: React.ReactNode;
  className?: string | string[];
  style?: React.CSSProperties;
  /**
   * @description 当前选中的 Menu.Item 的 key 值
   */
  activeKey?: string;
  /**
   * @description 导航菜单内容
   */
  items?: ItemType[];
  /**
   * @description 导航菜单模式
   * @default 'horizontal'
   */
  mode?: 'vertical' | 'horizontal';
  /**
   * @description 默认展开的父级 key 值列表(注意: 默认打开多层子菜单,需要把涉及的父级key值全部写入)
   */
  defaultCollapsedList?: string[];
  /**
   * @description 选择菜单项触发的回调函数
   */
  onSelect?: (eventKey: string, item: ItemType, e: any) => void;
}

export interface ItemType {
  /**
   * @description 菜单项标题
   */
  label?: string;
  /**
   * @description 菜单项值(唯一标识)
   */
  eventKey?: string;
  /**
   * @description 菜单项是否禁选
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 菜单项图标
   */
  icon?: React.ReactNode;
  /**
   * @description 子菜单
   */
  childItems?: ItemType[];
}

export interface MenuItemBaseProps extends ItemType {
  children?: React.ReactNode;
  className?: string | string[];
  style?: React.CSSProperties;
  /**
   * @description 选择菜单项触发的回调函数
   */
  onSelect?: (eventKey: string, e: any) => void;
}
