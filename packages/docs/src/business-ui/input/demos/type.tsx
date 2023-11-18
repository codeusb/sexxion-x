import React from 'react';
import { Input } from '@sexxion-x/ui';

const App: React.FC = () => {
  return (
    <>
      <Input style={{ width: 350 }} type="password" showTogglePwd={true} />
      <br />
      <Input style={{ width: 350 }} type="number" />
    </>
  );
};

export default App;
