import { useEffect, useState } from "react";

const useSorting = <T>(initialData: T[], compareFn: (a: T, b: T) => number) => {
  
    const [data, setData] = useState(initialData);
    useEffect(()=>{
        setData(data => [...data].sort(compareFn));
    },[compareFn])
    return {
        data,
    };
  };
  
  export default useSorting;
