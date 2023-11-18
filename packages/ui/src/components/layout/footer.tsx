import classNames from 'classnames';
import React from 'react';
import './style/index.less';
import { FooterProps } from './type';

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ children, style, className, ...rest }, ref) => {
    const classes = classNames('sex-footer', className);

    return (
      <footer className={classes} {...rest} ref={ref} style={style}>
        {children}
      </footer>
    );
  },
);

Footer.displayName = 'Footer';

export default Footer;
