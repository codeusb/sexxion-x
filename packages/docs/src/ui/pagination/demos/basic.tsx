import React from 'react';
import { Pagination } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      <Pagination total={11} />
      <Pagination total={200} />
      <Pagination current={5} total={200} />
      <Pagination current={17} total={200} />
    </>
  );
};

export default App;
