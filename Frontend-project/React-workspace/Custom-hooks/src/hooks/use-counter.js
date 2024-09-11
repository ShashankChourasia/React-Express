import { useEffect, useState } from "react";

const useCounter= (forwards= true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(forwards){
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
      
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter; //custom hooks can return anything like number, array, object etc
};

export default useCounter;