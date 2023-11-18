import React from 'react';
import { Button } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Button>button</Button>
      {'  '}
      <Button type="primary">button</Button>
      {'  '}
      <Button type="dark">button</Button>
      {'  '}
      <Button type="warn">button</Button>
      {'  '}
      <Button type="danger">button</Button>
      {'  '}
      {/* 字体颜色 + 边框颜色 */}
      <Button style={{ color: 'red', borderColor: 'red' }}>button</Button>
      {'  '}
    </>
  );
};

export default App;
