import classNames from 'classnames';
import React from 'react';
import './style/index.less';
import { HeaderBaseProps } from './type';

const Content = React.forwardRef<HTMLElement, HeaderBaseProps>(
  ({ children, style, className, ...rest }, ref) => {
    const classes = classNames('sex-content', className);

    return (
      <main ref={ref} {...rest} className={classes} style={style}>
        {children}
      </main>
    );
  },
);

Content.displayName = 'Content';

export default Content;
