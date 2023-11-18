import React from 'react';
import { Input } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Input style={{ width: 350 }} size="small" />
      <br />
      <Input style={{ width: 350 }} />
      <br />
      <Input style={{ width: 350 }} size="large" />
      <br />
      <Input />
      <br />
      <Input style={{ width: 150, padding: 16 }} />
    </>
  );
};

export default App;
