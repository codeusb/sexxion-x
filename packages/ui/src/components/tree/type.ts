import { CSSProperties } from 'react';

export type TreeNode = {
  key?: string;
  title?: string | any;
  height?: string;
  level?: number;
  children?: TreeNode[];
};

export interface TreeProps {
  style?: CSSProperties;
  nodeStyle?: CSSProperties;
  className?: string;
  treeData: TreeNode[];
  width?: string;
  defaultOpen?: boolean;
  onClickNode?: (node: TreeNode) => void; // 点击节点回调
  onSelect?: (node?: TreeNode['key']) => void; // 选中叶子节点回调
}
