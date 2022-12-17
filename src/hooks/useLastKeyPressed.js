import { useEffect, useState } from "react";

function useLastKeyPressed() {
  const [keyPressed, setKeyPressed] = useState("");

  function downHandler({ key }) {
    setKeyPressed(key);
  }

  const upHandler = ({ key }) => {
    if (key === keyPressed) {
      setKeyPressed("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

export default useLastKeyPressed;
