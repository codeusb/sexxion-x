import React, { useEffect, useState } from 'react';
import { Input } from '@sexxion-x/ui';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('默认值');
  useEffect(() => {
    console.log(value);
  });
  return (
    <>
      <Input style={{ width: 300 }} value={value} />
      <br />
      <Input
        style={{ width: 300 }}
        onChange={(val) => setValue(val as string)}
      />
    </>
  );
};

export default App;
