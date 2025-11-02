import React from "react";

import { PageSection, Layout, Text, List, Link } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
// import Link from "../../03_partials/link";

/* -- Content -- */

const Tools: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="half">
        <Layout container>
          <Layout grid="70_30" stack="md" gap="xl">
            <Layout.Column>
              <Layout bottomGutter="xl">
                <Text tag="h1" appearance="h4">
                  Tools
                </Text>
              </Layout>
              <Layout bottomGutter="xl">
                <Text appearance="h6">
                  We don’t just study trust — we build with it.
                </Text>
                <Text appearance="body-1">
                  Our tools are made to help designers, developers, and
                  researchers explore how trust shows up in the smallest details
                  of digital experience.
                </Text>
                <Text appearance="body-1">
                  The current <em>Trust Design Toolkit</em> is a free Chrome
                  extension that brings two powerful tools together:
                </Text>
                <Layout topGutter="xl" bottomGutter="xl">
                  <List appearance="body-1">
                    <li>
                      <strong>Design System Inspector</strong> — visualizes
                      component patterns on any webpage.
                    </li>
                    <li>
                      <strong>Copy Designer</strong> — lets you edit and export
                      live website copy as a deck.
                    </li>
                  </List>
                </Layout>
                <Text appearance="body-1">
                  Both are built to be fast, minimal, and privacy-safe — running
                  entirely in your browser.
                </Text>

                {/* <Text appearance="body-2">
                  Coming soon: the <strong>Trust Design Audit</strong>, an
                  addition to the Toolkit that evaluates websites for
                  trustworthiness and transparency.
                </Text> */}
              </Layout>
            </Layout.Column>
            <Layout.Column>
              <Text tag="h2" appearance="h6">
                Download
              </Text>
              <Text appearance="body-2">
                <Link href="/downloads/trust-design-toolkit-v1.1.4.zip">
                  Trust Design Toolkit v1.1.4 (zip)
                </Link>
              </Text>
              <Text tag="h3" appearance="h7">
                Installation
              </Text>
              <Text appearance="body-2">
                Once you have downloaded the zip file, install with the
                followinfg steps:
              </Text>

              <List tag="ol" appearance="body-2">
                <li>Uppack the zip file</li>
                <li>
                  Go to <em>chrome://extensions/</em> in your Chrome web browser
                </li>
                <li>
                  Toggle <em>Developer mode</em> on
                </li>
                <li>
                  Press <em>Load unpacked extension</em> to select the upacked
                  zip file
                </li>
                <li>You can now find the extension in the toolbar of Chrome</li>
              </List>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Tools;
