import React from "react";
import { PageSection, Layout, Text, List, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_4: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  A Brief History of Manipulative Design
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published on February 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    How Manipulative Design Took Root
                  </Text>
                  <Text appearance="body-2">
                    Manipulative design did not emerge suddenly—it evolved
                    through a series of incentives, cultural shifts, and
                    technological milestones. Early digital interfaces were
                    simple, static, and largely informational. Manipulation
                    became possible only when systems began collecting
                    behavioural data, personalising experiences, and measuring
                    engagement at scale. Once products could adapt to users,
                    they also gained the power to exploit them.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Birth of Persuasion Architecture
                  </Text>
                  <Text appearance="body-2">
                    In the late 1990s and early 2000s, the commercial web
                    discovered the value of interaction metrics: clicks, dwell
                    time, subscriptions, retention. Designers and marketers
                    began optimising interfaces for these behaviours. Borrowing
                    from behavioural economics and persuasive technology
                    research, products adopted patterns that encouraged specific
                    user actions—initially with good intentions, but
                    increasingly with aggressive tactics.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Dark Patterns Go Mainstream
                  </Text>
                  <Text appearance="body-2">
                    By the 2010s, manipulative interface patterns had become
                    normalised. “Roach Motel” flows made it easy to sign up but
                    difficult to cancel. Hidden costs appeared late in checkout.
                    Preselected checkboxes assumed consent. Ambiguous labels
                    masked consequences. These techniques spread rapidly because
                    they worked: they increased conversions in the short term.
                    But each tactic chipped away at the implicit trust between
                    user and product.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why Manipulation Became Profitable
                  </Text>
                  <Text appearance="body-2">
                    Manipulative design flourished because the business
                    environment rewarded engagement above everything else.
                    Optimisation frameworks such as A/B testing focused on
                    behavioural outcomes—not comprehension, comfort, or clarity.
                    If a design pattern increased clicks, it was deemed
                    successful, even when it undermined autonomy. Over time,
                    teams became desensitised to coercion because its effects
                    were invisible in dashboards.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Emotional Cost to Users
                  </Text>
                  <Text appearance="body-2">
                    People rarely express their discomfort directly. Instead,
                    they develop quiet coping strategies: avoiding certain
                    flows, using privacy tools, hesitating before tapping
                    anything that looks like a trick, or abandoning services
                    entirely. Manipulative design erodes confidence, turning
                    everyday interactions into moments of suspicion. This
                    emotional tax accumulates, especially where trust is already
                    fragile—healthcare, finance, identity, safety.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Regulators Begin to Respond
                  </Text>
                  <Text appearance="body-2">
                    As manipulative patterns became widespread, regulators took
                    notice. The UK CMA, EU DSA, and US FTC began issuing
                    guidance and enforcement actions targeting dark patterns.
                    The shift marked an important recognition: interface design
                    is not neutral. It shapes behaviour as powerfully as policy.
                    What was once merely unethical is increasingly becoming
                    illegal.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    From Manipulation to Trust
                  </Text>
                  <Text appearance="body-2">
                    Understanding the history of manipulative design is
                    essential for shaping better systems. It reveals how easily
                    incentives distort design practice, and how quickly harmful
                    patterns become normal through repetition. Trust Design
                    doesn’t just critique manipulation—it offers a course
                    correction. By focusing on clarity, respect, safety, and
                    data dignity, we rebuild the social contract between people
                    and products.
                  </Text>

                  <Text tag="h2" appearance="h6">
                    Selected references
                  </Text>
                  <List appearance="body-2">
                    <li>
                      Mathur, A. et al. (2019). <em>Dark Patterns at Scale.</em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/10.1145/3359181"
                        target="_blank"
                      >
                        ACM CSCW
                      </Link>
                      .
                    </li>
                    <li>
                      Gray, C.M., Kou, Y., Battles, B., Hoggatt, J. & Toombs, A.
                      (2018). <em>The Dark (Patterns) Side of UX Design.</em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/10.1145/3173574.3174108"
                        target="_blank"
                      >
                        CHI
                      </Link>
                      .
                    </li>
                    <li>
                      Brignull, H. (2011).{" "}
                      <em>Dark Patterns: Deception vs. Honesty in UX.</em>{" "}
                      <Link
                        href="https://www.darkpatterns.org/"
                        target="_blank"
                      >
                        darkpatterns.org
                      </Link>
                      .
                    </li>
                    <li>
                      European Commission.{" "}
                      <Link
                        href="https://digital-strategy.ec.europa.eu/en/policies/dark-patterns"
                        target="_blank"
                      >
                        Dark Pattern Guidance
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

export default Article_4;
