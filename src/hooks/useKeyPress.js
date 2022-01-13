import React, { useState, useEffect } from "react";

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = useState();
  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key.length == 1 && keyPressed !== key) {
        setKeyPressed(key);
        callback && callback(key);
      }
    };
    const upHandler = () => {
      setKeyPressed(null);
    };
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });
  return keyPressed;
};

export default useKeyPress;
