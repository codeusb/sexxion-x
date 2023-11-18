import React from 'react';

export interface DividerBaseProps {
  children?: React.ReactNode;
  className?: string | string[];
  style?: React.CSSProperties;
  /**
   * @description 分割线排列方向
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * @description 文字排列方向
   * @default 'center'
   */
  orientation?: 'left' | 'center' | 'right';
}
