import classNames from 'classnames';
import { forwardRef } from 'react';
import { useDefaultProps } from '@sexxion-x/shared';
import { ButtonProps } from './type';
import './style/index.module.less';

const defaultProps: ButtonProps = {
  type: 'default',
  size: 'normal',
  htmlType: 'button',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (originalProps, ref) => {
    const props = useDefaultProps<ButtonProps>(originalProps, defaultProps);

    const {
      children,
      style,
      className,
      type,
      size,
      round,
      disabled,
      htmlType,
      ...rest
    } = props;

    const classes = classNames('btn', className, {
      [`sex-btn-${type}`]: type,
      [`sex-btn-${size}`]: size,
      'sex-btn-round': round,
      'sex-btn-disabled': disabled,
    });

    return (
      <button
        ref={ref}
        {...rest}
        style={style}
        className={classes}
        disabled={disabled}
        type={htmlType}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
