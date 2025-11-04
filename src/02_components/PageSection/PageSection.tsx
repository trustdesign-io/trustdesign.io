// --------------------------------------------
//
// PageSection
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
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
  screen?: "half" | "full" | "content";
  padding?: "sm" | "md" | "lg";
  tag?: "div" | "section";
}

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

  const style = {
    ...(backgroundColor && { backgroundColor }),
    ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
  };

  return (
    <Tag
      data-component="PageSection"
      className={clsx(
        styles["page-section"],
        screen && styles[`page-section--${screen}`],
        padding && styles[`page-section--padding-${padding}`],
        backgroundImagePosition &&
          styles[`page-section-backgroundPosition--${backgroundImagePosition}`]
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PageSection;
