import { FC, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import { isNull } from '@sexxion-x/shared';
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Input } from '../input';
// import { CSSTransition } from 'react-transition-group';
import { TreeNode, TreeProps } from './type';
import './style/index.less';
import './style/animation.less';

const Tree: FC<TreeProps> = (props) => {
  const {
    treeData,
    style,
    nodeStyle,
    className,
    width = '200px',
    defaultOpen = true,
    onClickNode,
    onSelect,
  } = props;
  const nodeClass = classNames('sex-tree-node');
  // 搜索值
  const [search, setSearch] = useState<string>();
  // 渲染树
  const [stateTreeData, setStateTreeData] = useState<TreeNode[]>(treeData);
  // 选中节点
  const [selectNode, setSelectNode] = useState<TreeNode>({} as TreeNode);

  // 重新构造树(对传入的tree的节点做属性补充)
  const nodeChange = (tree: TreeNode[], level = 0) => {
    return tree.map((node) => {
      const newNode = { ...node, level };
      if (defaultOpen) {
        newNode.height = '30px';
      } else {
        newNode.height = newNode.level === 0 ? '30px' : '0';
      }
      if (newNode.children) {
        newNode.children = nodeChange(newNode.children, level + 1);
      }
      return newNode;
    });
  };

  // 根据搜索值构造新树
  function reconstructTree(tree: TreeNode[], searchText: string): any {
    return tree.map((node) => {
      const newNode = { ...node };
      if (newNode.children) {
        let childArr = reconstructTree(newNode.children, searchText);
        if (isNull(childArr)) {
          childArr = [];
        }
        newNode.children = childArr.length ? childArr?.filter(Boolean) : [];
      }
      if (
        searchText &&
        newNode.title &&
        !newNode.title.includes(searchText) &&
        (newNode.children?.length === 0 || !newNode.children) // 叶子节点和父节点特判
      ) {
        return null;
      }
      const str = newNode.title;
      const searchTextIndex = str?.indexOf(searchText);
      const beforeStr = str?.substring(0, searchTextIndex);
      const afterStr = str?.slice(searchTextIndex! + searchText.length);
      const name = (
        <span>
          {beforeStr}
          <span style={{ color: '#ffd600' }}>{searchText}</span>
          {afterStr}
        </span>
      );
      newNode.title = name;
      return newNode;
    });
  }
  // 去除树中的null节点
  const removeNull = (tree: TreeNode[]) => {
    return tree.filter((node) => {
      if (node?.children) {
        node.children = removeNull(node.children);
      }
      if (node) {
        return true;
      } else {
        return false;
      }
    });
  };

  useEffect(() => {
    const realTreeData = nodeChange(treeData);
    setStateTreeData(realTreeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const realTreeData = nodeChange(treeData);
    if (search) {
      const arr = reconstructTree(realTreeData, search);
      const newArr = removeNull(arr);
      setStateTreeData(newArr);
      // console.log('new', arr);
    } else {
      setStateTreeData(realTreeData);
    }
  }, [search]);

  // 点击节点回调(重新构造树节点的height值实现开关)
  const toggleStateTree = (clickTreeNode: TreeNode) => {
    if (clickTreeNode?.children?.length) {
      const oldStateTree = [...stateTreeData];
      const closeTreeNode = (treeNode: TreeNode[]) => {
        treeNode.forEach((child) => {
          if (child.children?.length) {
            child.height = '0';
            closeTreeNode(child.children);
          } else {
            child.height = '0';
          }
        });
      };
      const mapFn = (treeNode: TreeNode[]) => {
        treeNode.forEach((t) => {
          if (t.title === clickTreeNode.title) {
            // 打开只打开一层,关闭是关闭所有
            if (t.children![0].height === '0') {
              t.children = t.children!.map((child: TreeNode) => {
                return {
                  ...child,
                  height: '30px',
                };
              });
            } else {
              closeTreeNode(t.children!);
            }
          } else if (t?.children?.length) {
            mapFn(t.children);
          }
        });
      };
      mapFn(oldStateTree);
      setStateTreeData(oldStateTree);
    } else {
      onSelect?.(clickTreeNode.key);
    }
    setSelectNode(clickTreeNode);
  };
  const renderNode = (data: any[] = []) => {
    return data?.map((treeNode, index) => {
      return (
        <Fragment key={index}>
          <Fragment>
            <div
              // className={`${nodeClass} ${
              //   treeNode.height === '30px' ? 'sex-open' : 'sex-close'
              // }`}
              className={nodeClass}
              style={{
                ...nodeStyle,
                height: `${treeNode.height}`,
                marginLeft: `${(treeNode.level as number) * 16}px`,
                backgroundColor:
                  selectNode.key === treeNode.key ? '#f3f4f5' : '',
              }}
              onClick={() => {
                toggleStateTree(treeNode);
                onClickNode?.(treeNode);
              }}
            >
              {treeNode.height === '30px' && (
                <>
                  <span>
                    {treeNode.height === '30px' &&
                    treeNode?.children?.length ? (
                      treeNode?.children[0]?.height === '0' ? (
                        <CaretRightOutlined />
                      ) : (
                        <CaretDownOutlined />
                      )
                    ) : (
                      <div style={{ width: 12, height: 12 }} />
                    )}
                  </span>
                  <span>{treeNode.title}</span>
                </>
              )}
            </div>
            {/* <CSSTransition
              in={
                treeNode?.children
                  ? treeNode?.children[0]?.height === '30px'
                    ? true
                    : false
                  : true
              }
              timeout={300}
              unmountOnExit
              classNames="opt"
            >
              <div> */}
            {treeNode?.children?.length ? renderNode(treeNode.children) : null}
            {/* </div>
            </CSSTransition> */}
          </Fragment>
        </Fragment>
      );
    });
  };
  // console.log('node', stateTreeData);
  return (
    <div style={{ ...style, width: width }} className={className}>
      <Input onChange={(v) => setSearch(v)} />
      {renderNode(stateTreeData)}
    </div>
  );
};

export default Tree;
