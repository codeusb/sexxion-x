import React from 'react';
import { Input } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Input style={{ width: 350 }} prefix={'前缀'} suffix={'后缀'} />
      <br />
      <Input
        style={{ width: 350 }}
        prefix={'前缀'}
        placeholder="提示"
        suffix={'后缀'}
        allowClear={false}
      />
    </>
  );
};

export default App;
