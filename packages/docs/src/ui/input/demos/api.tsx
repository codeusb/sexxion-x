import React from 'react';
import { Input } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Input
        style={{ width: 350 }}
        onChange={(val, e) => console.log(val, e)}
        onPressEnter={(e) => console.log(e, e.target.value)}
      />
      <br />
      <Input
        style={{ width: 350 }}
        disabled
        onChange={(val, e) => console.log(val, e)}
        onPressEnter={(e) => console.log(e, e.target.value)}
      />
    </>
  );
};

export default App;
