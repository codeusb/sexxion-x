import React from 'react';
import { Button, Divider, Space } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <Space>
      <Space align="start" style={{ border: '1px dotted black', padding: 16 }}>
        <Button type="primary">button1</Button>
        <div style={{ background: '#fed72d', height: 80, width: 60 }}></div>
      </Space>
      <Divider />
      <Space align="center" style={{ border: '1px dashed black', padding: 16 }}>
        <Button type="primary">button1</Button>
        <div style={{ background: '#fed72d', height: 80, width: 60 }}></div>
      </Space>
      <Divider />
      <Space align="end" style={{ border: '1px dotted black', padding: 16 }}>
        <Button type="primary">button1</Button>
        <div style={{ background: '#fed72d', height: 80, width: 60 }}></div>
      </Space>
      <Divider />
      <Space
        align="baseline"
        style={{ border: '1px dashed black', padding: 16 }}
      >
        <Button type="primary">button1</Button>
        <div style={{ background: '#fed72d', height: 80, width: 60 }}></div>
      </Space>
    </Space>
  );
};

export default App;
