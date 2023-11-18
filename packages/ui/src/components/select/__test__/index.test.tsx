import '@testing-library/jest-dom';
import { act, fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import { Select } from '..';
import { sleep } from '@sexxion-x/shared';

describe('Select', () => {
  const top = '.sex-select-top';
  const op = '.sex-select-select-options';
  const options = [
    {
      label: 'Apple',
      value: '01',
    },
    {
      label: 'Banana',
      value: '02',
    },
    {
      label: 'Orange',
      value: '03',
    },
  ];

  test('单选测试', async () => {
    const SingleSelect = () => {
      const [value, setValue] = useState('01');
      const handleChange = (v: any) => {
        setValue(v);
      };
      return <Select options={options} onChange={handleChange} value={value} />;
    };
    const component = render(<SingleSelect />);
    //未点击时，下拉框不打开
    expect(document.querySelector(op)).toBeNull();
    fireEvent.click(document.querySelector(top)!);
    await act(async () => {
      await sleep(300);
    });
    //点击后，下拉框打开
    expect(document.querySelector(op)).not.toBeNull();
    expect(document.querySelector(op)).toHaveTextContent('Apple');
    expect(document.querySelector(op)).toHaveTextContent('Banana');
    expect(document.querySelector(op)).toHaveTextContent('Orange');
    //选中某一选项后，下拉框关闭
    fireEvent.click(component.getByText('Banana')); //点击下拉框div的Banana
    await act(async () => {
      await sleep(300);
    });
    expect(component.getByText('Banana')).toBeInTheDocument(); //查询选择器span的Banana
    expect(document.querySelector(op)).toBeNull();
    component.unmount();
  });

  test('多选测试', async () => {
    const mockFn = jest.fn();
    const MultipleSelect = () => {
      return <Select mode="multiple" options={options} onChange={mockFn} />;
    };

    const component = render(<MultipleSelect />);
    //未点击时，下拉框不打开
    expect(document.querySelector(op)).toBeNull();
    fireEvent.click(document.querySelector(top)!);
    await act(async () => {
      await sleep(300);
    });
    //点击后，下拉框打开
    expect(document.querySelector(op)).not.toBeNull();
    expect(document.querySelector(op)).toHaveTextContent('Apple');
    expect(document.querySelector(op)).toHaveTextContent('Banana');
    expect(document.querySelector(op)).toHaveTextContent('Orange');

    //选中某一选项后，下拉框关闭
    fireEvent.click(component.getByText('Banana')); //点击下拉框div的Banana
    await act(async () => {
      await sleep(300);
    });
    expect(component.getByText('Banana')).toBeInTheDocument(); //查询选择器span的Banana
    expect(document.querySelector(op)).toBeNull();

    fireEvent.click(document.querySelector(top)!);
    await act(async () => {
      await sleep(300);
    });
    fireEvent.click(component.getByText('Apple')); //点击下拉框div的Apple
    await act(async () => {
      await sleep(300);
    });

    expect(component.getByText('Banana')).toBeInTheDocument(); //查询选择器span的Banana
    expect(component.getByText('Apple')).toBeInTheDocument(); //查询选择器span的Apple
    expect(document.querySelector(op)).toBeNull();

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toBeCalledTimes(2); //
    component.unmount();
  });
});
