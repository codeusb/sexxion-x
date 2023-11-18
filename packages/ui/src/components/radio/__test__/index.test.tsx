import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
// import { screen } from '@testing-library/react';
import { Radio } from '..';

describe('Radio', () => {
  it('点击选中单选框', () => {
    const component = render(<Radio>单选框</Radio>);
    expect(component.queryByText('单选框')).toBeInTheDocument();

    fireEvent.click(component.container.firstElementChild!);
    const Input: HTMLInputElement = component.container.querySelector('input')!;
    expect(Input.checked).toBe(true);
  });
  it('默认选中单选框', () => {
    const component = render(<Radio checked>已选中</Radio>);
    expect(component.queryByText('已选中')).toBeInTheDocument();

    const Input: HTMLInputElement = component.container.querySelector('input')!;
    expect(Input.checked).toBe(true);
  });
  it('触发onChange', () => {
    const mockFn = jest.fn();
    const component = render(<Radio onChange={mockFn}>选中</Radio>);
    fireEvent.click(component.container.firstElementChild!);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toBeCalledTimes(1); //
  });
  it('disabled', () => {
    const mockFn = jest.fn();
    const component = render(
      <Radio disabled onChange={mockFn}>
        选中
      </Radio>,
    );
    fireEvent.click(component.container.firstElementChild!);
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(mockFn).toBeCalledTimes(0); //
  });
});

describe('Radio.Group', () => {
  it('单选组合', () => {
    const mockFn = jest.fn();
    const component = render(
      <Radio.Group value={'a'} onChange={mockFn}>
        <Radio value={'a'}>A</Radio>
        <Radio value={'b'} disabled>
          B
        </Radio>
        <Radio value={'c'}>C</Radio>
        <Radio value={'d'}>D</Radio>
      </Radio.Group>,
    );
    const Spans: NodeListOf<HTMLSpanElement> =
      component.container.querySelectorAll('span');
    const Inputs: NodeListOf<HTMLInputElement> =
      component.container.querySelectorAll('input');
    const RadioList = Array.from(Spans);
    const RadioInputList = Array.from(Inputs);

    expect(RadioInputList[0].checked).toBe(true); //默认选中a

    // const RadioStyle = getComputedStyle(RadioList[1])
    // console.log(RadioStyle);
    // screen.debug();
    expect(RadioList[1]).toEqual(component.getByText('B')); //正确渲染4个radio

    // screen.debug(RadioInputList[1]);
    expect(RadioInputList[1]).toHaveClass('sex-radio-disabled'); //禁用

    fireEvent.click(component.getByText('C'));
    expect(RadioInputList[2].checked).toBe(true);
    expect(mockFn).toHaveBeenCalledTimes(1);

    fireEvent.click(component.getByText('B'));
    expect(RadioInputList[1].checked).toBe(false); //禁用情况下，input的checked不会变true
    expect(mockFn).toHaveBeenCalledTimes(1); //模拟函数被掉调用了几次（这里是1的原因是上面选c调用过一次了）
  });
});
