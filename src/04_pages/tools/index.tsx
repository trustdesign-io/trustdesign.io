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
      <PageSection screen="content">
        <Layout container>
          <Layout bottomGutter="xl">
            <Layout bottomGutter="xl">
              <Text tag="h1" appearance="h4">
                Tools
              </Text>
            </Layout>
            <Layout grid="60_40" stack="md" gap="xl">
              <Layout.Column>
                <Text appearance="h6">
                  We don’t just study trust - we build with it.
                </Text>
                <Text appearance="body-2">
                  Our tools are made to help designers, developers, and
                  researchers explore how trust shows up in the smallest details
                  of digital experience. The current{" "}
                  <em>Trust Design Toolkit</em> is a free Chrome extension that
                  brings three powerful tools together:
                </Text>

                <Text tag="h2" appearance="h7">
                  Design System Inspector (Free)
                </Text>
                <Text appearance="body-2">
                  Instantly maps design system components on any webpage.
                  Highlights visual patterns, custom elements, and usage
                  consistency - helping you see how your system behaves in the
                  wild.
                </Text>

                <Text tag="h2" appearance="h7">
                  Copy Designer (Free)
                </Text>
                <Text appearance="body-2">
                  Lets you edit live website copy directly in the browser and
                  export changes as a formatted copy deck. Ideal for writers and
                  UX teams refining tone, clarity, and alignment.
                </Text>

                <Text tag="h3" appearance="h7">
                  Trust Design Audit (Donation)
                </Text>
                <Text appearance="body-2">
                  Analyses any webpage across ten evidence-based trust factors -
                  from transparency and consent to honesty in influence - and
                  generates an overall Trust Score with category insights. Learn
                  more in our article{" "}
                  <Link
                    href="/articles/trust-design-audit-what-it-does-and-why-it-matters"
                    target="_self"
                  >
                    Trust Design Audit: what it does and why it matters
                  </Link>
                </Text>
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
                  following steps:
                </Text>

                <List tag="ol" appearance="body-2">
                  <li>Unpack the zip file</li>
                  <li>
                    Go to <em>chrome://extensions/</em> in your Chrome web
                    browser
                  </li>
                  <li>
                    Toggle <em>Developer mode</em> on
                  </li>
                  <li>
                    Press <em>Load unpacked extension</em> to select the upacked
                    zip file
                  </li>
                  <li>
                    You can now find the extension in the toolbar of Chrome
                  </li>
                </List>
              </Layout.Column>
            </Layout>
          </Layout>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Tools;
