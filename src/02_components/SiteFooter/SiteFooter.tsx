// --------------------------------------------
//
// SiteFooter
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./SiteFooter.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface SiteFooterProps {
  // Define your component props here
  children: React.ReactNode;
}

// --------------------------------------------
// Component
// --------------------------------------------

function SiteFooter({ children }: SiteFooterProps) {
  return (
    <div data-component="SiteFooter" className={clsx(styles["site-footer"])}>
      {children}
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default SiteFooter;
