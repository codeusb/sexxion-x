import { useMemo } from 'react';

/**
 * 默认值和传入值混合函数
 */

export const useDefaultProps = <T>(
  originalProps: T,
  defaultProps: Record<PropertyKey, any>,
): T => {
  return useMemo<T>(() => {
    const props: any = Object.assign({}, originalProps);
    Object.keys(defaultProps).forEach((key) => {
      if (props[key] === undefined) {
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
};
