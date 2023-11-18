import { CSSProperties } from 'react';

interface Options {
  label: string | number;
  value: string | number;
  disabled?: boolean;
}

type OptionItem = string | string[] | number | number[] | (string | number)[];

type Multiple = string[] | number[];

interface SelectProps {
  style?: CSSProperties;
  className?: string;
  /**
   * @description 是否默认展开下拉框
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @description 是否展开下拉框
   * @default false
   */
  open?: boolean;
  /**
   * @description 选中的条目
   */
  value?: OptionItem;
  /**
   * @description 选择数据数组
   * @default []
   */
  options: Options[];
  /**
   * @description 选择模式
   * @default 'single'
   */
  mode?: 'single' | 'multiple';
  /**
   * @description 是否支持清除
   * @default false
   */
  allowClear?: boolean;
  /**
   * @description 提示
   */
  placeholder?: string;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 下拉框方向
   * @default 'down'
   */
  direction?: 'up' | 'down';
  /**
   * @description 下拉列表滚动时的回调
   */
  onPopupScroll?: (e?: any) => void;
  /**
   * @description 选中option时的回调
   */
  onChange?: (value: OptionItem, option: Options) => void;
}

export type { SelectProps, Options, OptionItem, Multiple };
