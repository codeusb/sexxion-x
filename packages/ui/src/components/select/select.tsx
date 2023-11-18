import classNames from 'classnames';
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ResizeObserver from 'resize-observer-polyfill';
import { useDefaultProps } from '@sexxion-x/shared';
import './style/animation.less';
import './style/index.less';
import type { OptionItem, Options, SelectProps } from './type';

const paginationDefaultProps: SelectProps = {
  mode: 'single',
  direction: 'down',
  options: [],
};

const Select = forwardRef<HTMLDivElement, SelectProps>((originalProps, ref) => {
  const props = useDefaultProps(originalProps, paginationDefaultProps);

  const {
    style,
    className,
    defaultOpen,
    open,
    value,
    options,
    mode,
    allowClear,
    placeholder,
    disabled,
    direction,
    onPopupScroll,
    onChange,
  } = props;

  const initValue = useMemo(() => {
    return mode === 'single' ? '' : [];
  }, []);

  const initLabel = useMemo(() => {
    if (mode === 'single') {
      const initSingle = options
        .filter((item: Options) => item.value === value)
        .map((item: Options) => item.label);
      return initSingle.join('') ?? '';
    } else if (mode === 'multiple') {
      const initMultiple = options
        .filter(
          (item: Options) =>
            (value as (string | number)[])?.includes(item.value),
        )
        .map((item: Options) => item.label);
      return initMultiple ?? [];
    }
  }, []);

  const [selectLabel, setSelectLabel] = useState<OptionItem>(initLabel!); //选项文本
  const [selectValue, setSelectValue] = useState<OptionItem>(
    value ?? initValue,
  ); //选项值
  const [visible, setVisible] = useState<boolean>(defaultOpen!); //是否展开下拉框
  const [mouseIn, setMouseIn] = useState(false); //鼠标移入移出
  const [divHeight, setDivHeight] = useState<number>(0); //选择器高度
  const divRef = useRef<HTMLDivElement>(null); //选择器

  const classTop = classNames('sex-select-top', className, {
    'sex-select-disabled': disabled,
  });

  //选中条目
  const changeOption = (val: Options) => {
    if (val.disabled) {
      return;
    }
    setVisible(false);
    if (mode === 'single') {
      setSelectLabel(val.label);
      setSelectValue(val.value);
      return onChange && onChange(val.value, val);
    } else {
      if ((selectValue as any[]).includes(val.value)) {
        const filterLabel = (selectLabel as any[]).filter(
          (item) => item !== val.label,
        );
        const filterValue = (selectValue as any[]).filter(
          (item) => item !== val.value,
        );

        setSelectLabel(filterLabel);
        setSelectValue(filterValue);
        return onChange && onChange(filterValue, val);
      } else {
        const newLabel = [...(selectLabel as any[]), val.label];
        const newValue = [...(selectValue as any[]), val.value];

        setSelectLabel(newLabel);
        setSelectValue(newValue);
        return onChange && onChange(newValue, val);
      }
    }
  };
  //监听选择器height，实时更新下拉框的相对距离
  useEffect(() => {
    const calculateStyles = () => {
      if (divRef && divRef.current) {
        const computedStyle = getComputedStyle(divRef.current);
        const height = parseInt(computedStyle.getPropertyValue('height'));
        setDivHeight(height);
      }
    };

    calculateStyles();

    const observer = new ResizeObserver(() => {
      calculateStyles();
    });

    if (divRef && divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  //清除选中
  const clearOption = () => {
    if (mode === 'single') {
      setSelectLabel('');
      setSelectValue('');
    } else {
      setSelectLabel([]);
      setSelectValue([]);
    }
  };

  return (
    <div className="sex-select" ref={ref}>
      <div
        className={classTop}
        style={style}
        tabIndex={0}
        ref={divRef}
        onClick={() => setVisible(!visible)}
        onBlur={() => setVisible(false)}
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}
      >
        {placeholder && !selectValue && (
          <span className="sex-select-placeholder">{placeholder}</span>
        )}
        {mode === 'single' ? (
          <span>{selectLabel}</span>
        ) : (
          (selectLabel as any[])?.map(
            (item: string | number, index: number) => (
              <span className="sex-select-multiple-item" key={index}>
                {item}
              </span>
            ),
          )
        )}
      </div>
      {allowClear && selectValue ? (
        <>
          <div
            className="sex-select-icon-box"
            onClick={(e) => {
              e.stopPropagation();
              clearOption();
            }}
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
              className="sex-select-clear-icon"
              style={{
                visibility: mouseIn ? 'visible' : 'hidden',
              }}
            >
              <path d="M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"></path>
            </svg>
          </div>
        </>
      ) : (
        <div
          className="sex-select-icon-box"
          style={{
            transform: `rotate(${visible ? '180deg' : '0deg'})`,
            display: `${disabled && 'none'}`,
          }}
          onClick={() => setVisible(!visible)}
        >
          <svg
            viewBox="0 0 48 48"
            focusable="false"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            aria-hidden="true"
            className="sex-select-icon"
          >
            <path d="M39.6 17.443 24.043 33 8.487 17.443"></path>
          </svg>
        </div>
      )}
      <CSSTransition
        in={!disabled && (open || visible)}
        timeout={300}
        unmountOnExit
        classNames="opt"
      >
        <div
          className="sex-select-select-options"
          style={
            direction === 'down'
              ? { top: `${divHeight + 4}px` }
              : { bottom: `${divHeight + 4}px` }
          }
          onScroll={(e) => {
            return onPopupScroll && onPopupScroll(e);
          }}
        >
          {options.map((item: Options, index: number) => (
            <div
              key={index}
              className={
                mode === 'single'
                  ? item.value === selectValue
                    ? `select-option`
                    : `option`
                  : (selectValue as any[]).includes(item.value)
                  ? `select-option`
                  : `option`
              }
              onClick={() => changeOption(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
