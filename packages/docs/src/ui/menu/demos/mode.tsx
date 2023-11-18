import React from 'react';
import { Menu } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  return (
    <Menu
      items={[
        { label: '菜单1', eventKey: '001' },
        { label: '菜单2', eventKey: '002' },
        { label: '菜单3', eventKey: '003', disabled: true },
      ]}
      onSelect={(eventKey) => {
        console.log(eventKey);
      }}
      mode="vertical"
      activeKey="001"
    />
  );
};

export default App;
