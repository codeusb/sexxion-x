import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Pagination } from '../index';

describe('Pagination', () => {
  it('基本测试', () => {
    const component = render(<Pagination total={50} />);
    const paginationList = component.container.querySelectorAll(
      '.sex-pagination-list',
    );
    expect(paginationList.length).toBe(1);
    const paginationListItem = component.container.querySelectorAll(
      '.sex-pagination-list-item',
    );
    expect(paginationListItem.length).toBe(5);
  });
  it('Pagination 正确的被卸载', () => {
    const component = render(<Pagination total={50} />);
    expect(() => {
      component.unmount();
    }).not.toThrow();
  });
  it('跳转 + change事件 + current属性', () => {
    const component = render(<Pagination current={2} showJumper total={50} />);
    const domCur = component.getByText('2');
    expect(domCur).toHaveClass('sex-pagination-active');
    const doClick = component.getByText('3');
    fireEvent.click(doClick);
    expect(doClick).toHaveClass('sex-pagination-active');
  });
});
