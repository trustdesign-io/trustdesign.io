import React from "react";
import { PageHeader, Logo, Text } from "../";
import Navigation from "../03_partials/navigation";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <PageHeader>
      <Logo
        size="xs"
        alt="Trust Design logo"
        wordmark
        url="/"
        tag={isHomePage ? "h1" : "span"}
      />
      <span className="visually-hidden">Trust Design</span>
      <span className="visually-hidden">
        <Text appearance="body-2">
          Trustworthy design for emerging technology
        </Text>
      </span>
      <Navigation />
    </PageHeader>
  );
};

export default Header;
