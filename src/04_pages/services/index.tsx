import React from "react";

import { PageSection, Layout, Text } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
// import Link from "../../03_partials/link";

/* -- Content -- */

const Services: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <div className="visually-hidden">
            <Text tag="h2" appearance="h3">
              Services
            </Text>
          </div>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Services;
