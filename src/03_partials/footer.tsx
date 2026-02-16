import React from "react";

import { Layout, PageFooter, SiteFooter, Text, LinkGroup, Icon } from "../";
import Link from "../03_partials/link";

const Footer: React.FC = () => {
  return (
    <>
      <PageFooter>
        <Layout container>
          <Text appearance="body-3" alignment="center" visuallyhidden>
            Connect with us
          </Text>
        </Layout>
      </PageFooter>
      <SiteFooter>
        <LinkGroup alignment="right">
          <Link
            to="https://github.com/trustdesignio"
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
        {/* <Text>Trust Design Est. 2025</Text> */}
      </SiteFooter>
    </>
  );
};

export default Footer;
