import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <p>You have used {seconds} seconds on this website</p>;
};
