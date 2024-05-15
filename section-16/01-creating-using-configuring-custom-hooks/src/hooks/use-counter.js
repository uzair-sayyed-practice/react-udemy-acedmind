import { useState, useEffect } from "react";

const useCounter = (operator = "+", delay = 1000, gap = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (operator === "+") {
        setCounter((prevState) => prevState + gap);
      } else if (operator === "-") {
        setCounter((prevState) => prevState - gap);
      } else {
        setCounter("Please use valid operator in a string.");
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
