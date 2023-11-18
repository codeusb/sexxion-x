import React from 'react';
import { Radio } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Radio.Group value={'a'} onChange={(v) => console.log(v)}>
        <Radio value={'a'}>A</Radio>
        <Radio value={'b'}>B</Radio>
        <Radio value={'c'}>C</Radio>
        <Radio value={'d'} disabled>
          D
        </Radio>
      </Radio.Group>
      <Radio.Group
        onChange={(v) => console.log(v)}
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
          { label: 'D', value: 'd', disabled: true },
        ]}
      />
      <Radio.Group
        onChange={(v) => console.log(v)}
        options={['A', 'B', 'C', 'D']}
      />
      <Radio.Group disabled options={['A', 'B', 'C', 'D']} />
    </>
  );
};

export default App;
