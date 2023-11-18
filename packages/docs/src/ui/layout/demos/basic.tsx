import React from 'react';
import { Divider, Layout } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const headStyle: React.CSSProperties = {
    backgroundColor: '#56b5f3',
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: '#fed72d',
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#9a67fc',
  };
  return (
    <>
      <Layout>
        <Header style={headStyle}>header</Header>
        <Content style={contentStyle}>content</Content>
        <Footer style={footerStyle}>footer</Footer>
      </Layout>
      <Divider>center</Divider>
      <Layout style={{ height: 400 }}>
        {/* 不建议修改Header/Footer的height */}
        <Header style={{ height: 80, backgroundColor: '#56b5f3' }}>
          header
        </Header>
        <Content
          style={{
            backgroundColor: '#fed72d',
            width: '80%',
            alignSelf: 'center',
          }}
        >
          content
        </Content>
        <Footer style={footerStyle}>footer</Footer>
      </Layout>
      <Divider orientation="left">left sider</Divider>
      <Layout>
        <Header style={headStyle}>header</Header>
        <Layout hasSider>
          <Sider style={{ width: 120, backgroundColor: '#d66891' }}>
            sider
          </Sider>
          <Content style={contentStyle}>content</Content>
        </Layout>
        <Footer style={footerStyle}>footer</Footer>
      </Layout>
      <Divider orientation="right">right sider</Divider>
      <Layout>
        <Header style={headStyle}>header</Header>
        <Layout hasSider>
          <Content style={contentStyle}>content</Content>
          <Sider style={{ width: 120, backgroundColor: '#d66891' }}>
            sider
          </Sider>
        </Layout>
        <Footer style={footerStyle}>footer</Footer>
      </Layout>
      <Divider />
      <Layout hasSider>
        <Sider style={{ width: 120, backgroundColor: '#d66891' }}>sider</Sider>
        <Layout>
          <Header style={headStyle}>header</Header>
          <Content style={contentStyle}>content</Content>
          <Footer style={footerStyle}>footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
