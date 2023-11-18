import React from 'react';
import { Button } from '@sexxion-x/ui';

const App: React.FC = () => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <>
      <Button type="primary">button</Button>
      {'  '}
      <Button type="primary" disabled>
        button
      </Button>
      {'  '}
      <Button type="primary" onClick={onClick}>
        button
      </Button>
      {'  '}
      <Button type="primary" disabled onClick={onClick}>
        button
      </Button>
      {'  '}
    </>
  );
};

export default App;
