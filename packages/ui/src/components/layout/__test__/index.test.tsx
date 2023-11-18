import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React, { useRef } from 'react';
import { Layout } from '../index';

const { Header, Content, Footer, Sider } = Layout;

const TestLayout = () => {
  const ref = useRef(null);
  return <Layout ref={ref} />;
};

describe('Layout', () => {
  it('测试组件是否正确地渲染子组件', () => {
    const { getByText } = render(
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>,
    );
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Footer')).toBeInTheDocument();
  });
  it('是否正确应用了 className 和 style 属性', () => {
    const { container } = render(
      <Layout className="custom-layout" style={{ color: 'red' }} />,
    );

    expect(container.firstChild).toHaveClass('custom-layout');
    expect(container.firstChild).toHaveStyle('color: red');
  });
  it('当 hasSider 属性为 true 时是否正确应用了样式类名,以及是否渲染了子组件', () => {
    const { container, getByText } = render(
      <Layout hasSider>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>,
    );
    expect(getByText('Sider')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('sex-layout-has-sider');
  });
  it('是否正确地将 ref 传递给组件', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Layout ref={ref} />);

    expect(ref.current).toBeInTheDocument();
  });
  it('是否正确地用useRef 将 ref 传递给组件', () => {
    const fakeRef = { current: null };
    jest.spyOn(React, 'useRef').mockReturnValueOnce(fakeRef);

    render(<TestLayout />);

    expect(fakeRef.current).toBeInstanceOf(HTMLElement);
  });
});
