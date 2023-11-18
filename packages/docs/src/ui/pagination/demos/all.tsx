import React from 'react';
import { Pagination } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <Pagination
      showJumper
      showTotal={(total) => `共${total}条`}
      showSizeChange
      total={500}
      onChange={(page) => {
        console.log(page);
      }}
    />
  );
};

export default App;
