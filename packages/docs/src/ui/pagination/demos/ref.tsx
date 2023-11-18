import React, { useEffect } from 'react';
import { Pagination } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

// 前期测试使用
const App: React.FC = () => {
  useEffect(() => {
    // console.log(page);
  });
  return (
    <>
      <Pagination showTotal={(total) => `共${total}条`} total={9} />
      <Pagination showTotal={(total) => `共${total}条`} total={11} />
      <Pagination showTotal={(total) => `共${total}条`} total={21} />
      <Pagination showTotal={(total) => `共${total}条`} total={31} />
      <Pagination showTotal={(total) => `共${total}条`} total={41} />
      <Pagination
        current={3}
        showTotal={(total) => `共${total}条`}
        total={41}
      />
      <Pagination showTotal={(total) => `共${total}条`} total={51} />
      <Pagination showTotal={(total) => `共${total}条`} total={61} />
      <Pagination
        current={2}
        showTotal={(total) => `共${total}条`}
        total={61}
      />
      <Pagination
        current={3}
        showTotal={(total) => `共${total}条`}
        total={61}
      />
      <Pagination
        current={4}
        showTotal={(total) => `共${total}条`}
        total={61}
      />
      <Pagination
        current={5}
        showTotal={(total) => `共${total}条`}
        total={61}
      />
      <Pagination
        current={6}
        showTotal={(total) => `共${total}条`}
        total={61}
      />
      <Pagination showTotal={(total) => `共${total}条`} total={71} />
      <Pagination
        current={5}
        showTotal={(total) => `共${total}条`}
        total={71}
      />
      <Pagination showTotal={(total) => `共${total}条`} total={81} />
      <Pagination
        current={2}
        showTotal={(total) => `共${total}条`}
        total={81}
      />
      <Pagination
        current={3}
        showTotal={(total) => `共${total}条`}
        total={81}
      />
      <Pagination
        current={4}
        showTotal={(total) => `共${total}条`}
        total={81}
      />
      <Pagination
        current={5}
        showTotal={(total) => `共${total}条`}
        total={81}
      />
      <Pagination
        current={6}
        showTotal={(total) => `共${total}条`}
        total={81}
      />
      <Pagination
        current={7}
        showTotal={(total) => `共${total}条`}
        total={81}
      />
    </>
  );
};

export default App;
