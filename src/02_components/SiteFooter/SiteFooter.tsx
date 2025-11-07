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

import { Layout } from "../../02_components/Layout";

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
      <Layout container>
        <div className={clsx(styles["site-footer-inner"])}>{children}</div>
      </Layout>
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default SiteFooter;
