import classNames from 'classnames';
import { forwardRef } from 'react';
import { useDefaultProps } from '@sexxion-x/shared';
import './style/index.less';
import { DividerBaseProps } from './type';

const defaultProps: DividerBaseProps = {
  layout: 'horizontal',
  orientation: 'center',
};

const Divider = forwardRef<HTMLDivElement, DividerBaseProps>(
  (originalProps, ref) => {
    const props = useDefaultProps(originalProps, defaultProps);
    const { children, className, style, layout, orientation } = props;

    const classes = classNames(`sex-divider-${layout}`, className, {
      [`sex-divider-with-text-center`]: children,
      [`sex-divider-with-text-${orientation}`]: children && orientation,
    });

    const spanClass = classNames({
      ['sex-divider-text']: children && orientation,
    });

    return (
      <div ref={ref} className={classes} style={style}>
        {layout === 'horizontal' && (
          <span className={spanClass}>{children}</span>
        )}
      </div>
    );
  },
);

Divider.displayName = 'Divider';

export default Divider;
