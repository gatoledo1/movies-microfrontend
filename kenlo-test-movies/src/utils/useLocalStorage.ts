import { useState, useEffect } from "react";
import { MovieData } from "../types/MovieData";

export const useLocalStorage = (key: string, defaultValue: Array<null>): [MovieData[], React.Dispatch<any>] => {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, setValue]);

  return [value, setValue];
};
