import classNames from 'classnames';
import { forwardRef, useEffect, useMemo, useState } from 'react';
// import useMergeValue from '@sexxion-x/shared';
import { useDefaultProps, isString, isUndefined } from '@sexxion-x/shared';
import './style/index.less';
import TextArea from './textarea';
import { InputProps } from './type';

const defaultProps: InputProps = {
  allowClear: true,
  size: 'normal',
};

export function formatValue(value: any) {
  const str =
    value !== null && !isUndefined(value) && !isString(value)
      ? String(value)
      : value || '';
  return str;
}

const Input = forwardRef<HTMLInputElement, InputProps>((originalProps, ref) => {
  const props = useDefaultProps(originalProps, defaultProps);
  const {
    className,
    style,
    value,
    allowClear,
    disabled,
    prefix,
    suffix,
    size,
    type,
    showTogglePwd,
    onChange,
    onPressEnter,
    ...rest
  } = props;

  // const [iptValue, setIptValue] = useMergeValue('', {
  //   defaultValue:
  //     'defaultValue' in props ? formatValue(props.defaultValue) : undefined,
  //   value: 'value' in props ? formatValue(props.value) : undefined,
  // });

  const [iptValue, setIptValue] = useState<string>(formatValue(value)); //输入框内容
  const [mouseEnter, setMouseEnter] = useState<boolean>(false); //鼠标移入移出状态
  const [focus, setFocus] = useState<boolean>(false); //输入框聚焦状态
  const [pwdStatus, setPwdStatus] = useState<boolean>(false); //密码框/输入框状态

  useEffect(() => {
    if (value !== undefined) {
      setIptValue(value);
    }
  }, [value]);

  const changeIpt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setIptValue(val);
    return onChange && onChange(val, e);
  };

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      return onPressEnter && onPressEnter(e);
    }
  };

  const classes = classNames('sex-input-box', className, {
    'sex-input-disabled': disabled,
    'sex-input-box-focus': focus,
  });

  const innerClass = classNames('ipt', {
    [`sex-input-${size}`]: size,
  });

  const iptType = useMemo(() => {
    if (showTogglePwd && type === 'password') {
      return pwdStatus ? 'text' : 'password';
    }
    return type || 'text';
  }, [type, showTogglePwd, pwdStatus]);

  return (
    <>
      <div
        className={classes}
        style={style}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        {prefix && <div className="sex-input-prefix">{prefix}</div>}
        <input
          className={innerClass}
          ref={ref}
          {...rest}
          value={iptValue}
          onChange={changeIpt}
          onKeyDown={(e) => pressEnter(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type={iptType}
          disabled={disabled}
        />
        {(type === 'password' && showTogglePwd && (
          <div
            className="ipt-pwd"
            onClick={() => setPwdStatus(!pwdStatus)}
            style={{
              visibility: iptValue && mouseEnter ? 'visible' : 'hidden',
            }}
          />
        )) ||
          (allowClear && !disabled && (
            <div
              className="ipt-clear"
              onClick={(e) => {
                e.stopPropagation();
                setIptValue('');
                return onChange && onChange('');
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 48 48"
                aria-hidden="true"
                focusable="false"
                className={'ipt-clear-icon'}
                style={{
                  visibility: iptValue && mouseEnter ? 'visible' : 'hidden',
                }}
              >
                <path d="M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"></path>
              </svg>
            </div>
          ))}
        {suffix && <div className="sex-input-suffix">{suffix}</div>}
      </div>
    </>
  );
});

// type InputRefType = ForwardRefExoticComponent<InputProps & React.MutableRefObject<any>> & {
//   TextArea: typeof TextArea;
// };

// const forwardRefInput = forwardRef(Input) as InputRefType;

const InputComponent = Input as typeof Input & {
  TextArea: typeof TextArea;
};

InputComponent.displayName = 'Input';

InputComponent.TextArea = TextArea;

export default InputComponent;
