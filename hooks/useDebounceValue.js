import { useEffect, useRef, useState } from "react";

export function useDebounceValue(value, wait) {
  const [_value, setValue] = useState(value);
  const refMounted = useRef(false);
  const refTimeout = useRef(undefined);

  const cancel = () => window.clearTimeout(refTimeout.current);

  useEffect(() => {
    if (refMounted.current) {
      cancel();
      refTimeout.current = window.setTimeout(() => {
        setValue(value);
      }, wait);
    }
  }, [value, wait]);

  useEffect(() => {
    refMounted.current = true;
    return cancel;
  }, []);

  return _value;
}
