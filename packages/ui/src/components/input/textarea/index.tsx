import classNames from 'classnames';
import { CSSProperties, forwardRef, useEffect, useState } from 'react';
import { useDefaultProps } from '@sexxion-x/shared';
import { isString, isUndefined } from '@sexxion-x/shared';
import '../style/textarea.less';
import { TextAreaProps } from './type';

const defaultProps: TextAreaProps = {
  allowClear: true,
};

export function formatValue(value: string | null | undefined) {
  const str =
    value !== null && !isUndefined(value) && !isString(value)
      ? String(value)
      : value || '';
  return str;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (originalProps, ref) => {
    const props = useDefaultProps(originalProps, defaultProps);
    const {
      className,
      style,
      value,
      allowClear,
      disabled,
      showTextNum,
      onChange,
      onPressEnter,
      ...rest
    } = props;

    const [iptValue, setIptValue] = useState<any>(formatValue(value)); //输入框内容
    const [mouseEnter, setMouseEnter] = useState<boolean>(false); //鼠标移入移出状态
    const [focus, setFocus] = useState<boolean>(false); //输入框聚焦

    useEffect(() => {
      if (value !== undefined) {
        setIptValue(value);
      }
    }, [value]);

    const changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = e.target.value;
      setIptValue(val);
      return onChange && onChange(val, e);
    };

    const classes = classNames('sex-textarea-box', className, {
      'sex-textarea-disabled': disabled,
      'sex-textarea-box-focus': focus,
    });

    const innerClass = classNames('textarea', {});

    const textAreaStyle: CSSProperties & { resize?: string } = {};
    if (disabled) {
      textAreaStyle.resize = 'none';
    }

    return (
      <>
        <div
          className={classes}
          style={style}
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        >
          <textarea
            className={innerClass}
            ref={ref}
            {...rest}
            value={iptValue}
            style={{ ...textAreaStyle }}
            rows={2}
            onChange={changeTextArea}
            onKeyDown={(e) => onPressEnter && onPressEnter(e)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            disabled={disabled}
          />
          {allowClear && !disabled && (
            <div
              className="textarea-clear"
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
                className={'textarea-clear-icon'}
                style={{
                  visibility: iptValue && mouseEnter ? 'visible' : 'hidden',
                }}
              >
                <path d="M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"></path>
              </svg>
            </div>
          )}
          {showTextNum && (
            <span className="textarea-showtextnum">
              {iptValue ? iptValue.length : ''}
            </span>
          )}
        </div>
      </>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
