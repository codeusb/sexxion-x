import classNames from 'classnames';
import React from 'react';
import './style/index.less';
import { SilderBaseProps } from './type';

const Sider = React.forwardRef<HTMLElement, SilderBaseProps>(
  ({ children, style, className, ...rest }, ref) => {
    const classes = classNames('sex-sider', className);

    return (
      <aside ref={ref} {...rest} className={classes} style={style}>
        {children}
      </aside>
    );
  },
);

Sider.displayName = 'Sider';

export default Sider;
