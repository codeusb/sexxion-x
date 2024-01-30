import { forwardRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style/index.less';
import classNames from 'classnames';

const TreeSelect = forwardRef<HTMLDivElement, any>((props, ref) => {
  const { className } = props;

  const [visible, setVisible] = useState<boolean>(false); //是否展开下拉框

  const classTop = classNames('sex-tree-select-top', className, {});

  return (
    <div className="sex-tree-select" ref={ref}>
      <div className={classTop} onClick={() => setVisible(!visible)}></div>
      <CSSTransition in={visible} timeout={300} unmountOnExit classNames="opt">
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '35%', background: 'red' }}>left</div>
          <div style={{ flex: '65%', background: 'black' }}>right</div>
        </div>
      </CSSTransition>
    </div>
  );
});

TreeSelect.displayName = 'TreeSelect';

export default TreeSelect;
