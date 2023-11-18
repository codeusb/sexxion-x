import React from 'react';
import { Button } from '@sexxion-x/ui';

const App: React.FC = () => {
  return (
    <>
      <Button type="primary" size="small">
        button
      </Button>
      {'  '}
      <Button type="primary">button</Button>
      {'  '}
      <Button type="primary" size="large">
        button
      </Button>
      {'  '}
    </>
  );
};

export default App;
