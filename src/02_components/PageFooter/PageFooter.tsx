// --------------------------------------------
//
// PageFooter
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./PageFooter.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PageFooterProps {
  // Define your component props here
  children: React.ReactNode;
}

// --------------------------------------------
// Component
// --------------------------------------------

function PageFooter({ children }: PageFooterProps) {
  return (
    <div data-component="PageFooter" className={clsx(styles["page-footer"])}>
      <div className={clsx(styles["page-footer-inner"])}>{children}</div>
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PageFooter;
