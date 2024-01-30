export interface TreeSelectProps {
  className?: string | string[];
  style?: React.CSSProperties;
}

export interface TreeSelectLeftItemProps {
  /**
   * 值(唯一)
   */
  value?: string;
  /**
   * 文本值(树节点展示内容)
   */
  title?: string;
  /**
   * 子树
   */
  children?: TreeSelectLeftItemProps[];
  /**
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 是否可选择
   */
  selectable?: boolean;
  /**
   * 是否叶子节点
   */
  isLeaf?: boolean;
  /**
   * 唯一
   */
  key?: string;
}
