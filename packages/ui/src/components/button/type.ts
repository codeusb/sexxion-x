import React from 'react';

export type ButtonType = 'default' | 'primary' | 'warn' | 'danger' | 'dark';

export type SizeType = 'small' | 'normal' | 'large';

export type ButtonHTMLType = 'submit' | 'reset' | 'button';

export interface BaseButtonProps {
  /**
   * @description Button子元素
   */
  children?: React.ReactNode;
  /**
   * @description 样式类名
   */
  className?: string;
  /**
   * @description 内联/行内样式
   */
  style?: React.CSSProperties;
  /**
   * @description Button类型
   * @default 'primary'
   */
  type?: ButtonType;
  /**
   * @description Button尺寸
   * @default 'normal'
   */
  size?: SizeType;
  /**
   * @description Button圆角
   * @default false
   */
  round?: boolean;
  /**
   * @description Button禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description Button类型
   * @default 'button'
   */
  htmlType?: ButtonHTMLType;
}

/**
 * @description 按钮类型:自定义类型 + button原生类型(忽略type)
 */
export type ButtonProps = Partial<
  BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
>;
