import React from "react";

import {
  PageSection,
  Layout,
  Text,
  List,
  Link,
  ButtonGroup,
  Button,
  Card,
} from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
// import Link from "../../03_partials/link";

/* -- Content -- */

const Tools: React.FC = () => {
  async function handlePurchase() {
    const res = await fetch("/api/checkout.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url; // go to Stripe Checkout
  }

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

                <Layout bottomGutter="lg">
                  <Card>
                    <Card.Header padded>
                      <Text tag="h2" appearance="h7" layout={false}>
                        Design System Inspector (Free)
                      </Text>
                    </Card.Header>
                    <Card.Body>
                      <Text appearance="body-3">
                        Instantly maps design system components on any webpage.
                        Highlights visual patterns, custom elements, and usage
                        consistency - helping you see how your system behaves in
                        the wild.
                      </Text>
                    </Card.Body>
                  </Card>
                </Layout>
                <Layout bottomGutter="lg">
                  <Card>
                    <Card.Header padded>
                      <Text tag="h2" appearance="h7" layout={false}>
                        Copy Designer (Free)
                      </Text>
                    </Card.Header>
                    <Card.Body>
                      <Text appearance="body-3">
                        Lets you edit live website copy directly in the browser
                        and export changes as a formatted copy deck. Ideal for
                        writers and UX teams refining tone, clarity, and
                        alignment.
                      </Text>
                    </Card.Body>
                  </Card>
                </Layout>
                <Layout bottomGutter="lg">
                  <Card>
                    <Card.Header padded>
                      <Text tag="h2" appearance="h7" layout={false}>
                        Trust Design Audit (Premium)
                      </Text>
                    </Card.Header>
                    <Card.Body>
                      <Text appearance="body-3">
                        Analyses any webpage across ten evidence-based trust
                        factors - from transparency and consent to honesty in
                        influence - and generates an overall Trust Score with
                        category insights. Learn more in our article{" "}
                        <Link
                          href="/articles/trust-design-audit-what-it-does-and-why-it-matters"
                          target="_self"
                        >
                          Trust Design Audit: what it does and why it matters
                        </Link>{" "}
                        .
                      </Text>
                    </Card.Body>
                  </Card>
                </Layout>
              </Layout.Column>
              <Layout.Column>
                <Text tag="h2" appearance="h6">
                  Download
                </Text>
                <Text appearance="body-2">
                  <Link href="/downloads/trust-design-toolkit.zip">
                    Trust Design Toolkit (zip)
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
                <Text tag="h2" appearance="h6">
                  Premium license
                </Text>
                <Text appearance="body-2">
                  Unlock the premium Trust Design Audit. Your purchase issues a
                  license key you can paste into the Toolkit’s Settings tab to
                  enable premium features.
                </Text>
                <Text appearance="body-2">
                  Click here to purchase the £12.99 premium license
                </Text>

                <ButtonGroup>
                  <Button onClick={handlePurchase}>
                    Purchase premium license
                  </Button>
                </ButtonGroup>
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
