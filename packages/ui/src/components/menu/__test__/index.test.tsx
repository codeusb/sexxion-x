import '@testing-library/jest-dom';
import { act, fireEvent, render } from '@testing-library/react';
import { Menu } from '..';
import { sleep } from '@sexxion-x/shared';

describe('Menu', () => {
  it('正常渲染', () => {
    const mockFn = jest.fn();
    const component = render(
      <Menu
        items={[
          { label: '菜单1', eventKey: '001' },
          { label: '菜单2', eventKey: '002' },
          { label: '菜单3', eventKey: '003' },
        ]}
        onSelect={mockFn}
        activeKey="001"
      />,
    );
    const comEle = component.container.querySelectorAll('.sex-menu-item');
    const actEle = component.getByText('菜单1');
    const nextEle = component.getByText('菜单2');
    expect(comEle.length).toBe(2);
    expect(actEle).toHaveClass('sex-menu-active');

    fireEvent.click(nextEle);
    expect(nextEle).toHaveClass('sex-menu-active');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('disabled 和 vertical', () => {
    const component = render(
      <Menu
        items={[
          { label: '菜单1', eventKey: '001' },
          { label: '菜单2', eventKey: '002' },
          { label: '菜单3', eventKey: '003', disabled: true },
        ]}
        mode="vertical"
        activeKey="001"
      />,
    );
    expect(component.getByText('菜单3')).toHaveClass('sex-menu-disabled');
    expect(component.container.firstChild).toHaveClass('sex-menu-vertical');
  });

  it('子菜单', async () => {
    const mockFn = jest.fn();
    const component = render(
      <Menu
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
        onSelect={mockFn}
        mode="vertical"
      />,
    );
    const initEle1 = component.getByText('子菜单4-1');
    const initEle2 = component.getByText('子菜单4-1-1');
    expect(initEle1).toHaveClass('sex-menu-item');
    expect(initEle2).toHaveClass('sex-menu-item');
    expect(component.container).not.toHaveTextContent('子菜单3-1');

    fireEvent.click(component.getByText('菜单4'));
    fireEvent.click(component.getByText('菜单3'));
    await act(async () => {
      await sleep(300);
    });

    expect(component.getByText('子菜单3-1')).toHaveClass('sex-menu-item');
    expect(component.container).not.toHaveTextContent('子菜单4-1');
    expect(component.container).not.toHaveTextContent('子菜单4-1-1');
  });
});
