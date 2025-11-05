import React from "react";

import { PageSection, Layout, Text, Button, ButtonGroup } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";

/* -- Content -- */

const Home: React.FC = () => {
  return (
    <Layout wrapper className="homepage">
      <Header />
      <PageSection screen="half">
        <Layout container>
          <div className="visually-hidden">
            <Text appearance="h3">Latest article..</Text>
          </div>
          <Layout grid="70_30" stack="md">
            <Layout.Column>
              <Text appearance="h1">
                Trust Design Audit: what it does and why it matters
              </Text>
              <Text appearance="body-1">
                Trust is the invisible architecture of digital products. People
                decide to read, buy, sign up, or walk away based on whether an
                interface feels competent, honest, and respectful.
              </Text>
              <Layout topGutter="lg">
                <ButtonGroup>
                  <Button
                    url="/trust-design-audit-what-it-does-and-why-it-matters"
                    appearance="body-1"
                  >
                    Read this article
                  </Button>
                  <Button url="/articles" appearance="body-1" tier="secondary">
                    More articles
                  </Button>
                </ButtonGroup>
              </Layout>

              {/* <Text appearance="h1">
                Designing Trust for emerging technology
              </Text>
              <Text appearance="body-1">
                Trust is one of our oldest survival instincts - the quiet glue
                that made civilization possible.
              </Text>
              <Text appearance="body-1">
                The same paradigm from which cooperation emerged now governs our
                relationship with technology, and we must design technology that
                deserves the trust it depends on.
              </Text>
              <Layout topGutter="lg">
                <ButtonGroup>
                  <Button
                    url="/designing-trust-for-emerging-technology"
                    appearance="body-1"
                  >
                    Read this article
                  </Button>
                </ButtonGroup>
              </Layout> */}
            </Layout.Column>
            <Layout.Column>&nbsp;</Layout.Column>
          </Layout>
        </Layout>
      </PageSection>

      <PageSection screen="half">
        <Layout container>
          <Layout grid="50_50" stack="md">
            <Layout.Column>
              <Text tag="h2" appearance="h5">
                About us
              </Text>
              <Text appearance="body-1">
                Our work explores how trust can be understood, measured, and
                designed into emerging technologies.
              </Text>
              <Text appearance="body-1">
                We build tools that make the mechanics of trust visible -
                helping designers, businesses, and researchers see where
                technology supports human intention.
              </Text>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Home;
