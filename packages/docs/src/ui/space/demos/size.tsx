import React from 'react';
import { Button, Space } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <Space size={[40, 20]}>
      <Button type="primary">button1</Button>
      <Button type="primary">button2</Button>
      <Button type="primary">button3</Button>
      <Button type="primary">button4</Button>
      <Button type="primary">button5</Button>
      <Button type="primary">button6</Button>
    </Space>
  );
};

export default App;
