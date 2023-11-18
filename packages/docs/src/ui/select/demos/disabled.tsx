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
];

const App: React.FC = () => {
  return (
    <Space>
      <Select value="01" options={options} style={{ width: 200 }} />
      <Select value="02" options={options} style={{ width: 200 }} disabled />
    </Space>
  );
};

export default App;
