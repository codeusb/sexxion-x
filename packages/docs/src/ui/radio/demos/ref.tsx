import React from 'react';
import { Radio } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

// 前期测试使用
const App: React.FC = () => {
  return (
    <>
      <Radio>value</Radio>
      <Radio checked={false}>未选中</Radio>
      <Radio checked>已选中</Radio>
      <Radio checked={false} disabled>
        禁用未选中
      </Radio>
      <Radio checked={true} disabled>
        禁用已选中
      </Radio>
      <Radio value={'cs'}>value1</Radio>
      <Radio checked>value2</Radio>
      <Radio disabled>value3</Radio>
      <Radio onChange={(v, e) => console.log(v, e)}>value4</Radio>
      <Radio.Group onChange={(v, e) => console.log(v, e)}>
        <Radio value={'v1'}>cs1</Radio>
        <Radio value={'v2'} checked>
          cs2
        </Radio>
        <Radio value={'v3'} disabled>
          cs3
        </Radio>
        <Radio value={'v4'} onChange={(v, e) => console.log(v, e)}>
          cs4
        </Radio>
      </Radio.Group>
      <Radio.Group
        name="cs2123"
        value={'v4'}
        onChange={(v, e) => console.log(v, e)}
      >
        <Radio value={'v1'}>value1</Radio>
        <Radio value={'v2'}>value2</Radio>
        <Radio value={'v3'}>value3</Radio>
        <Radio value={'v4'}>value4</Radio>
      </Radio.Group>
      <Radio.Group
        onChange={(v, e) => console.log(v, e)}
        options={[
          { label: 'v1', value: '01' },
          { label: 'v2', value: '02' },
          { label: 'v3', value: '03' },
          { label: 'v4', value: '04' },
        ]}
      ></Radio.Group>
      <Radio.Group
        value={'v1'}
        onChange={(v, e) => console.log(v, e)}
        options={['v1', 'v2', 'v3']}
      ></Radio.Group>
      <Radio.Group
        onChange={(v, e) => console.log(v, e)}
        direction="horizontal"
        disabled
        options={[
          { label: 'v1', value: '01' },
          { label: 'v2', value: '02' },
        ]}
      ></Radio.Group>
      <Radio.Group
        onChange={(v, e) => console.log(v, e)}
        name="cs"
        options={[
          { label: 'v1', value: '01' },
          { label: 'v2', value: '02' },
          { label: 'v3', value: '03' },
          { label: 'v4', value: '04' },
        ]}
      ></Radio.Group>
    </>
  );
};

export default App;
