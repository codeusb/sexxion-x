import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Space } from '../index';

test('Space组件可以正确地渲染分隔符和子元素', () => {
  const splitText = '|'; // 传入的分隔符文本
  const children = [
    <span key="1">Child 1</span>,
    <span key="2">Child 2</span>,
    <span key="3">Child 3</span>,
  ];

  const { container, getByText } = render(
    <Space split={splitText}>{children}</Space>,
  );

  // 验证分隔符是否正确渲染
  const splitElements = container.querySelectorAll('.sex-space-split');
  expect(splitElements.length).toBe(children.length - 1); // 分隔符数量应该是子元素数量减一

  splitElements.forEach((element) => {
    expect(element.textContent).toBe(splitText); // 验证分隔符文本是否正确
  });

  // 验证子元素是否正确渲染
  children.forEach((child) => {
    const childElement = getByText(child.props.children);
    expect(childElement).toBeInTheDocument();
  });
});
