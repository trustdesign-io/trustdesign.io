import React from "react";

import { PageSection, Layout, Text, LinkGroup, Icon, Image } from "../../../";

import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";
import Link from "../../../03_partials/link";

/* -- Content -- */

import Image1 from "../../../00_assets/images/articles/terminator.png";
import Image2 from "../../../00_assets/images/articles/her.png";

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

const Article2: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="heading-3">
                  Is AI your friend? <br />
                  Exploring generational perspectives
                </Text>
                <Layout topGutter="xl" bottomGutter="xl">
                  <Text appearance="body-3">
                    <em>
                      This article was published on the 9th of January 2025.
                    </em>
                  </Text>
                </Layout>

                <Text appearance="body-2">
                  It's interesting how perceptions of AI differ across
                  generations. In a recent round of research it became apparent
                  that most from older generations - those before Gen Z, view AI
                  through the lens of dystopian science fiction. The Terminator
                  (Authors note: Terminator 2 is the best movie ever made!) and
                  other eighties and nineties films cast AI as a nefarious,
                  uncontrollable force. But is this fear justified, or is it
                  simply a reflection of the anxieties of our era?
                </Text>
                <Layout topGutter="xl" bottomGutter="xl">
                  <Layout grid="50_50">
                    <Layout.Column>
                      <Image
                        src={Image1}
                        alt="An Interdisciplinary Endeavour"
                        fluid
                      />
                    </Layout.Column>
                    <Layout.Column>
                      <Image
                        src={Image2}
                        alt="An Interdisciplinary Endeavour"
                        fluid
                      />
                    </Layout.Column>
                  </Layout>
                </Layout>
                <Text appearance="body-2">
                  In our interviews with Gen-Zers, the fears seem to shift.
                  While the Terminator-style <em>killer robot</em> narrative may
                  seem outdated, a new concern emerges.. overdependence and a
                  loss of authenticity. Films like <em>Her</em> capture this
                  worry beautifully—what happens when AI becomes so personal, so
                  tailored to our needs, that it replaces genuine human
                  connection? and furthermore, how authentic can that connection
                  be?
                </Text>
                <Text appearance="body-2">
                  The question for all generations remains: Can we create AI
                  systems that balance utility with humanity, addressing fears
                  while amplifying the good? Or are we destined to remain
                  divided in our understanding of what AI should be?
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
                    <Link
                      to="https://twitter.com/intent/tweet?text=Is%20AI%20your%20friend%3F%20Exploring%20generational%20perspectives&url=https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives"
                      title="Share this on X"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        console.log("Twitter button clicked");
                        trackShareEvent(
                          "X",
                          "https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives"
                        );
                        setTimeout(() => {
                          window.open(
                            "https://twitter.com/intent/tweet?text=Is%20AI%20your%20friend%3F%20Exploring%20generational%20perspectives&url=https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives",
                            "_blank"
                          );
                        }, 300);
                      }}
                    >
                      <span className="visually-hidden">X</span>
                      <Icon name="x-logo" />
                    </Link>

                    <Link
                      to="https://bsky.app/post?text=Is%20AI%20your%20friend%3F%20Exploring%20generational%20perspectives%20https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives"
                      title="Share this on Bluesky"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        console.log("Bluesky button clicked");
                        trackShareEvent(
                          "Bluesky",
                          "https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives"
                        );
                        setTimeout(() => {
                          window.open(
                            "https://bsky.app/post?text=Is%20AI%20your%20friend%3F%20Exploring%20generational%20perspectives%20https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives",
                            "_blank"
                          );
                        }, 300);
                      }}
                    >
                      <span className="visually-hidden">Bluesky</span>
                      <Icon name="bluesky-logo" />
                    </Link>

                    <Link
                      to="https://www.linkedin.com/shareArticle?mini=true&url=https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives&title=Is%20AI%20your%20friend%3F%20Exploring%20generational%20perspectives&summary=Exploring%20generational%20perspectives%20on%20AI.&source=Robot%20Research"
                      title="Share this on LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        console.log("LinkedIn button clicked");
                        trackShareEvent(
                          "LinkedIn",
                          "https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives"
                        );
                        setTimeout(() => {
                          window.open(
                            "https://www.linkedin.com/shareArticle?mini=true&url=https://www.robotresearch.io/articles/is-ai-your-friend-exploring-generational-perspectives&title=Is%20AI%20your%20friend%3F%20Exploring%20generational%20perspectives&summary=Exploring%20generational%20perspectives%20on%20AI.&source=Robot%20Research",
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

export default Article2;
