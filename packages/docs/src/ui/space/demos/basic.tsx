import React from 'react';
import { Button, Divider, Space } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Space>
        <Button type="primary">button1</Button>
        <Button type="primary">button2</Button>
        <Button type="primary">button3</Button>
        <Button type="primary">button4</Button>
        <Button type="primary">button5</Button>
        <Button type="primary">button6</Button>
      </Space>
      <Divider>垂直间距</Divider>
      <Space direction="vertical">
        <Button type="primary">button1</Button>
        <Button type="primary">button2</Button>
        <Button type="primary">button3</Button>
      </Space>
    </>
  );
};

export default App;
