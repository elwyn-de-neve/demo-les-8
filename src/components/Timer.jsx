import { useEffect } from "react";

const Timer = ({ setTimer, timer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <p>Timer: {timer}</p>
    </>
  );
};

export default Timer;
