import clsx from "clsx";
import styles from "./Shards.module.css";
import React, { useEffect, useState } from "react";

// Types
export interface ShardsProps {
  color?: string;
  contentBackgroundColor?: string;
  zIndex?: number; // New prop
  videoSrc?: string; // New prop for background video
  videoMuted?: boolean; // Optional video muted
  videoAutoplay?: boolean; // Optional autoplay for video
  videoLoop?: boolean; // Optional loop for video
}

// Helper Functions for Generating Biased Random Values
const getRandomRotation = () => Math.floor(Math.random() * 10 - 5); // Random rotation between -5deg and 5deg
const getRandomSkewY = () => Math.floor(Math.random() * 30 + 30); // SkewY strictly between 30deg and 60deg
const getRandomSkewX = () =>
  Math.floor(Math.random() * 15 + 15) * (Math.random() > 0.5 ? 1 : -1); // SkewX between -15deg and -30deg or 15deg and 30deg

// Component
function Shards({
  color = "rgba(0, 36, 57, 1)",
  contentBackgroundColor = "transparent",
  zIndex,
  videoSrc,
  videoMuted = true,
  videoAutoplay = true,
  videoLoop = true,
}: ShardsProps) {
  const [customStyles, setCustomStyles] = useState<React.CSSProperties>({});

  useEffect(() => {
    const styleVars = {
      "--shard-color": color,
      "--rotate-1": `${getRandomRotation()}deg`,
      "--rotate-2": `${getRandomRotation()}deg`,
      "--skewY-1": `${getRandomSkewY()}deg`,
      "--skewY-2": `${getRandomSkewY()}deg`,
      "--skewX-1": `${getRandomSkewX()}deg`,
      "--skewX-2": `${getRandomSkewX()}deg`,
      zIndex,
    } as React.CSSProperties;

    setCustomStyles(styleVars);
  }, [color, zIndex]);

  return (
    <div
      data-component="Shards"
      className={clsx(styles["shards"])}
      style={customStyles}
    >
      <div
        className={clsx(styles["shards_inner"])}
        style={
          {
            "--content-background-color": contentBackgroundColor,
          } as React.CSSProperties
        }
      >
        {videoSrc && (
          <div className={styles["video-container"]}>
            <video
              className={styles["shards_video"]}
              src={videoSrc}
              muted={videoMuted}
              autoPlay={videoAutoplay}
              loop={videoLoop}
              playsInline
            ></video>
            <div
              className={styles["video-overlay"]}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shards;
