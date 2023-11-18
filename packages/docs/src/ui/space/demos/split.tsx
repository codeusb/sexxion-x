import React from 'react';
import { Button, Divider, Space } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <Space align="center" split={<Divider layout="vertical" />}>
      测试
      <Button type="primary">button</Button>
      测试
    </Space>
  );
};

export default App;
