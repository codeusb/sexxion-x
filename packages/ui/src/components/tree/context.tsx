import { FC, createContext, useState } from 'react';

// TODO
type TreeContextProps = {
  curNode?: any;
  onSelect?: any;
};

type TreeProviderProps = {
  children?: any;
};

export const TreeContext = createContext({} as TreeContextProps);

export const TreeProvider: FC<TreeProviderProps> = ({ children }) => {
  const [curNode, setCurNode] = useState();

  const value = {
    curNode,
    onSelect: setCurNode,
  };

  return <TreeContext.Provider value={value}>{children}</TreeContext.Provider>;
};
