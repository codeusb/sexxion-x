import React, { useState } from 'react';
import { Menu } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  const [activeK, setActiveK] = useState<string>('001');
  return (
    <>
      <Menu
        items={[
          { label: '菜单1', eventKey: '001' },
          { label: '菜单2', eventKey: '002' },
          { label: '菜单3', eventKey: '003', disabled: true },
        ]}
        onSelect={(eventKey) => {
          console.log('f', eventKey);
          setActiveK(eventKey);
        }}
        activeKey={activeK}
      />
      <Menu
        onSelect={(eventKey) => {
          console.log('s', eventKey);
        }}
      >
        <Menu.Item eventKey={'001'} onSelect={(key) => console.log('1', key)}>
          菜单11
        </Menu.Item>
        <Menu.Item eventKey="002" onSelect={(key) => console.log('2', key)}>
          菜单22
        </Menu.Item>
        <Menu.Item
          eventKey="003"
          onSelect={(key) => console.log('3', key)}
          disabled
        >
          菜单33
        </Menu.Item>
      </Menu>
    </>
  );
};

export default App;
