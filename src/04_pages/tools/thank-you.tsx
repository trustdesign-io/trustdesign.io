import React from "react";

import { PageSection, Layout, Text, Link } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
// import Link from "../../03_partials/link";

/* -- Content -- */

const ThankYou: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <Layout bottomGutter="xl">
            <Text tag="h1" appearance="h4" alignment="center">
              Thank you.
            </Text>
          </Layout>
          <Text appearance="body-1" alignment="center">
            You will recieve your license key in an email shortly.
          </Text>
          <Text appearance="body-1" alignment="center">
            <Link url="/">Home</Link>
          </Text>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default ThankYou;
