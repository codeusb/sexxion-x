import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { useDefaultProps } from '@sexxion-x/shared';
import RadioGroup, { RadioGroupContext } from './group';
import './style/index.less';
import { RadioBaseProps } from './type';

const Radio = (originalProps: RadioBaseProps) => {
  const props = useDefaultProps(originalProps, {});
  const context = useContext(RadioGroupContext);
  const mergeProps = { ...props };

  if (context.group) {
    mergeProps.checked = context.value === props.value;
    mergeProps.disabled = !!(context.disabled || props.disabled);
  }

  const {
    style,
    className,
    children,
    value,
    checked,
    disabled,
    onChange,
    ...rest
  } = mergeProps;

  const [inChecked, setInChecked] = useState<boolean>(checked || false);

  const classes = classNames('sex-radio-label', className, {
    [`sex-radio-disabled`]: disabled,
  });

  const classIpt = classNames('sex-radio-input', className, {
    [`sex-radio-disabled`]: disabled,
  });

  const handleChange = (e: any) => {
    if (disabled) {
      return;
    }
    if (context.group) {
      if (context.onChangeValue) {
        context.onChangeValue(value, e);
      } //('checked' in props) && !props.checked[除了显式指定checked={false}这一情况]
    } else if (!('checked' in props) && !checked) {
      setInChecked(true);
    }
    if (onChange && !checked) {
      onChange(true, e);
    }
  };

  useEffect(() => {
    if (context.group) {
      setInChecked(checked!);
    }
  }, [checked]);

  return (
    <>
      <label className={classes} style={style} {...rest}>
        <input
          type="radio"
          {...(context.name ? { name: context.name } : {})}
          value={value || ''}
          checked={inChecked}
          disabled={disabled}
          onChange={(e) => {
            e.persist();
            handleChange(e);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={classIpt}
        />
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {children}
        </span>
      </label>
    </>
  );
};

Radio.displayName = 'Radio';

Radio.Group = RadioGroup;

export default Radio;
