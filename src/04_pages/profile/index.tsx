import React from "react";

import {
  PageSection,
  Layout,
  Text,
  LinkGroup,
  Icon,
  Link,
  Avatar,
  Logo,
} from "../../";

import { Carousel } from "../../02_components/Carousel";

import DannyChambers from "../../00_assets/images/DannyClaydenChambers-1.jpg";
import JBChaykowski from "../../00_assets/images/testimonials/J.B.Chaykowski.jpeg";
import NeilOates from "../../00_assets/images/testimonials/NeilOates.jpeg";
import ChristianMacedo from "../../00_assets/images/testimonials/ChristianMacedo.jpeg";
import SimonCohen from "../../00_assets/images/testimonials/SimonCohen.jpeg";
import EricEnders from "../../00_assets/images/testimonials/EricEnders.jpeg";
import JamesHirst from "../../00_assets/images/testimonials/JamesHirst.jpeg";

/* -- Content -- */

const Profile: React.FC = () => {
  return (
    <Layout wrapper>
      {/* ------------------------------ */}
      {/* Section 1: Intro / Links       */}
      {/* ------------------------------ */}
      <PageSection>
        <Layout container>
          <Layout grid="55">
            <Layout.Column>
              <Layout bottomGutter="lg">
                <Avatar src={DannyChambers} size="xl" />
              </Layout>

              <Text tag="h1" appearance="h4">
                Design technology, human-centred interfaces and design systems
              </Text>

              <Text appearance="body-1">
                I&apos;m Danny Chambers — a Design Technologist with 19 years of
                professional experience working at the intersection of user
                experience design and interface development.
              </Text>

              <Text appearance="body-1">
                I specialise in rapid prototyping (human and agentic), design
                systems and nurturing effective designer–developer
                relationships.
              </Text>

              <Text appearance="body-1">
                If you’re building something and want to deliver robust,
                scalable interfaces - lets talk!
              </Text>

              <Text appearance="body-2" alignment="center">
                <Link url="/">trustdesign.io</Link>
              </Text>

              <Layout topGutter="lg">
                <LinkGroup alignment="center">
                  <Link url="mailto:danny@trustdesign.io" title="Email">
                    <span className="visually-hidden">Email</span>
                    <Icon name="email" />
                  </Link>
                  <Link
                    url="https://www.linkedin.com/in/dannyclaydenchambers"
                    title="Find me on LinkedIn"
                    target="_blank"
                  >
                    <span className="visually-hidden">LinkedIn</span>
                    <Icon name="linkedin-logo" />
                  </Link>

                  <Link
                    url="https://github.com/dannychambers"
                    title="Find me on Github"
                    target="_blank"
                  >
                    <span className="visually-hidden">Github</span>
                    <Icon name="github-logo" />
                  </Link>

                  <Link
                    url="https://x.com/claydenchambers"
                    title="Find me on X"
                    target="_blank"
                  >
                    <span className="visually-hidden">X</span>
                    <Icon name="x-logo" />
                  </Link>
                </LinkGroup>
              </Layout>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>

      {/* ------------------------------ */}
      {/* Section 2: Testimonials        */}
      {/* ------------------------------ */}
      <PageSection>
        <Layout container>
          <Layout grid="55">
            <Layout.Column>
              <Text appearance="h7" visuallyhidden>
                Testimonials
              </Text>

              <Carousel
                showControls
                loop
                prevIcon="chevron-left"
                nextIcon="chevron-right"
                slidesPerViewMobile={1.05}
                slidesPerViewTablet={2}
                slidesPerViewDesktop={3}
                spaceBetween={16}
                items={[
                  { id: "jb" },
                  { id: "neil" },
                  { id: "eric" },
                  { id: "james" },
                  { id: "christian" },
                  { id: "simon" },
                ]}
                renderSlide={(item) => {
                  if (item.id === "jb") {
                    return (
                      <Layout bottomGutter="lg">
                        <Layout bottomGutter="md">
                          <Avatar size="md" src={JBChaykowski} />
                        </Layout>
                        <Layout bottomGutter="sm">
                          <Text
                            tag="h3"
                            appearance="h7"
                            alignment="center"
                            layout={false}
                          >
                            J.B. Chaykowsky
                          </Text>
                        </Layout>
                        <Text tag="h4" appearance="body-3" alignment="center">
                          Global Design Leader @ Intuit
                        </Text>
                        <Text appearance="body-3" alignment="center">
                          Danny came to deliver a{" "}
                          <em>forward facing prototype</em> of how our product
                          could evolve - and he absolutely nailed it.
                        </Text>
                      </Layout>
                    );
                  }

                  if (item.id === "neil") {
                    return (
                      <Layout bottomGutter="lg">
                        <Layout bottomGutter="md">
                          <Avatar size="md" src={NeilOates} />
                        </Layout>
                        <Layout bottomGutter="sm">
                          <Text
                            tag="h3"
                            appearance="h7"
                            alignment="center"
                            layout={false}
                          >
                            Neil Oates
                          </Text>
                        </Layout>
                        <Text tag="h4" appearance="body-3" alignment="center">
                          Partnership prosperity at Intuit
                        </Text>
                        <Text appearance="body-3" alignment="center">
                          Danny&apos;s skill in prototyping customer journeys
                          has been critical in our journey to deliver for
                          businesses across the UK.
                        </Text>
                      </Layout>
                    );
                  }

                  if (item.id === "eric") {
                    return (
                      <Layout bottomGutter="lg">
                        <Layout bottomGutter="md">
                          <Avatar size="md" src={EricEnders} />
                        </Layout>
                        <Layout bottomGutter="sm">
                          <Text
                            tag="h3"
                            appearance="h7"
                            alignment="center"
                            layout={false}
                          >
                            Eric Enders
                          </Text>
                        </Layout>
                        <Text tag="h4" appearance="body-3" alignment="center">
                          Product Director, Tesco
                        </Text>
                        <Text appearance="body-3" alignment="center">
                          Danny has resolved many customer experience issues and
                          has been key in setting the tone for a user centred
                          culture.
                        </Text>
                      </Layout>
                    );
                  }

                  if (item.id === "james") {
                    return (
                      <Layout bottomGutter="lg">
                        <Layout bottomGutter="md">
                          <Avatar size="md" src={JamesHirst} />
                        </Layout>
                        <Layout bottomGutter="sm">
                          <Text
                            tag="h3"
                            appearance="h7"
                            alignment="center"
                            layout={false}
                          >
                            James Hirst
                          </Text>
                        </Layout>
                        <Text tag="h4" appearance="body-3" alignment="center">
                          Co Founder @ Tyk
                        </Text>
                        <Text appearance="body-3" alignment="center">
                          Creativity and Technical aptitude roll together with
                          Danny - a change-maker you can trust.
                        </Text>
                      </Layout>
                    );
                  }

                  if (item.id === "christian") {
                    return (
                      <Layout bottomGutter="lg">
                        <Layout bottomGutter="md">
                          <Avatar size="md" src={ChristianMacedo} />
                        </Layout>
                        <Layout bottomGutter="sm">
                          <Text
                            tag="h3"
                            appearance="h7"
                            alignment="center"
                            layout={false}
                          >
                            Christian Macedo
                          </Text>
                        </Layout>
                        <Text tag="h4" appearance="body-3" alignment="center">
                          TPM at Hurtigruten
                        </Text>
                        <Text appearance="body-3" alignment="center">
                          Danny led the the design system effort at Hurtigruten.
                          Commitment to quality was evident throughout.
                        </Text>
                      </Layout>
                    );
                  }

                  if (item.id === "simon") {
                    return (
                      <Layout bottomGutter="lg">
                        <Layout bottomGutter="md">
                          <Avatar size="md" src={SimonCohen} />
                        </Layout>
                        <Layout bottomGutter="sm">
                          <Text
                            tag="h3"
                            appearance="h7"
                            alignment="center"
                            layout={false}
                          >
                            Simon Cohen
                          </Text>
                        </Layout>
                        <Text tag="h4" appearance="body-3" alignment="center">
                          Product Leader at Tesco
                        </Text>
                        <Text appearance="body-3" alignment="center">
                          Danny is an expert prototyper. He brings a lot of
                          experience and guidance - coaching and gelling the
                          team together.
                        </Text>
                      </Layout>
                    );
                  }

                  return null;
                }}
              />
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>

      {/* ------------------------------ */}
      {/* Section 3: Clients             */}
      {/* ------------------------------ */}
      <PageSection>
        <Text appearance="h7" visuallyhidden>
          Clients
        </Text>
        <Layout container>
          <Layout grid="75">
            <Layout.Column>
              <Layout grid="25_25_25_25">
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo client="elastic" alt="Elastic" size="md" />
                    </Layout>
                  </div>
                </Layout.Column>
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo client="intuit" alt="Intuit" size="md" />
                    </Layout>
                  </div>
                </Layout.Column>
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo
                        client="hurtigruten"
                        alt="Hurtigruten Expeditions"
                        size="md"
                      />
                    </Layout>
                  </div>
                </Layout.Column>
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo client="mindgym" alt="MindGym" size="md" />
                    </Layout>
                  </div>
                </Layout.Column>
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo client="tesco" alt="Tesco" size="md" />
                    </Layout>
                  </div>
                </Layout.Column>
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo client="thisplace" alt="This Place" size="md" />
                    </Layout>
                  </div>
                </Layout.Column>
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo client="akqa" alt="AKQA" size="md" />
                    </Layout>
                  </div>
                </Layout.Column>
                <Layout.Column>
                  <div style={{ height: "150px" }}>
                    <Layout verticalAlign="middle" horizontalAlign="middle">
                      <Logo client="readingroom" alt="reading Room" size="md" />
                    </Layout>
                  </div>
                </Layout.Column>
              </Layout>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
    </Layout>
  );
};

export default Profile;
