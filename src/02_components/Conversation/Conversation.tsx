// --------------------------------------------
// Imports
// --------------------------------------------

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Conversation.module.css";

// --------------------------------------------
// Props
// --------------------------------------------

export interface ConversationProps {
  sequence: { delay: number; duration?: number }[]; // Array with delay and optional duration for each item
  children: React.ReactNode;
}

interface ConversationItemProps {
  children: React.ReactNode;
}

// --------------------------------------------
// Conversation Component
// --------------------------------------------

const Conversation: React.FC<ConversationProps> & {
  Item: React.FC<ConversationItemProps>;
} = ({ sequence, children }) => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set()); // Track visible items

  useEffect(() => {
    if (sequence.length === 0) return;

    sequence.forEach((step, index) => {
      // Set timeout to add the "visible" state after the specified delay
      const showTimeout = setTimeout(() => {
        setVisibleIndices(prev => new Set(prev).add(index));

        // If duration is specified, set timeout to remove "visible" after duration
        if (step.duration) {
          setTimeout(() => {
            setVisibleIndices(prev => {
              const newVisibleIndices = new Set(prev);
              newVisibleIndices.delete(index);
              return newVisibleIndices;
            });
          }, step.duration);
        }
      }, step.delay);

      // Cleanup show timeout on unmount
      return () => clearTimeout(showTimeout);
    });

    // Cleanup on component unmount
    return () => setVisibleIndices(new Set());
  }, [sequence]);

  return (
    <div data-component="Conversation" className={styles["conversation"]}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          isVisible: visibleIndices.has(index), // Pass down visibility state as prop
        }),
      )}
    </div>
  );
};

// --------------------------------------------
// Conversation.Item Component
// --------------------------------------------

const ConversationItem: React.FC<
  ConversationItemProps & { isVisible?: boolean }
> = ({ isVisible, children }) => {
  return (
    <div
      className={clsx(styles["conversation__item"], {
        [styles["conversation__item--active"]]: isVisible,
      })}
    >
      {children}
    </div>
  );
};

Conversation.Item = ConversationItem;

export default Conversation;
