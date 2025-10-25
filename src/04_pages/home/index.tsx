import React from "react";

import { PageSection, Layout, Text, List } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
import Link from "../../03_partials/link";

/* -- Content -- */

const Home: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <div className="visually-hidden">
            <Text tag="h2" appearance="heading-3">
              Latest posts..
            </Text>
          </div>

          <Layout grid="80_20" stack="md">
            <Layout.Column>
              <List marker={false} margin="md">
                <li>
                  <Text appearance="body-1" layout={false}>
                    <Link to="/recognising-parallels-in-hri-and-design-technology">
                      Recognising parallels in HRI and Design Technology
                    </Link>
                  </Text>
                  <Text appearance="body-3">
                    <em>Published in August 2025.</em>
                  </Text>
                </li>
                <li>
                  <Text appearance="body-1" layout={false}>
                    <Link to="/is-ai-your-friend-or-foe-exploring-generational-perspectives">
                      Is AI your friend? Exploring generational perspectives
                    </Link>
                  </Text>
                  <Text appearance="body-3">
                    <em>Published in September 2025.</em>
                  </Text>
                </li>
                <li>
                  <Text appearance="body-1" layout={false}>
                    <Link to="/humanoid-robots-addressing-deep-human-problems">
                      Humanoid Robots: Addressing Deep Human Problems
                    </Link>
                  </Text>
                  <Text appearance="body-3">
                    <em>Published in November 2025.</em>
                  </Text>
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

export default Home;
