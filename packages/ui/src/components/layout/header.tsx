import classNames from 'classnames';
import React from 'react';
import './style/index.less';
import { HeaderBaseProps } from './type';

const Header = React.forwardRef<HTMLElement, HeaderBaseProps>(
  ({ children, style, className, ...rest }, ref) => {
    const classes = classNames('sex-header', className);

    return (
      <header ref={ref} {...rest} className={classes} style={style}>
        {children}
      </header>
    );
  },
);

Header.displayName = 'Header';

export default Header;
