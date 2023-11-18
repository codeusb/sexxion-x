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
  return (
    <Space>
      <Select
        mode="multiple"
        value={['01', '04']}
        options={options}
        style={{ minWidth: 200 }}
      />
      <Select mode="multiple" options={options} style={{ minWidth: 200 }} />
    </Space>
  );
};

export default App;
