import React from "react";

import { PageSection, Layout, Text } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
// import Link from "../../03_partials/link";

/* -- Content -- */

const CaseStudies: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <div className="visually-hidden">
            <Text tag="h2" appearance="heading-3">
              Case studies
            </Text>
          </div>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default CaseStudies;
