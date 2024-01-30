import classNames from 'classnames';
import React, { forwardRef, Fragment, ReactElement } from 'react';
import { useDefaultProps, isNumber } from '@sexxion-x/shared';
import { SizeProps, SpaceBaseProps } from './type';
import './style/index.less';

const defaultProps: SpaceBaseProps = {
  direction: 'horizontal',
  size: 'medium',
  wrap: true,
};

const Space = forwardRef<HTMLDivElement, SpaceBaseProps>(
  (originalProps, ref) => {
    const props = useDefaultProps(originalProps, defaultProps);
    const { children, className, style, direction, size, wrap, align, split } =
      props;

    const childrenList = React.Children.toArray(children);

    const getSize = (size: SizeProps) => {
      if (isNumber(size)) {
        return size;
      }
      switch (size) {
        case 'small':
          return 8;
        case 'medium':
          return 16;
        case 'large':
          return 24;
        default:
          return 16;
      }
    };

    const getMarginSize = (size: SpaceBaseProps['size']) => {
      if (Array.isArray(size)) {
        const distanceX = getSize(size[0]);
        const distanceY = getSize(size[1]);
        if (direction === 'horizontal') {
          return {
            gap: `${distanceY}px ${distanceX}px`,
          };
        } else {
          return { gap: `${distanceY}px` };
        }
      }
      if (typeof size === 'string' || typeof size === 'number') {
        const distance = getSize(size);
        return { gap: `${distance}px` };
      }
    };

    const classes = classNames('sex-space', className, {
      [`sex-space-${direction}`]: direction,
      [`sex-space-align-${align}`]: align,
      [`sex-space-wrap`]: wrap,
    });

    return (
      <div
        ref={ref}
        className={classes}
        style={{ ...getMarginSize(size), ...style }}
      >
        {childrenList.map((child, index) => {
          const key = (child as ReactElement)?.key || index;
          const showSplit = split !== undefined && split !== null && index > 0;
          return (
            <Fragment key={key}>
              {showSplit && <div className="sex-space-split">{split}</div>}
              <div>{child}</div>
            </Fragment>
          );
        })}
      </div>
    );
  },
);

Space.displayName = 'Space';

export default Space;
