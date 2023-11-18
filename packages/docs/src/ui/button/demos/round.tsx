import React from 'react';
import { Button } from '@sexxion-x/ui';

const App: React.FC = () => {
  return (
    <>
      <Button type="primary">button</Button>
      {'  '}
      <Button type="primary" round>
        button
      </Button>
      {'  '}
    </>
  );
};

export default App;
