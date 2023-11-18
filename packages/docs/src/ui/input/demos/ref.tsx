import React, { useRef } from 'react';
import { Input } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

// 前期测试使用
const App: React.FC = () => {
  const ref = useRef(null);
  const onClick = () => {
    console.log('click', ref.current);
  };
  return (
    <>
      <Input
        ref={ref}
        onClick={onClick}
        onChange={(val, e) => console.log(val, e)}
        suffix={'千克'}
      />
      <br />
      <Input prefix={'前缀'} size="large" placeholder="你好" suffix={'千克'} />
      <br />
      <Input size="small" />
      <br />
      <Input allowClear={false} />
    </>
  );
};

export default App;
