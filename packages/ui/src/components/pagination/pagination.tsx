import classNames from 'classnames';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import { Input, Select } from '..';
import { useDefaultProps, useKeyboardEvent } from '@sexxion-x/shared';
import './style/index.less';
import { PaginationBaseProps } from './type';

const paginationDefaultProps: PaginationBaseProps = {
  current: 1,
  pageSize: 10,
};

const Pagination = forwardRef<HTMLDivElement, PaginationBaseProps>(
  (originalProps, ref) => {
    const props = useDefaultProps(originalProps, paginationDefaultProps);
    const {
      style,
      className,
      current,
      total,
      pageSize,
      showJumper,
      showTotal,
      showSizeChange,
      simple,
      disabled,
      onChange,
    } = props;

    const [currentPage, setCurrentPage] = useState<number>(current!);
    const [renderPages, setRenderPages] = useState<number[]>([]);
    const getKeyboardEvents = useKeyboardEvent();
    const [changePageSize, setChangePageSize] = useState<number>(pageSize!);

    const totalPage = useMemo(() => {
      const res: number = Math.ceil(total! / changePageSize);
      //{/* 从8 -> 6  */}
      if (res > 6) {
        //增加判断
        if ([1, 2, 3, 4].includes(currentPage)) {
          setRenderPages([2, 3, 4, 5]);
        }
      } else if (res > 2) {
        const array = new Array(res - 2).fill(0);
        array.forEach((_, index) => {
          array[index] = index + 2;
        });
        setRenderPages(array);
      } else {
        setRenderPages([]);
      }

      return res;
    }, [total, changePageSize]);

    //点击改变页码
    const pageChange = (num: number) => {
      if (disabled) {
        return;
      }
      setCurrentPage(num);
      if (totalPage > 6) {
        if (num > 4 && num <= totalPage - 4) {
          setRenderPages([num - 1, num, num + 1]);
        } else if (num <= 4) {
          if (totalPage === 7 && num === 4) {
            setRenderPages([2, 3, 4, 5, 6]);
          } else {
            setRenderPages([2, 3, 4, 5]);
          }
        } else if (num > totalPage - 4 && num <= totalPage) {
          setRenderPages([
            totalPage - 4,
            totalPage - 3,
            totalPage - 2,
            totalPage - 1,
          ]);
        }
      }

      return onChange && onChange(num, changePageSize);
    };

    useEffect(() => {
      if (![1, 2, 3].includes(currentPage)) {
        pageChange(currentPage);
      }
    }, []);

    //上一页
    const prevPage = () => {
      if (disabled || currentPage === 1) {
        return;
      }
      setCurrentPage(currentPage - 1);
      pageChange(currentPage - 1);
    };

    //下一页
    const nextPage = () => {
      if (disabled || currentPage === totalPage) {
        return;
      }
      setCurrentPage(currentPage + 1);
      pageChange(currentPage + 1);
    };

    //向前四页
    const prevSomePage = () => {
      if (disabled) {
        return;
      }
      let updatePage: number = 0;
      updatePage = currentPage - 4 <= 1 ? 1 : currentPage - 4;
      setCurrentPage(updatePage);
      pageChange(updatePage);
    };

    //向后四页
    const nextSomePage = () => {
      if (disabled) {
        return;
      }
      let updatePage: number = 0;
      updatePage = currentPage + 4 >= totalPage ? totalPage : currentPage + 4;
      setCurrentPage(updatePage);
      pageChange(updatePage);
    };

    //跳转
    const jumpTo = (e: any) => {
      if (disabled) {
        return;
      }
      const newPage = +e.target.value;
      if (newPage && newPage > 0 && newPage <= totalPage) {
        setCurrentPage(newPage);
        pageChange(newPage);
      } else {
        console.error('不在范围之内');
      }
    };

    const classes = classNames('sex-pagination', className);
    // const classList = classNames('sex-pagination-list', {});
    const classListItem = classNames('sex-pagination-list-item', {
      [`sex-pagination-disabled`]: disabled,
    });

    return (
      <div className={classes} ref={ref} style={style}>
        <ul className={'sex-pagination-list'}>
          {showTotal && (
            <li className={`sex-pagination-total`}>{showTotal(total!)}</li>
          )}
          <li
            className={
              currentPage === 1 || disabled
                ? `sex-pagination-disabled`
                : `sex-pagination-prev`
            }
            tabIndex={disabled ? -1 : 0}
            onClick={prevPage}
            {...getKeyboardEvents({
              onPressEnter: prevPage,
            })}
          >
            {'<'}
          </li>
          {simple ? (
            <>
              <li className="sex-pagination-simple">{`${currentPage}/${totalPage}`}</li>
            </>
          ) : (
            <>
              <li
                className={
                  currentPage === 1
                    ? `${classListItem} sex-pagination-active`
                    : `${classListItem}`
                }
                tabIndex={disabled ? -1 : 0}
                onClick={() => pageChange(1)}
              >
                1
              </li>
              {/* 从8 -> 6  */}
              {currentPage > 4 && totalPage > 6 && (
                <li
                  className={classListItem}
                  onClick={prevSomePage}
                  tabIndex={disabled ? -1 : 0}
                  {...getKeyboardEvents({
                    onPressEnter: prevSomePage,
                  })}
                >
                  ...
                </li>
              )}
              {renderPages?.map((item: number) => (
                <li
                  key={item}
                  className={
                    currentPage === item
                      ? `${classListItem} sex-pagination-active`
                      : `${classListItem}`
                  }
                  tabIndex={disabled ? -1 : 0}
                  onClick={() => pageChange(item)}
                >
                  {item}
                </li>
              ))}
              {/* 从8 -> 6  */}
              {currentPage < totalPage - 3 && totalPage > 6 && (
                <li
                  className={classListItem}
                  onClick={nextSomePage}
                  tabIndex={disabled ? -1 : 0}
                  {...getKeyboardEvents({
                    onPressEnter: nextSomePage,
                  })}
                >
                  ...
                </li>
              )}
              {totalPage > 1 && (
                <li
                  className={
                    currentPage === totalPage
                      ? `${classListItem} sex-pagination-active`
                      : `${classListItem}`
                  }
                  onClick={() => pageChange(totalPage)}
                  tabIndex={disabled ? -1 : 0}
                >
                  {totalPage}
                </li>
              )}
            </>
          )}

          <li
            className={
              currentPage === totalPage || disabled
                ? `sex-pagination-disabled`
                : `sex-pagination-next`
            }
            tabIndex={disabled ? -1 : 0}
            onClick={nextPage}
            {...getKeyboardEvents({
              onPressEnter: nextPage,
            })}
          >
            {'>'}
          </li>
          {showSizeChange && (
            <li
              className={
                disabled
                  ? `sex-pagination-select sex-pagination-disabled`
                  : `sex-pagination-select`
              }
            >
              <Select
                value={10}
                style={{ height: 32, width: 100 }}
                options={[
                  { value: 10, label: '10条/页' },
                  { value: 20, label: '20条/页' },
                  { value: 50, label: '50条/页' },
                  { value: 100, label: '100条/页' },
                ]}
                onChange={(v) => {
                  setChangePageSize(v as number);
                }}
              />
            </li>
          )}
          {showJumper && (
            <li className={`sex-pagination-option`}>
              <div>
                跳转至
                <Input
                  disabled={disabled}
                  tabIndex={disabled ? -1 : 0}
                  className={`sex-pagination-option-input`}
                  allowClear={false}
                  onPressEnter={jumpTo}
                />
                {/* <input style={{ width: '40px' }} /> */}页
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  },
);

// const paginationComponent = forwardRef<unknown, PaginationBaseProps>(Pagination);

Pagination.displayName = 'Pagination';

export default Pagination;
