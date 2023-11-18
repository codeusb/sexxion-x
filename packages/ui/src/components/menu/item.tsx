import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { useDefaultProps } from '@sexxion-x/shared';
import { MenuContext } from './menu';
import './styles/index.less';
import { MenuItemBaseProps } from './types';

const defaultProps: MenuItemBaseProps = {};

const MenuItem = (originalProps: MenuItemBaseProps) => {
  const props = useDefaultProps(originalProps, defaultProps);
  const { children, className, style, eventKey, disabled, icon, onSelect } =
    props;
  const context = useContext(MenuContext);
  const [itemActive, setItemActive] = useState<boolean>(false);

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
  return (
    <div
      onClick={(e) => doSelect(eventKey, e)}
      className={classes}
      style={style}
    >
      <span>{icon}</span> {children}
    </div>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
