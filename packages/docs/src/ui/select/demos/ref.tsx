import React from 'react';
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
  const handleChange = (value, option) => {
    console.log(value, option);
  };
  const handlePopupScroll = (e) => {
    console.log(e);
  };
  return (
    <Space>
      <Select
        // defaultOpen
        value="apple"
        options={options}
        onChange={handleChange}
        style={{ width: 200 }}
      />
      <Select options={options} style={{ width: 200, height: 40 }} />
      <Select
        // open
        value="apple"
        options={options}
        style={{ width: 200 }}
      />

      <Select options={options} style={{ width: 200 }} allowClear />
      <Select
        options={options}
        placeholder="123"
        style={{ width: 200 }}
        allowClear
      />
      <Select options={options} style={{ width: 200 }} disabled />
      <Select
        options={options}
        style={{ minWidth: 200 }}
        onPopupScroll={handlePopupScroll}
        onChange={handleChange}
        mode="multiple"
      />
      <Select
        options={options}
        style={{ minWidth: 200 }}
        value={['apple', 'apple1']}
        mode="multiple"
      />
      <Select
        // open
        value="apple"
        options={options}
        style={{ width: 200 }}
        direction="up"
      />
    </Space>
  );
};

export default App;
