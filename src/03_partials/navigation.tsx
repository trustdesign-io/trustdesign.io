import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Flyout, Layout, PrimaryNavigation, PrimaryNavigationItem } from "../";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Flyout position="left" flyoutTitle="Menu">
        <PrimaryNavigation>
          {/* <PrimaryNavigationItem active={isActive("/")}>
            <Link to="/">Home</Link>
          </PrimaryNavigationItem> */}
          <PrimaryNavigationItem active={isActive("/services")}>
            <Link to="/services">Services</Link>
          </PrimaryNavigationItem>
          <PrimaryNavigationItem active={isActive("/case-studies")}>
            <Link to="/case-studies">Case studies</Link>
          </PrimaryNavigationItem>
          <PrimaryNavigationItem active={isActive("/tools")}>
            <Link to="/tools">Tools</Link>
          </PrimaryNavigationItem>
          <PrimaryNavigationItem active={isActive("/about-us")}>
            <Link to="/about-us">About us</Link>
          </PrimaryNavigationItem>
        </PrimaryNavigation>
      </Flyout>
    </>
  );
};

export default Navigation;
