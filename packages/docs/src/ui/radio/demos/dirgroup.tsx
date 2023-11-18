import React from 'react';
import { Radio } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <Radio.Group value={'a'} direction="horizontal">
      <Radio value={'a'}>A</Radio>
      <Radio value={'b'}>B</Radio>
      <Radio value={'c'}>C</Radio>
      <Radio value={'d'}>D</Radio>
    </Radio.Group>
  );
};

export default App;
