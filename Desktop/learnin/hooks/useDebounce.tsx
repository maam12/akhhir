import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);




  

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedValue;
}