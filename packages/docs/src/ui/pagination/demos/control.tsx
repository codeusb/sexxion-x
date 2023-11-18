import React, { useState } from 'react';
import { Pagination } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  const [current, setCurrent] = useState<number>(1);
  return (
    <Pagination
      current={current}
      total={500}
      onChange={(page, pageSize) => {
        console.log(page, pageSize);
        setCurrent(page!);
      }}
    />
  );
};

export default App;
