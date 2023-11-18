import classNames from 'classnames';
import { createContext, forwardRef, Fragment, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDefaultProps } from '@sexxion-x/shared';
import MenuItem from './item';
import './styles/animation.less';
import './styles/index.less';
import MenuSub from './sub-menu';
import { ItemType, MenuBaseProps } from './types';

const defaultProps: MenuBaseProps = {
  mode: 'horizontal',
};

type MenuContextType = {
  active?: string;
  doSelect?: (key: any, item: any, e: any) => void;
};

const defaultContextValue: MenuContextType = {};

export const MenuContext = createContext<MenuContextType>(defaultContextValue);

const Menu = forwardRef<HTMLDivElement, MenuBaseProps>((originalProps, ref) => {
  const props = useDefaultProps(originalProps, defaultProps);
  const {
    children,
    className,
    style,
    activeKey,
    items,
    mode,
    defaultCollapsedList,
    onSelect,
  } = props;
  const [active, setActive] = useState<string>(activeKey || '');
  const [collapsedList, setCollapsedList] = useState<string[]>(
    defaultCollapsedList || [],
  ); // 折叠父级数组
  const classes = classNames('sex-menu', className, {
    ['sex-menu-vertical']: mode === 'vertical',
  });

  const doSelect = (key: any, item: any, e: any) => {
    if (item.disabled) {
      return;
    }
    if (item.childItems) {
      if (collapsedList.includes(key)) {
        const tmp = collapsedList.filter((item: string) => item !== key);
        setCollapsedList(tmp);
      } else {
        setCollapsedList((pre) => [...pre, key]);
      }
    }
    setActive(key);
    if (onSelect) {
      onSelect(key, item, e);
    }
  };

  const contextProps = {
    active,
    doSelect,
  };

  const renderChildOptions = (childItem: any): JSX.Element | null => {
    if (childItem.childItems) {
      return childItem.childItems.map((item: any) => {
        return (
          <Fragment key={item.eventKey}>
            <CSSTransition
              in={collapsedList.includes(childItem.eventKey)}
              timeout={300}
              unmountOnExit
              classNames="menu"
            >
              {collapsedList.includes(childItem.eventKey) ? (
                <div>
                  <div
                    onClick={(e) => doSelect(item.eventKey, item, e)}
                    className={
                      item.disabled
                        ? 'sex-menu-disabled'
                        : active !== item.eventKey
                        ? 'sex-menu-item'
                        : 'sex-menu-active'
                    }
                  >
                    <span>{item.icon}</span> {item.label}
                  </div>
                  <div style={{ backgroundColor: '#f6f6f6' }}>
                    {item.childItems && renderChildOptions(item)}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </CSSTransition>
          </Fragment>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <MenuContext.Provider value={contextProps}>
      <div className={classes} ref={ref} style={style}>
        {items?.map((item: ItemType) => (
          <Fragment key={item.eventKey}>
            <div
              onClick={(e) => doSelect(item.eventKey, item, e)}
              className={
                item.disabled
                  ? 'sex-menu-disabled'
                  : active !== item.eventKey
                  ? 'sex-menu-item'
                  : 'sex-menu-active'
              }
            >
              <span>{item.icon}</span> {item.label}{' '}
              <span
                style={{ transform: `rotate(90deg)`, display: 'inline-block' }}
              >
                {item.childItems
                  ? collapsedList.includes(item.eventKey!)
                    ? '<'
                    : '>'
                  : ''}
              </span>
            </div>
            <div style={{ backgroundColor: '#f6f6f6' }}>
              {item.childItems && renderChildOptions(item)}
            </div>
          </Fragment>
        ))}
        {!items && <>{children}</>}
      </div>
    </MenuContext.Provider>
  );
});

const MenuComponent = Menu as typeof Menu & {
  Item: typeof MenuItem;
  Sub: typeof MenuSub;
};

MenuComponent.displayName = 'Menu';
MenuComponent.Item = MenuItem;
MenuComponent.Sub = MenuSub;

export default MenuComponent;
