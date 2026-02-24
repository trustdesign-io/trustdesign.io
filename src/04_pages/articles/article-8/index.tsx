import React from "react";
import { PageSection, Layout, Text, List, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_8: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  The Ethics of Persuasion
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published in June 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Persuasion Is Inevitable
                  </Text>
                  <Text appearance="body-2">
                    Every interface exerts influence. From button placement to
                    copy tone to the structure of a form, design inevitably
                    nudges behaviour—sometimes gently, sometimes forcefully.
                    There is no neutral interaction. The ethical question is not
                    whether a product persuades, but whether that persuasion
                    aligns with a person’s understanding, intent, and wellbeing.
                    When a flow amplifies vulnerability, exploits limited
                    attention, or pushes people toward commitments they wouldn’t
                    make under clear conditions, persuasion becomes
                    manipulation.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    When Persuasion Crosses the Line
                  </Text>
                  <Text appearance="body-2">
                    Manipulation occurs when a product benefits from a user’s
                    confusion or impaired decision-making. Unlike ethical
                    influence, manipulative patterns obscure cost, meaning, or
                    consequence. Common examples include:
                    <br />
                    <br />
                    • hiding decline or opt‑out options
                    <br />
                    • preselecting high‑commitment defaults
                    <br />
                    • adding artificial urgency
                    <br />
                    • triggering emotional pressure or shame
                    <br />
                    <br />
                    These patterns may boost short-term metrics, but they
                    undermine long-term trust. When people feel tricked, they
                    may comply once—but they rarely return willingly.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Three Tests for Ethical Influence
                  </Text>
                  <Text appearance="body-2">
                    Trust Design uses three practical tests to assess whether a
                    pattern is ethical or coercive:
                    <br />
                    <br />
                    <strong>1. Clarity Test:</strong> Would a reasonable person
                    understand the decision without extra research?
                    <br />
                    <br />
                    <strong>2. Alignment Test:</strong> Does the intended
                    outcome genuinely serve the user—or just the business?
                    <br />
                    <br />
                    <strong>3. Exposure Test:</strong> Would we feel comfortable
                    if this screen were publicly shared and scrutinised?
                    <br />
                    <br />
                    If any of these tests fail, the pattern is likely
                    manipulative and needs redesign.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Designing With Rather Than At People
                  </Text>
                  <Text appearance="body-2">
                    Ethical persuasion treats users as collaborators, not
                    targets. This means respecting autonomy: providing
                    reversible choices, explaining trade-offs, giving time to
                    think, and making exits clear. Trust‑focused usability
                    testing and interviews often reveal subtle pressure
                    points—moments where users hesitate, feel boxed in, or
                    cannot articulate why something feels “off.” These signals
                    matter. Ethical persuasion seeks to eliminate them.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Long-Term Trust Over Short-Term Gains
                  </Text>
                  <Text appearance="body-2">
                    Conversion pressure is a common source of manipulation.
                    Businesses optimising for short-term metrics may push people
                    toward commitments through friction, misdirection, or
                    emotional pressure. While this may improve dashboards
                    temporarily, it damages trust, increases complaints, and
                    draws regulatory attention. The most successful products are
                    those people recommend freely—not reluctantly.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Operationalising Ethical Persuasion
                  </Text>
                  <Text appearance="body-2">
                    Values must be embedded in practice, not stated abstractly.
                    This means integrating ethics checkpoints into design
                    reviews, documenting decision rationale, banning harmful
                    defaults, and encouraging dissent during planning. The Trust
                    Design Toolkit surfaces coercive signals in copy,
                    components, and flow structures, giving teams concrete
                    evidence to guide improvement.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    A More Respectful Future for Interface Design
                  </Text>
                  <Text appearance="body-2">
                    The distinction between persuasion and manipulation will
                    sharpen as the industry matures—not because designers
                    suddenly become more virtuous, but because trust becomes a
                    competitive advantage. Ethical persuasion lowers cognitive
                    load, builds confidence, and signals respect. When people
                    feel a product is acting with them rather than against them,
                    they invest more deeply—not only with their time, but with
                    their belief.
                  </Text>

                  <Text tag="h2" appearance="h6">
                    Selected references
                  </Text>
                  <List appearance="body-2">
                    <li>
                      Fogg, B.J. (2003).{" "}
                      <em>
                        Persuasive Technology: Using Computers to Change What We
                        Think and Do.
                      </em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/book/10.5555/772072"
                        target="_blank"
                      >
                        Morgan Kaufmann
                      </Link>
                      .
                    </li>
                    <li>
                      Gray, C.M. et al. (2018).{" "}
                      <em>The Dark (Patterns) Side of UX Design.</em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/10.1145/3173574.3174108"
                        target="_blank"
                      >
                        CHI
                      </Link>
                      .
                    </li>
                    <li>
                      Narayanan, A. et al. (2020).{" "}
                      <em>Dark Patterns: Past, Present, and Future.</em>{" "}
                      <Link
                        href="https://arxiv.org/abs/2007.10712"
                        target="_blank"
                      >
                        arXiv
                      </Link>
                      .
                    </li>
                    <li>
                      UK CMA.{" "}
                      <Link
                        href="https://www.gov.uk/government/publications/dark-patterns-preventing-online-manipulation"
                        target="_blank"
                      >
                        Dark Patterns Guidance
                      </Link>
                      .
                    </li>
                  </List>
                </Layout>
              </Layout.Column>
              <Layout.Column>&nbsp;</Layout.Column>
            </Layout>
          </article>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Article_8;
