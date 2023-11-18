import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Divider } from '../index';

describe('Divider', () => {
  it('分割线左侧文字显示', () => {
    const { container, getByText } = render(
      <Divider orientation="left">left</Divider>,
    );
    const text = screen.getByText(/left/i);
    const textRender = getByText(/left/i);
    expect(text).toBeInTheDocument();
    expect(textRender).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('sex-divider-with-text-left');
    // screen.debug();
    // debug();
  });
});
