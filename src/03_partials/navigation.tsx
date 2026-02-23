import React from "react";
import { Link, useLocation } from "react-router-dom";
import { breakpoint } from "../01_foundation/dimension/dimension.ts";
import { useMediaQuery } from "../05_utilities/useMediaQuery.ts";
import { Flyout, Avatar, PrimaryNavigation, PrimaryNavigationItem } from "../";

import DannyChambers from "../00_assets/images/DannyClaydenChambers.jpg";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isDesktopLarge = useMediaQuery(`(min-width: ${breakpoint.lg.value})`);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Flyout position="left" flyoutTitle="Menu">
        <PrimaryNavigation>
          <PrimaryNavigationItem active={isActive("/")}>
            <Link to="/">Home</Link>
          </PrimaryNavigationItem>
          {/* <PrimaryNavigationItem active={isActive("/services")}>
            <Link to="/services">Services</Link>
          </PrimaryNavigationItem> */}
          <PrimaryNavigationItem active={isActive("/articles")}>
            <Link to="/articles">Articles</Link>
          </PrimaryNavigationItem>
          {/* <PrimaryNavigationItem active={isActive("/case-studies")}>
            <Link to="/case-studies">Case studies</Link>
          </PrimaryNavigationItem> */}
          <PrimaryNavigationItem active={isActive("/tools")}>
            <Link to="/tools">Tools</Link>
          </PrimaryNavigationItem>
        </PrimaryNavigation>
        <div
          {...(isDesktopLarge
            ? {}
            : {
                style: {
                  position: "absolute",
                  top: "120px",
                  left: "50%",
                  marginLeft: "-30px",
                  borderRadius: "50%",
                },
              })}
        >
          <Link to="/dannyclaydenchambers" target="_blank">
            <Avatar src={DannyChambers} size="xs" />
          </Link>
        </div>
      </Flyout>
    </>
  );
};

export default Navigation;
