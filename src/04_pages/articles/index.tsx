import React from "react";

import { PageSection, Layout, Text, List } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
import Link from "../../03_partials/link";

/* -- Content -- */

const Articles: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <Layout bottomGutter="xl">
            <Text tag="h1" appearance="h4">
              Recent articles
            </Text>
          </Layout>
          <Layout grid="80_20" stack="md">
            <Layout.Column>
              <List marker={false} margin="md" appearance="body-1">
                <li>
                  <Link to="/trust-design-audit-what-it-does-and-why-it-matters">
                    Trust Design Audit: what it does and why it matters
                  </Link>
                  <Text appearance="body-3">Published in December 2025.</Text>
                </li>
                <li>
                  <Link to="/designing-trust-for-emerging-technology">
                    Designing Trust for emerging technology
                  </Link>
                  <Text appearance="body-3">Published in November 2025.</Text>
                </li>
              </List>
            </Layout.Column>
            <Layout.Column>&nbsp;</Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Articles;
