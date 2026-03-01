// --------------------------------------------
//
// PageSection
// -> Component
//
// --------------------------------------------

import React from "react";
import clsx from "clsx";
import styles from "./PageSection.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PageSectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundImagePosition?:
    | "topLeft"
    | "topRight"
    | "bottomRight"
    | "bottomLeft"
    | "center"
    | "cover";
  children: React.ReactNode;
  screen?: "half" | "threequarters" | "twothirds" | "full" | "content";
  padding?: "sm" | "md" | "lg";
  tag?: "div" | "section";
}

// --------------------------------------------
// Helpers
// --------------------------------------------

const positionMap: Record<
  NonNullable<PageSectionProps["backgroundImagePosition"]>,
  string
> = {
  topLeft: "top left",
  topRight: "top right",
  bottomRight: "bottom right",
  bottomLeft: "bottom left",
  center: "center",
  cover: "center", // cover handled via backgroundSize
};

// --------------------------------------------
// Component
// --------------------------------------------

function PageSection({
  backgroundColor,
  backgroundImage,
  backgroundImagePosition,
  children,
  screen,
  padding = "md",
  tag = "div",
}: PageSectionProps) {
  const Tag = tag;

  const style: React.CSSProperties = {
    ...(backgroundColor ? { backgroundColor } : {}),

    ...(backgroundImage
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:
            backgroundImagePosition && backgroundImagePosition !== "cover"
              ? positionMap[backgroundImagePosition]
              : "center",
          backgroundSize:
            backgroundImagePosition === "cover" ? "cover" : "auto",
        }
      : {}),
  };

  return (
    <Tag
      data-component="PageSection"
      className={clsx(
        styles["page-section"],
        screen && styles[`page-section--${screen}`],
        padding && styles[`page-section--padding-${padding}`],
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}

export default PageSection;
