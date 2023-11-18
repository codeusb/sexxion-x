import React, { useRef } from 'react';
import { Button, Input } from '@sexxion-x/ui';

// 前期测试使用
const App: React.FC = () => {
  const ref = useRef(null);
  const onClick = () => {
    console.log('click', ref.current);
  };
  return (
    <>
      <Input onChange={(val) => console.log('我的', val)} />
      <Button ref={ref} round onClick={onClick}>
        button
      </Button>
    </>
  );
};

export default App;
