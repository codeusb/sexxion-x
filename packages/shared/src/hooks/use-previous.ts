import { ComponentState, PropsWithoutRef, useEffect, useRef } from 'react';

//源码来自：arco-design
export function usePrevious<T>(value: PropsWithoutRef<T> | ComponentState) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
