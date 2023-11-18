import React, { KeyboardEventHandler, PropsWithoutRef, ComponentState } from 'react';

/**
 * 默认值和传入值混合函数
 */
declare const useDefaultProps: <T>(originalProps: T, defaultProps: Record<PropertyKey, any>) => T;

declare function useKeyboardEvent(props?: {
    onKeyDown?: KeyboardEventHandler;
}): (callbacks: {
    onPressEnter?: ((e: any) => void) | undefined;
    onArrowUp?: ((e: any) => void) | undefined;
    onArrowLeft?: ((e: any) => void) | undefined;
    onArrowRight?: ((e: any) => void) | undefined;
    onArrowDown?: ((e: any) => void) | undefined;
}) => {
    onKeyDown: (e: any) => void;
};

declare function useMergeValue<T>(defaultStateValue: T, props?: {
    defaultValue?: T;
    value?: T;
}): [T, React.Dispatch<React.SetStateAction<T>>, T];

declare function usePrevious<T>(value: PropsWithoutRef<T> | ComponentState): undefined;

declare function isArray(obj: any): obj is any[];
declare function isObject(obj: any): obj is {
    [key: string]: any;
};
declare function isString(obj: any): obj is string;
declare function isNumber(obj: any): obj is number;
declare function isRegExp(obj: any): boolean;
declare function isFile(obj: any): obj is File;
declare function isBlob(obj: any): obj is Blob;
declare function isColor(color: any): boolean;
declare function isUndefined(obj: any): obj is undefined;
declare function isNull(obj: any): obj is null;
declare function isNullOrUndefined(obj: any): boolean;
declare function isFunction(obj: any): obj is (...args: any[]) => any;
declare function isEmptyObject(obj: any): boolean;
declare function isExist(obj: any): boolean;
declare function isWindow(el: any): el is Window;

declare const Enter: {
    key: string;
    code: number;
};
declare const Esc: {
    key: string;
    code: number;
};
declare const Backspace: {
    key: string;
    code: number;
};
declare const Tab: {
    key: string;
    code: number;
};
declare const Space: {
    key: string;
    code: number;
};
declare const ArrowUp: {
    key: string;
    code: number;
};
declare const ArrowDown: {
    key: string;
    code: number;
};
declare const ArrowLeft: {
    key: string;
    code: number;
};
declare const ArrowRight: {
    key: string;
    code: number;
};

declare const sleep: (ms: number) => Promise<void>;

export { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Backspace, Enter, Esc, Space, Tab, isArray, isBlob, isColor, isEmptyObject, isExist, isFile, isFunction, isNull, isNullOrUndefined, isNumber, isObject, isRegExp, isString, isUndefined, isWindow, sleep, useDefaultProps, useKeyboardEvent, useMergeValue, usePrevious };
