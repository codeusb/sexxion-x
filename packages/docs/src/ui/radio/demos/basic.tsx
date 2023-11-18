import React from 'react';
import { Radio } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Radio>单选框</Radio>
      <Radio disabled>单选框</Radio>
      <Radio onChange={(v) => console.log(v)}>单选框</Radio>
    </>
  );
};

export default App;
