import React from 'react';

export type SizeProps = 'large' | 'medium' | 'small' | number;

export interface SpaceBaseProps {
  children?: React.ReactNode;
  className?: string | string[];
  style?: React.CSSProperties;
  /**
   * @description 间隔排列方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 间隔大小,[水平,垂直]
   * @default 'medium'
   */
  size?: SizeProps | [SizeProps, SizeProps];
  /**
   * @description 自动换行
   * @default 'true'
   */
  wrap?: boolean;
  /**
   * @description 间隔对齐方式
   */
  align?: 'start' | 'center' | 'end' | 'baseline';
  /**
   * @description 间隔分隔符
   */
  split?: React.ReactNode;
}
