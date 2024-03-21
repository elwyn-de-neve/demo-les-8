import { useEffect } from "react";

const H2 = () => {
  console.log("Initialization");

  useEffect(() => {
    console.log("Mounted");
    return function cleanUp() {
      console.log("Unmounted");
    };
  }, []);

  return (
    <>
      <h2>Dit component gaan we zo unmounten</h2>
    </>
  );
};

export default H2;
