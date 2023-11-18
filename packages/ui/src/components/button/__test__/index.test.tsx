import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../index';

describe('Button', () => {
  it('渲染Button内文字', () => {
    const buttonText = '按钮文字';
    const component = render(<Button type="primary">{buttonText}</Button>);

    const buttonElement = component.getByRole('button');
    const buttonScreen = screen.getByRole('button');
    const button = component.container.querySelector('.btn');
    const buttonQuerySelector = document.querySelector('.btn');
    const buttonByText = screen.getByText('按钮文字');
    const buttonRex = component.getByText(/按钮.*/i);

    expect(buttonElement.innerHTML).toBe(buttonText);
    expect(buttonScreen).toBeInTheDocument();
    expect(button!).toHaveClass('sex-btn-primary');
    expect(buttonQuerySelector!.innerHTML).toBe(buttonText);
    expect(buttonByText).toBeInTheDocument();
    expect(buttonRex).toHaveClass('sex-btn-primary');
    // screen.debug();
  });
  it('触发点击事件', () => {
    const handleClick = jest.fn();
    const component = render(<Button onClick={handleClick}>点击按钮</Button>);

    const buttonElement = component.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('正确渲染', () => {
    expect(() => render(<Button>Follow</Button>)).not.toThrow();
  });
});
