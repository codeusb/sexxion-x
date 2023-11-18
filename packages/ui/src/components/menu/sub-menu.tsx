import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDefaultProps } from '@sexxion-x/shared';
import { MenuContext } from './menu';
import './styles/index.less';
import { MenuItemBaseProps } from './types';

const defaultProps: MenuItemBaseProps = {};

const MenuSub = (originalProps: MenuItemBaseProps) => {
  const props = useDefaultProps(originalProps, defaultProps);
  const {
    children,
    className,
    style,
    eventKey,
    label,
    disabled,
    icon,
    onSelect,
  } = props;
  const context = useContext(MenuContext);
  const [itemActive, setItemActive] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const classes = classNames(
    'sex-menu-item',
    className,
    { [`sex-menu-active`]: itemActive },
    { [`sex-menu-disabled`]: disabled },
  );
  const doSelect = (key: any, e: any) => {
    if (disabled) {
      return;
    }
    setCollapsed(!collapsed);
    setItemActive(true);
    if (onSelect) {
      onSelect(key, e);
    }
    if (context.doSelect) {
      context.doSelect(key, '', e);
    }
  };
  useEffect(() => {
    if (context.active !== eventKey) {
      setItemActive(false);
    } else {
      setItemActive(true);
    }
  }, [context.active]);

  const renderChildren: any[] = [];
  React.Children.forEach(children, (child: any, index: number) => {
    if (child.type.displayName === 'MenuItem') {
      const childElement = React.cloneElement(
        child,
        { key: index },
        child.props.children,
      );
      renderChildren.push(childElement);
    }
  });

  return (
    <>
      <div
        onClick={(e) => doSelect(eventKey, e)}
        className={classes}
        style={style}
      >
        <span>{icon}</span> {label}
        <span style={{ transform: `rotate(90deg)`, display: 'inline-block' }}>
          {renderChildren ? (collapsed ? '<' : '>') : ''}
        </span>
      </div>
      <div style={{ backgroundColor: '#f6f6f6' }}>
        <CSSTransition
          in={collapsed}
          timeout={300}
          unmountOnExit
          classNames="menu"
        >
          <div>{collapsed && <>{renderChildren}</>}</div>
        </CSSTransition>
      </div>
    </>
  );
};
MenuSub.displayName = 'MenuSub';
export default MenuSub;
