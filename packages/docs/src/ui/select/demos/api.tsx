import React, { useState } from 'react';
import { Select, Space } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const options = [
  {
    value: '01',
    label: 'apple',
  },
  {
    value: '02',
    label: 'banana',
  },
  {
    value: '03',
    label: 'orange',
  },
  {
    value: '04',
    label: 'apple4',
  },
  {
    value: '05',
    label: 'banana5',
  },
  {
    value: '06',
    label: 'orange6',
  },
  {
    value: '07',
    label: 'apple7',
  },
  {
    value: '08',
    label: 'orange8',
  },
  {
    value: '09',
    label: 'apple9',
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState('01');
  const handlePopupScroll = (e) => {
    console.log(e);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleChange = (value: any, options: any) => {
    console.log(value, options);
  };
  return (
    <Space>
      <Select
        value="01"
        options={options}
        style={{ width: 200 }}
        onPopupScroll={handlePopupScroll}
        onChange={handleChange}
      />
      <Select
        value={value}
        options={options}
        style={{ width: 200 }}
        onPopupScroll={(v) => setValue(v)}
        onChange={handleChange}
      />
    </Space>
  );
};

export default App;
