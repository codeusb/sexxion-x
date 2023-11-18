import React from 'react';

export interface BaseInputProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * @description 输入框内容
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
   * @description 输入框前缀内容
   */
  prefix?: React.ReactNode;
  /**
   * @description 输入框后缀内容
   */
  suffix?: React.ReactNode;
  /**
   * @description 输入框尺寸
   * @default 'normal'
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * @description 输入框类型
   * @default 'text'
   */
  type?: 'password' | 'text' | 'number';
  /**
   * @description 是否显示密码是否可见
   * @default false
   */
  showTogglePwd: boolean;
  /**
   * @description 输入框内容变化时的回调
   */
  onChange?: (value?: string, e?: any) => void;
  /**
   * @description 按下回车的回调
   */
  onPressEnter?: (e?: any) => void;
}

export type InputProps = Partial<
  BaseInputProps &
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'onChange' | 'prefix' | 'size'
    >
>;
