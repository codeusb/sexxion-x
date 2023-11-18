import React from 'react';
import { Pagination } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <>
      {/* 注意：该功能暂未完成 */}
      <Pagination total={500} showJumper />
    </>
  );
};

export default App;
