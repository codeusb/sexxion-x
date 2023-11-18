import { ChangeEvent, CSSProperties, ReactNode } from 'react';

interface OptionType {
  label: ReactNode;
  value: any;
  disabled?: boolean;
}

type OptionsType = string[] | number[] | OptionType[];

interface RadioProps<T = any> {
  style?: CSSProperties;
  className?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 选中的值,控件的 value(单独使用无效)
   */
  value?: T;
  /**
   * @description 是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 选项值变化时的回调函数
   */
  onChange?: (value?: boolean, event?: ChangeEvent) => void;
}

interface RadioGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @description 方向
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 配置单选元素
   */
  options?: OptionsType;
  /**
   * @description 选中的值
   */
  value?: string | number | OptionType;
  /**
   * @description 是否全部禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description HTML 元素原生属性
   */
  name?: string;
  /**
   * @description 选项变化时的回调函数
   */
  onChange?: (value: string | number | OptionType, event: ChangeEvent) => void;
}

interface RadioGroupContextProps {
  value?: string | number | OptionType; // 选中的值
  disabled?: boolean; // 是否全部禁用
  name?: RadioGroupProps['name']; // HTML 元素原生属性
  group?: boolean;
  onChangeValue?: (value: any, event: ChangeEvent) => void; //选项变化时的回调函数
}

type RadioBaseProps = Partial<
  RadioProps &
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'className' | 'onChange'>
>;

export type {
  OptionType,
  OptionsType,
  RadioBaseProps,
  RadioGroupProps,
  RadioGroupContextProps,
};
