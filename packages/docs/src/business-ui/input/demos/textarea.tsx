import React from 'react';
import { Input } from '@sexxion-x/ui';

const { TextArea } = Input;
const App: React.FC = () => {
  return (
    <>
      <TextArea />
      <br />
      <TextArea
        style={{ width: 350 }}
        value={'默认值'}
        onChange={(val, e) => console.log(val, e)}
        onPressEnter={(e) => console.log(e.target.value)}
      />
      <br />
      <TextArea style={{ width: 350 }} allowClear={false} />
      <br />
      <TextArea style={{ width: 350 }} disabled />
      <br />
      <TextArea style={{ width: 350 }} showTextNum />
    </>
  );
};

export default App;
