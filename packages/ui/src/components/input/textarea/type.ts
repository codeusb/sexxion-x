import React from 'react';

export interface BaseTextAreaProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 文本框内容
   * @description string
   */
  value?: string;
  /**
   * @description 允许点击清除删除内容
   * @default true
   */
  allowClear?: boolean;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否右下角显示字数
   * @default false
   */
  showTextNum: boolean;
  /**
   * @description 文本框内容变化时的回调
   */
  onChange?: (val: any, e?: any) => void;
  /**
   * @description 按下回车的回调
   */
  onPressEnter?: (e?: any) => void;
}

export type TextAreaProps = Partial<
  BaseTextAreaProps &
    Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      'onChange' | 'prefix' | 'className' | 'size' | 'maxLength'
    >
>;
