import React from "react";

import {
  PageSection,
  Layout,
  Text,
  LinkGroup,
  Icon,
  Image,
  List,
} from "../../../";

import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";
import Link from "../../../03_partials/link";

/* -- Content -- */

import Image1 from "../../../00_assets/images/articles/bladerunner.jpeg";

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

const Article3: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="heading-3">
                  Humanoid Robots: Addressing Deep Human Problems
                </Text>
                <Layout topGutter="xl" bottomGutter="xl">
                  <Text appearance="body-3">
                    <em>
                      This article was published on the 16th of January 2025.
                    </em>
                  </Text>
                </Layout>

                <Text appearance="body-2">
                  As technology advances, we are increasingly faced with
                  questions about the future of humanity and our relationship
                  with machines. One compelling area is the role of humanoid
                  robots in addressing problems like loneliness, trauma, and the
                  search for meaning.
                </Text>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Image
                    src={Image1}
                    alt="Transhumanism: A Fork in the Road"
                    fluid
                  />
                </Layout>

                <Text tag="h2" appearance="heading-5">
                  Transhumanism: A Fork in the Road
                </Text>
                <Text appearance="body-2">
                  The transhuman movement envisions humans merging with machines
                  or uploading their consciousness to AI systems. While
                  intriguing, this path neglects our natural mechanism for
                  immortality—passing on our genes. This process, refined by
                  evolution, ensures continuity. Instead of striving to become
                  machines, we should create humanoid robots inspired by
                  biology, echoing Blade Runner, where artificial beings embody
                  human qualities, including imperfections.
                </Text>
                <Text tag="h2" appearance="heading-5">
                  Biological Robots and Human Imperfections
                </Text>
                <Text appearance="body-2">
                  Biological robots, mimicking human form and function, could
                  enhance life as companions, caregivers, or emotional supports.
                  The best humanoid robot would, by definition, be a human we
                  create, complete with imperfections that define our empathy,
                  struggle, and growth. These traits are vital for meaningful
                  connections between humans and robots.
                </Text>
                <Text tag="h2" appearance="heading-5">
                  A Balanced Vision
                </Text>
                <Text appearance="body-2">
                  Humanoid robots should enhance human capabilities without
                  replacing them. Designed with a deep understanding of human
                  needs, they could:
                </Text>

                <List>
                  <li>Mitigate loneliness with companionship.</li>
                  <li>Assist in therapy as non-judgmental listeners.</li>
                  <li>Navigate complex social cues to improve interactions.</li>
                </List>
                <Text appearance="body-2">
                  By focusing on biologically inspired robotics, we respect the
                  natural order and ensure technology enhances, rather than
                  supplants, the human experience.
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

export default Article3;
