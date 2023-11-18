import React, { ReactElement } from 'react';

export const flatMenuGroup = (children: any): ReactElement[] => {
  const MenuItems: any[] = [];
  React.Children.forEach(children, (item) => {
    console.log(item);
    MenuItems.push(item);
  });

  return MenuItems;
};
