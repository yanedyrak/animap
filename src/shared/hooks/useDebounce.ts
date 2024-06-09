import { useEffect, useState } from "react";

type Debounced = {
  value: string;
  delay: number;
};
export const useDebounce = ({ value, delay }: Debounced) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
