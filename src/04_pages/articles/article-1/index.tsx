import React from "react";

import {
  PageSection,
  Layout,
  Text,
  LinkGroup,
  Icon,
  Image,
  breakpoint,
} from "../../../";

import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";
import Link from "../../../03_partials/link";

import { useMediaQuery } from "../../../05_utilities/useMediaQuery.ts";

/* -- Content -- */

import Image1 from "../../../00_assets/images/articles/interdisciplinery-endevour.png";

/* -- GA Event Tracking Function -- */
const trackShareEvent = (platform: string, url: string): void => {
  console.log(`Track Share Event Triggered: Platform=${platform}, URL=${url}`);
  if (typeof window.gtag === "function") {
    window.gtag("event", "share", {
      event_category: "social",
      event_label: platform,
      event_action: "click",
      event_value: 1,
      url: url,
    });
  } else {
    console.warn("Google Analytics (gtag) not found.");
  }
};

const Article_1: React.FC = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.md.value})`);

  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="heading-3">
                  Recognising parallels in HRI and Design Technology
                </Text>
                <Layout topGutter="xl" bottomGutter="xl">
                  <Text appearance="body-3">
                    <em>
                      This article was published on the 2nd of January 2025.
                    </em>
                  </Text>
                </Layout>
                <Text appearance="body-2">
                  My new interest in Robotics is only <em>new</em> in the sense
                  that I’ve have a desire to transition from the entirely
                  digital world of software development to one that incorporates
                  a few more nuts, bolts, actuators, sensors, and, hopefully
                  ..intelligence.
                </Text>
                <Text appearance="body-2">
                  I've long been a keen advocate for the interface as a
                  conversation or negotiation, and with todays <em>Agentic</em>{" "}
                  approach to interfacing I feel like now is certainly the time
                  to expand into HRI.
                </Text>
                <Text appearance="body-2">
                  How we build systems—whether digital or physical—relies on
                  many of the same principles. It follows that some of the same
                  challenges apply too - and I've started to spot some
                  interesting parallels.
                </Text>
                <Text tag="h2" appearance="heading-5">
                  An Interdisciplinary Endeavour
                </Text>
                <Text appearance="body-2">
                  The diagram below appears at the beginning of the book{" "}
                  <em>Human-Robot Interaction, An Introduction</em> by Christoph
                  Bartneck, Tony Belpaeme, Friederike Eyssel, Takayuki Kanda,
                  Merel Keijsers, Selma Šabanović.
                </Text>
                <Text appearance="body-2">
                  The circles represent domains of knowledge and practice, the
                  lines signify barriers in collaboration between disciplines.
                </Text>
                <Text appearance="body-2">
                  I've definitely experienced challenges like this, and even
                  found them to be institutionalised in software development -
                  for example separating Design and Engineering stages, the so
                  called waterfall approach to product development has long been
                  something I find anathema.
                </Text>
                <Layout topGutter="xl" bottomGutter="xl">
                  <div
                    style={{
                      margin: "0 auto",
                      width: isDesktop ? "400px" : "250px",
                    }}
                  >
                    <Image
                      src={Image1}
                      alt="An Interdisciplinary Endeavour"
                      fluid
                    />
                  </div>
                </Layout>
                <Text appearance="body-2">
                  The message here is deliciously reminiscent of a song I’ve
                  been singing to hiring managers and design system teams for a
                  decade:
                </Text>
                <blockquote style={{ padding: isDesktop ? "50px" : "20px" }}>
                  <Text appearance="heading-7">
                    “Researchers, Designers, and Engineers have varying domains
                    of knowledge and different motivations. The key to effective
                    collaboration is to communicate value in a way that each can
                    buy into.”
                  </Text>
                </blockquote>
                <Text appearance="body-2">
                  It's wonderful to discover that what the software industry
                  often overlooks is addressed at the very beginning of my
                  exploration into robotics, and while this may seem like a
                  small thing, it’s incredibly encouraging at the beginning of
                  this journey.
                </Text>
                <br />
                <br />
              </Layout.Column>
              <Layout.Column>
                <Layout topGutter="xl">
                  <Text appearance="body-3" alignment="center">
                    Share this
                  </Text>
                  <LinkGroup alignment="center">
                    {/* Twitter */}
                    <Link
                      to="https://twitter.com/intent/tweet?text=Recognising%20Parallels%20in%20HRI%20and%20Design%20Technology&url=https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology"
                      title="Share this on X"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        console.log("Twitter button clicked");
                        trackShareEvent(
                          "X",
                          "https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology"
                        );
                        setTimeout(() => {
                          window.open(
                            "https://twitter.com/intent/tweet?text=Recognising%20Parallels%20in%20HRI%20and%20Design%20Technology&url=https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology",
                            "_blank"
                          );
                        }, 300);
                      }}
                    >
                      <span className="visually-hidden">X</span>
                      <Icon name="x-logo" />
                    </Link>

                    {/* Bluesky */}
                    <Link
                      to="https://bsky.app/post?text=Recognising%20Parallels%20in%20HRI%20and%20Design%20Technology%20https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology"
                      title="Share this on Bluesky"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        console.log("Bluesky button clicked");
                        trackShareEvent(
                          "Bluesky",
                          "https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology"
                        );
                        setTimeout(() => {
                          window.open(
                            "https://bsky.app/post?text=Recognising%20Parallels%20in%20HRI%20and%20Design%20Technology%20https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology",
                            "_blank"
                          );
                        }, 300);
                      }}
                    >
                      <span className="visually-hidden">Bluesky</span>
                      <Icon name="bluesky-logo" />
                    </Link>

                    {/* LinkedIn */}
                    <Link
                      to="https://www.linkedin.com/shareArticle?mini=true&url=https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology&title=Recognising%20Parallels%20in%20HRI%20and%20Design%20Technology&summary=Exploring%20connections%20between%20robotics%20and%20design%20technology.&source=Robot%20Research"
                      title="Share this on LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        console.log("LinkedIn button clicked");
                        trackShareEvent(
                          "LinkedIn",
                          "https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology"
                        );
                        setTimeout(() => {
                          window.open(
                            "https://www.linkedin.com/shareArticle?mini=true&url=https://www.robotresearch.io/articles/recognising-parallels-in-hri-and-design-technology&title=Recognising%20Parallels%20in%20HRI%20and%20Design%20Technology&summary=Exploring%20connections%20between%20robotics%20and%20design%20technology.&source=Robot%20Research",
                            "_blank"
                          );
                        }, 300);
                      }}
                    >
                      <span className="visually-hidden">LinkedIn</span>
                      <Icon name="linkedin-logo" />
                    </Link>
                  </LinkGroup>
                </Layout>
              </Layout.Column>
            </Layout>
          </article>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Article_1;
