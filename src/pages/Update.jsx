import { useEffect, useState } from "react";

const Update = () => {
  const [count, setCount] = useState(0);
  console.log("Initialization");

  useEffect(() => {
    console.log("Update");
  }, [count]);

  return (
    <>
      <p>Update</p>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default Update;
