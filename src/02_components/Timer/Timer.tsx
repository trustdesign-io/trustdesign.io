// --------------------------------------------
//
// Timer
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Timer.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface TimerProps {
  duration: number;
  reverse?: boolean;
  running: boolean;
  appearance?:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "heading-6"
    | "body-1"
    | "body-2"
    | "body-3";
  alignment?: "left" | "right" | "center";
  onComplete?: () => void; // Function called when the timer finishes
}

// --------------------------------------------
// Component
// --------------------------------------------

// ----- Timer ----- //

function Timer({
  duration,
  reverse = false,
  running,
  appearance = "body-2",
  alignment,
  onComplete,
}: TimerProps): React.ReactElement {
  const [time, setTime] = useState(duration);

  const classes = clsx(styles.timer, styles[`timer--${alignment}`], {
    [styles[`timer--${appearance}`]]: appearance,
    [styles["timer--warning"]]: time <= 10 && !reverse, // Add warning class when time is 10 seconds or less
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (running) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const nextTime = reverse ? prevTime + 1 : prevTime - 1;

          // If timer reaches zero (for countdown) or exceeds duration (for count-up)
          if ((reverse && nextTime > duration) || (!reverse && nextTime <= 0)) {
            clearInterval(intervalId); // Stop the timer
            if (onComplete) onComplete(); // Call onComplete function if provided
            return reverse ? duration : 0;
          }
          return nextTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running, reverse, duration, onComplete]);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div data-component="Timer" className={clsx(classes)}>
      <span className={styles.timer__time}>
        {String(hours).padStart(2, "0")}
      </span>
      :
      <span className={styles.timer__time}>
        {String(minutes).padStart(2, "0")}
      </span>
      :
      <span className={styles.timer__time}>
        {String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export { Timer };
