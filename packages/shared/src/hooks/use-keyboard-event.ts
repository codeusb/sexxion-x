import { KeyboardEventHandler, useCallback } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Enter,
} from '../utils/keycode';

type CallBackEventType =
  | 'onPressEnter'
  | 'onArrowUp'
  | 'onArrowLeft'
  | 'onArrowRight'
  | 'onArrowDown';

//源码来自：arco-design

export function useKeyboardEvent(props?: { onKeyDown?: KeyboardEventHandler }) {
  const getEventListeners = useCallback(
    (callbacks: { [key in CallBackEventType]?: (e: any) => void }) => {
      return {
        onKeyDown: (e: any) => {
          const keyCode = e.keyCode || e.which;

          if (keyCode === Enter.code) {
            callbacks.onPressEnter?.(e);
          }
          if (keyCode === ArrowDown.code) {
            callbacks.onArrowDown?.(e);
          }
          if (keyCode === ArrowLeft.code) {
            callbacks.onArrowLeft?.(e);
          }
          if (keyCode === ArrowRight.code) {
            callbacks.onArrowRight?.(e);
          }
          if (keyCode === ArrowUp.code) {
            callbacks.onArrowUp?.(e);
          }
          props?.onKeyDown?.(e);
        },
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return getEventListeners;
}
