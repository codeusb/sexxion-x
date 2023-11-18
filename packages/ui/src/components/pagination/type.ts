import React from 'react';

export interface PaginationBaseProps {
  style?: React.CSSProperties;
  className?: string | string[];
  /**
   * @description 当前页码(默认当前页数)
   * @default 1
   */
  current?: number;
  /**
   * @description 每页数据条数(暂时固定20)
   * @default 10
   */
  pageSize?: number;
  /**
   * @description 总数据条数
   */
  total?: number;
  /**
   * @description 是否可以快速跳转至某页
   * @default false
   */
  showJumper?: boolean;
  /**
   * @description 是否显示每页数据条数
   * @default false
   */
  showSizeChange?: boolean;
  /**
   * @description 是否精简模式
   * @default false
   */
  simple?: boolean;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否显示总数据条数
   */
  showTotal?: (total: number) => React.ReactNode;
  /**
   * @description 页码或pageSize改变的回调
   * @param page
   * @param pageSize
   */
  onChange?: (page?: number, pageSize?: number) => void;
}
