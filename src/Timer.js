import { useState, useEffect } from "react";
import Button from "./Button";
import TimeDisplay from "./TimeDisplay";

function Timer({ startTime, onComplete }) {
  const [remaining, setRemaining] = useState(startTime);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    function tick() {
      setRemaining((oldValue) => {
        const value = oldValue - 1;
        if (value <= 0) {
          setRunning(false);
          return 0;
        }
        return value;
      });
    }

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isRunning, onComplete]);

  return (
    <section className="timer">
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button icon="pause" label="Pause" onClick={() => setRunning(false)} />
      ) : (
        <Button icon="play" label="Play" onClick={() => setRunning(true)} />
      )}
      <Button icon="trash" onClick={onComplete} />
    </section>
  );
}
export default Timer;