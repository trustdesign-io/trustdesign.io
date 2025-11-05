import React from "react";

import { PageSection, Layout, Text } from "../../../";

import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";
// import Link from "../../03_partials/link";

/* -- Content -- */

const Tools: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <Layout bottomGutter="xl">
            <Layout bottomGutter="xl">
              <Text tag="h1" appearance="h4">
                Premium tools
              </Text>
            </Layout>
            <Layout grid="60_40" stack="md" gap="xl">
              <Layout.Column>One</Layout.Column>
              <Layout.Column>Two</Layout.Column>
            </Layout>
          </Layout>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Tools;
