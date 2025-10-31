// --------------------------------------------
//
// Keypad.tsx
// -> Component
//
// --------------------------------------------

import React, { useEffect, useState, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Keypad.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface KeypadProps {
  children: ReactNode; // Keypad items are provided as children
  sequence?: number[]; // Optional sequence of keys to activate in turn
  interval?: number; // Interval in milliseconds for sequence updates
  isRunning?: boolean; // Determines if the sequence should start automatically
  appearance?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body-1"
    | "body-2"
    | "body-3";
}

interface KeypadItemProps {
  children: ReactNode; // Content of the key
  index: number; // Unique index for the key
  active?: boolean; // Sets initial active state
  onClick: (index: number) => void; // Handles click events
}

// --------------------------------------------
// Keypad Component
// --------------------------------------------

const Keypad: React.FC<KeypadProps> & { Item: React.FC<KeypadItemProps> } = ({
  children,
  sequence,
  interval = 1000,
  isRunning = false,
  appearance = "h3",
}) => {
  const [activeKey, setActiveKey] = useState<number | null>(null);
  const [isSequenceActive, setIsSequenceActive] = useState(false); // Track if sequence is running

  useEffect(() => {
    if (isRunning && sequence && sequence.length > 0) {
      setIsSequenceActive(true); // Show overlay while the sequence is running
      let currentIndex = 0;
      const timeoutIds: NodeJS.Timeout[] = [];

      const runSequence = () => {
        if (currentIndex < sequence.length) {
          setActiveKey(sequence[currentIndex]);
          timeoutIds.push(
            setTimeout(() => {
              currentIndex += 1;
              runSequence();
            }, interval)
          );
        } else {
          setActiveKey(null); // Reset after sequence completes
          setIsSequenceActive(false); // Hide overlay after sequence ends
        }
      };

      runSequence();

      // Cleanup function to clear timeouts if component unmounts or isRunning changes
      return () => {
        timeoutIds.forEach(clearTimeout);
        setIsSequenceActive(false); // Ensure overlay is hidden if interrupted
      };
    } else {
      setIsSequenceActive(false); // Ensure overlay is hidden if not running
    }
  }, [isRunning, sequence, interval]);

  const handleCombinedClick = (
    childOnClick: (index: number) => void,
    index: number
  ) => {
    if (activeKey === null) {
      setActiveKey(index);
      setTimeout(() => {
        setActiveKey(null);
      }, interval);
      childOnClick(index);
    }
  };

  const classes = clsx(styles.keypad, styles[`keypad--${appearance}`]);

  return (
    <div
      data-component="Keypad"
      className={classes}
      aria-live="polite"
      style={{ position: "relative" }}
    >
      {isSequenceActive && <div className={styles.keypad__overlay} />}{" "}
      {/* Show overlay only when sequence is active */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement<KeypadItemProps>(child)) {
          const { onClick, index } = child.props;
          return React.cloneElement(child, {
            active: child.props.index === activeKey,
            onClick: onClick
              ? () => handleCombinedClick(onClick, index)
              : undefined,
          });
        }
        return child;
      })}
    </div>
  );
};

// --------------------------------------------
// Keypad.Item Subcomponent
// --------------------------------------------

const KeypadItem: React.FC<KeypadItemProps> = ({
  children,
  index,
  active,
  onClick,
}) => {
  const handleInteraction = (event: React.TouchEvent | React.MouseEvent) => {
    if (onClick) {
      event.preventDefault(); // Prevents default to handle touch interactions
      onClick(index);
    }
  };

  return (
    <button
      className={clsx(styles.keypad__item, { [styles.active]: active })}
      onTouchEnd={handleInteraction} // Trigger when the touch ends on mobile devices
      onPointerUp={handleInteraction} // Trigger when pointer interaction ends on other devices
      onClick={onClick ? () => onClick(index) : undefined} // Fallback for standard click
      aria-pressed={active}
      disabled={!!active}
    >
      {children}
    </button>
  );
};

Keypad.Item = KeypadItem;

// --------------------------------------------
// Export
// --------------------------------------------

export default Keypad;
