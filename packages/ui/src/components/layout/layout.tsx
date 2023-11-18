import classNames from 'classnames';
import { forwardRef } from 'react';
import Content from './content';
import Footer from './footer';
import Header from './header';
import Sider from './sider';
import './style/index.less';
import { LayoutBaseProps } from './type';

const Layout = forwardRef<HTMLDivElement, LayoutBaseProps>(
  (originalProps: LayoutBaseProps, ref) => {
    const { style, className, children, hasSider, ...rest } = originalProps;

    const classes = classNames('sex-layout', className, {
      'sex-layout-has-sider': hasSider,
    });

    return (
      <section ref={ref} {...rest} className={classes} style={style}>
        {children}
      </section>
    );
  },
);

// export type LayoutRefType = ForwardRefExoticComponent<LayoutBaseProps & React.RefAttributes<any>> & {
//   Header: typeof Header;
//   Content: typeof Content;
//   Footer: typeof Footer;
//   Sider: typeof Sider;
// };

// const LayoutComponent = forwardRef(Layout) as LayoutRefType;

// const forwardRefLayout = forwardRef<unknown, LayoutBaseProps>(Layout);

const LayoutComponent = Layout as typeof Layout & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
  Sider: typeof Sider;
};

LayoutComponent.displayName = 'Layout';
LayoutComponent.Header = Header;
LayoutComponent.Content = Content;
LayoutComponent.Footer = Footer;
LayoutComponent.Sider = Sider;

export default LayoutComponent;
