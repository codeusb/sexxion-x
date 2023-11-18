// src/hooks/use-default-props.ts
import { useMemo } from "react";
var useDefaultProps = (originalProps, defaultProps) => {
  return useMemo(() => {
    const props = Object.assign({}, originalProps);
    Object.keys(defaultProps).forEach((key) => {
      if (props[key] === void 0) {
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
};

// src/hooks/use-keyboard-event.ts
import { useCallback } from "react";

// src/utils/keycode.ts
var Enter = {
  key: "Enter",
  code: 13
};
var Esc = {
  key: "Escape",
  code: 27
};
var Backspace = {
  key: "Backspace",
  code: 8
};
var Tab = {
  key: "Tab",
  code: 9
};
var Space = {
  key: "",
  code: 32
};
var ArrowUp = {
  key: "ArrowUp",
  code: 38
};
var ArrowDown = {
  key: "ArrowDown",
  code: 40
};
var ArrowLeft = {
  key: "ArrowLeft",
  code: 37
};
var ArrowRight = {
  key: "ArrowRight",
  code: 39
};

// src/hooks/use-keyboard-event.ts
function useKeyboardEvent(props) {
  const getEventListeners = useCallback(
    (callbacks) => {
      return {
        onKeyDown: (e) => {
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
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return getEventListeners;
}

// src/hooks/use-merge-value.ts
import { useEffect as useEffect2, useRef as useRef2, useState } from "react";

// src/utils/is.ts
var opt = Object.prototype.toString;
function isArray(obj) {
  return opt.call(obj) === "[object Array]";
}
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
function isString(obj) {
  return opt.call(obj) === "[object String]";
}
function isNumber(obj) {
  return opt.call(obj) === "[object Number]" && obj === obj;
}
function isRegExp(obj) {
  return opt.call(obj) === "[object RegExp]";
}
function isFile(obj) {
  return opt.call(obj) === "[object File]";
}
function isBlob(obj) {
  return opt.call(obj) === "[object Blob]";
}
function isHex(color) {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color);
}
function isRgb(color) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color);
}
function isRgba(color) {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color);
}
function isColor(color) {
  return isHex(color) || isRgb(color) || isRgba(color);
}
function isUndefined(obj) {
  return obj === void 0;
}
function isNull(obj) {
  return obj === null;
}
function isNullOrUndefined(obj) {
  return obj === null || obj === void 0;
}
function isFunction(obj) {
  return typeof obj === "function";
}
function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0;
}
function isExist(obj) {
  return obj || obj === 0;
}
function isWindow(el) {
  return el === window;
}

// src/hooks/use-previous.ts
import { useEffect, useRef } from "react";
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/hooks/use-merge-value.ts
function useMergeValue(defaultStateValue, props) {
  const { defaultValue, value } = props || {};
  const firstRenderRef = useRef2(true);
  const prevPropsValue = usePrevious(props.value);
  const [stateValue, setStateValue] = useState(
    !isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue
  );
  useEffect2(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    if (value === void 0 && prevPropsValue !== value) {
      setStateValue(value);
    }
  }, [value]);
  const mergedValue = isUndefined(value) ? stateValue : value;
  return [mergedValue, setStateValue, stateValue];
}

// src/utils/took.ts
var sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
export {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Backspace,
  Enter,
  Esc,
  Space,
  Tab,
  isArray,
  isBlob,
  isColor,
  isEmptyObject,
  isExist,
  isFile,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isUndefined,
  isWindow,
  sleep,
  useDefaultProps,
  useKeyboardEvent,
  useMergeValue,
  usePrevious
};
