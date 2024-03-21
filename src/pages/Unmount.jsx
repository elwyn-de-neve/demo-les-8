import { useState } from "react";
import Timer from "../components/Timer.jsx";

const Unmount = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timer, setTimer] = useState(0);

  console.log(timer);

  return (
    <>
      <p>Unmount</p>
      {isVisible && <Timer setTimer={setTimer} timer={timer} />}
      <button onClick={() => setIsVisible((prev) => !prev)}>Unmount</button>
    </>
  );
};

export default Unmount;
