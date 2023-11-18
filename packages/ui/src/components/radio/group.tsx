import classNames from 'classnames';
import { createContext, useState } from 'react';
import { useDefaultProps, isArray, isObject } from '@sexxion-x/shared';
import Radio from './radio';
import './style/index.less';
import { RadioGroupContextProps, RadioGroupProps } from './type';

const defaultContextValue: RadioGroupContextProps = {};

export const RadioGroupContext =
  createContext<RadioGroupContextProps>(defaultContextValue);

const defaultProps: RadioGroupProps = {
  direction: 'vertical',
};

const RadioGroup = (originalProps: RadioGroupProps) => {
  const props = useDefaultProps(originalProps, defaultProps);
  const {
    style,
    className,
    name,
    children,
    options,
    disabled,
    onChange,
    direction,
  } = props;
  const [value, setValue] = useState(props.value || ''); //选中值

  const classes = classNames('sex-radio-group', className, {
    [`sex-radio-group-direction-vertical`]: direction === 'horizontal',
  });

  const onChangeValue = (v: any, event: any) => {
    if (v !== value) {
      setValue(v);
      return onChange && onChange(v, event);
    }
  };

  const contentProps = {
    name,
    value,
    disabled,
    onChangeValue,
    group: true,
  };

  return (
    <RadioGroupContext.Provider value={contentProps}>
      <div className={classes} style={style} role="radiogroup">
        {options && isArray(options) ? (
          options.map((option, index) => {
            if (isObject(option)) {
              return (
                <Radio
                  key={option.value}
                  value={option.value}
                  disabled={disabled || option.disabled}
                >
                  {option.label}
                </Radio>
              );
            }
            return (
              <Radio key={index} value={option} disabled={disabled}>
                {option}
              </Radio>
            );
          })
        ) : (
          <>{children}</>
        )}
      </div>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
