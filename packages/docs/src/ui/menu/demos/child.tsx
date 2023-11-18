import React, { useRef, useState } from 'react';
import { Divider, Menu } from '@sexxion-x/ui';
import '@sexxion-x/ui/dist/style.css';

const App: React.FC = () => {
  const ref = useRef(null);
  const [activeK, setActiveK] = useState<string>('001');
  return (
    <div style={{ width: 200 }}>
      <Menu
        ref={ref}
        defaultCollapsedList={['004', '041']}
        items={[
          { label: '菜单1', eventKey: '001' },
          {
            label: '菜单2',
            eventKey: '002',
            childItems: [
              { label: '子菜单2-1', eventKey: '021' },
              { label: '子菜单2-2', eventKey: '022' },
            ],
          },
          {
            label: '菜单3',
            eventKey: '003',
            childItems: [
              { label: '子菜单3-1', eventKey: '031' },
              { label: '子菜单3-2', eventKey: '032' },
              { label: '子菜单3-3', eventKey: '033' },
            ],
          },
          {
            label: '菜单4',
            eventKey: '004',
            childItems: [
              {
                label: '子菜单4-1',
                eventKey: '041',
                childItems: [{ label: '子菜单4-1-1', eventKey: '411' }],
              },
            ],
          },
        ]}
        onSelect={(key) => {
          console.log(key);
          setActiveK(key);
        }}
        activeKey={activeK}
        mode="vertical"
      />
      <Divider />
      <Menu
        mode="vertical"
        activeKey="001"
        ref={ref}
        onSelect={(key) => console.log('2', key)}
      >
        <Menu.Item eventKey={'001'} onSelect={(key) => console.log('1', key)}>
          父级01
        </Menu.Item>
        <Menu.Sub eventKey="002" label="父级02">
          <Menu.Item eventKey="021" onSelect={(key) => console.log('1', key)}>
            菜单22
          </Menu.Item>
          <Menu.Item eventKey="022" onSelect={(key) => console.log('1', key)}>
            菜单33
          </Menu.Item>
        </Menu.Sub>
        <Menu.Sub eventKey="003" label="父级03">
          <Menu.Item eventKey="031" onSelect={(key) => console.log('1', key)}>
            菜单22
          </Menu.Item>
          <Menu.Item eventKey="032" onSelect={(key) => console.log('1', key)}>
            菜单33
          </Menu.Item>
        </Menu.Sub>
        <Menu.Item eventKey={'004'} onSelect={(key) => console.log('1', key)}>
          父级04
        </Menu.Item>
        <Menu.Item eventKey={'005'} onSelect={(key) => console.log('1', key)}>
          父级05
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default App;
