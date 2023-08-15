import React, { useState, useEffect } from "react";

const CountdownComponent = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 1) {
        setCount(count - 1);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [count]);

  return (
    <div className="countdown-widget">
      {count > 0 ? `Countdown: ${count}` : "Countdown completed!"}
    </div>
  );
};

export default CountdownComponent;
