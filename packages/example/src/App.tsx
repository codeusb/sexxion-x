import { Tree } from '@sexxion-x/ui';
// import { Tree as AntdTree } from 'antd';
import './App.css';

// const { Header, Content, Footer, Sider } = Layout;

// 开发调试页面

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
  },
  {
    title: 'xff',
    key: '0-2',
    children: [
      {
        title: 'hha',
        key: '0-2-1',
      },
    ],
  },
  {
    title: 'gwj',
    key: '0-3',
  },
];

function App() {
  return (
    <>
      {/* <Menu /> */}
      {/* <Input /> */}
      <Tree
        treeData={treeData}
        onClickNode={(node) => console.log('点击节点', node)}
        onSelect={(key) => console.log('点击叶子节点', key)}
      />
      {/* <AntdTree treeData={treeData} /> */}
      {/* <Button type="primary">123</Button> */}
      {/* <Select options={[{ value: '123', label: 'hha' }]} /> */}
      {/* <TreeSelect /> */}
    </>
  );
}

export default App;
