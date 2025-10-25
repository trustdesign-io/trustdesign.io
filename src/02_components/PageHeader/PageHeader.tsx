// --------------------------------------------
//
// PageHeader
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./PageHeader.module.css";

import { Layout } from "../../";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PageHeaderProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------

function PageHeader({ children, backgroundColor }: PageHeaderProps) {
  return (
    <div
      data-component="PageHeader"
      className={clsx(styles["page-header"])}
      style={{ backgroundColor }}
    >
      <div className={clsx(styles["page-header_inner"])}>{children}</div>
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PageHeader;
