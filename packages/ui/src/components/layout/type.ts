import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LayoutBaseProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  style?: CSSProperties;
  className?: string | string[];
  /**
   * @description 是否有Sider组件
   * @default false
   */
  hasSider?: boolean;
}

export interface HeaderBaseProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  style?: CSSProperties;
  className?: string | string[];
}

export interface ContentProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  style?: CSSProperties;
  className?: string | string[];
}

export interface FooterProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'className' | 'ref'
  > {
  style?: CSSProperties;
  className?: string | string[];
}

export interface SilderBaseProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string | string[];
}
