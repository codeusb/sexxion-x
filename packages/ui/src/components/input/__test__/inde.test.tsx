// import { fireEvent, render } from '../../../../tests/util';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '../index';
const { TextArea } = Input;

describe('Input', () => {
  it('触发onChang事件', () => {
    const changeFn = jest.fn();
    const component = render(<Input onChange={changeFn} />);
    const input = component.container.querySelectorAll('input')[0];
    // const input = component.find('input')[0];
    fireEvent.change(input, {
      target: {
        value: 'Hello',
      },
    });
    expect(changeFn.mock.calls.length).toBe(1);
    expect(changeFn).toHaveBeenCalledTimes(1);
    // component.debug()
  });
  it('测试prefix-placeholder-suffix-allowClear', () => {
    const component = render(
      <Input
        prefix={'前缀'}
        placeholder="提示"
        suffix={'后缀'}
        allowClear={false}
      />,
    );
    const prefixCon = screen.getByText('前缀');
    const suffix = screen.getByText('后缀');
    // screen.debug(prefixCon);
    expect(prefixCon).toBeInTheDocument();
    expect(suffix).toHaveClass('sex-input-suffix');
    expect(
      component.container.querySelector('#ipt-clear'),
    ).not.toBeInTheDocument();

    const input = component.container.querySelectorAll('input')[0];
    expect(input.placeholder).toBe('提示');
  });
});

describe('TextArea', () => {
  it('基本测试value', () => {
    render(<TextArea value={'初始默认值'} />);
    // screen.debug();
    const textarea = document.querySelector('.textarea');
    expect(textarea).toBeInTheDocument();
    expect(textarea!.innerHTML).toBe('初始默认值');
  });
});
