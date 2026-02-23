import React from "react";

import { SiteFooter, Text, LinkGroup, Icon } from "../";
import Link from "../03_partials/link";

const Footer: React.FC = () => {
  return (
    <>
      {/* <PageFooter></PageFooter> */}
      <SiteFooter>
        <LinkGroup alignment="right">
          <Link
            to="https://github.com/trustdesign-io"
            title="Find us on Github"
            target="_blank"
          >
            <span className="visually-hidden">Medium</span>
            <Icon name="github-logo" />
          </Link>
          <Link
            to="https://x.com/trustdesignio"
            title="Find us on X"
            target="_blank"
          >
            <span className="visually-hidden">X</span>
            <Icon name="x-logo" />
          </Link>
        </LinkGroup>
        <Text>
          <Link to="/privacy">Privacy</Link>
        </Text>
      </SiteFooter>
    </>
  );
};

export default Footer;
