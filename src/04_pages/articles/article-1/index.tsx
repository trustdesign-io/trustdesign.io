import React from "react";

import { PageSection, Layout, Text, List, Link } from "../../../";

import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

// import { useMediaQuery } from "../../../05_utilities/useMediaQuery.ts";

/* -- Content -- */

const Article_1: React.FC = () => {
  // const isDesktop = useMediaQuery(`(min-width: ${breakpoint.md.value})`);

  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  Designing Trust for emerging technology
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published on November 1st 2025 by Danny Chambers</em>
                  </Text>
                </Layout>
                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    The Human–Technology Contract
                  </Text>
                  <Text appearance="body-2">
                    Humanity has always extended itself through tools. Fire,
                    language, maps, machines, and now artificial
                    intelligence—each generation builds something that becomes
                    part of how we think, move, and collaborate. Trust is the
                    underlying force that makes this possible. We rely on tools
                    not because they are perfect, but because they behave in
                    ways we can understand. The more powerful the tool, the more
                    essential that understanding becomes.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why trust is foundational
                  </Text>
                  <Text appearance="body-2">
                    Trust is often treated as sentiment, but in practice it is
                    structural. It determines whether people feel safe taking
                    risks, sharing information, and forming expectations.
                    Technology now mediates identity, communication, finances,
                    and decision‑making. As a result, trust in digital systems
                    is no longer optional—it is a prerequisite for participation
                    in modern life. When systems behave unpredictably or
                    opaquely, people experience hesitation, confusion, or
                    withdrawal.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Technology as an extension of human judgement
                  </Text>
                  <Text appearance="body-2">
                    Emerging technologies—especially AI systems—amplify human
                    capability while also introducing uncertainty. These systems
                    make inferences, generate content, and offer
                    recommendations, often without revealing their reasoning.
                    People must form mental models about how and why results
                    appear, what the boundaries are, and when to trust or
                    question output. Clear, legible design is essential for
                    supporting this judgement.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The responsibility that comes with power
                  </Text>
                  <Text appearance="body-2">
                    The more influence a system has, the more its behaviour
                    matters. A small ambiguity in a low‑stakes interface is an
                    inconvenience; the same ambiguity in a financial, medical,
                    or safety‑critical context is a risk. Trustworthy systems
                    behave calmly, clearly, and consistently. They reveal what
                    matters at the moment it matters. They avoid surprise. They
                    offer meaningful choice rather than assumption. They treat
                    data as borrowed, not owned.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why design carries moral weight
                  </Text>
                  <Text appearance="body-2">
                    Every interface expresses priorities: what is emphasised,
                    what is hidden, what is optional, and what is nudged. These
                    choices shape behaviour long before users consciously
                    reflect on them. When design amplifies pressure, obscures
                    consequences, or normalises ambiguity, it weakens the social
                    contract between people and technology. When design
                    clarifies, protects, and respects boundaries, it strengthens
                    it.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The goal of Trust Design
                  </Text>
                  <Text appearance="body-2">
                    Trust Design is the practice of shaping technology so that
                    it earns and deserves people’s confidence. It is grounded in
                    five principles: transparency, predictability, consent, data
                    dignity, and safety. These principles are not abstract—they
                    can be audited, measured, and improved. By treating trust as
                    a design material, we bring clarity and discipline to an
                    area that has historically been vague or reactive.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    A more humane technological future
                  </Text>
                  <Text appearance="body-2">
                    When technology is designed with respect for human cognition
                    and human dignity, it becomes a stabilising force. People
                    feel safe exploring, adopting new capabilities, and
                    integrating systems into their lives. The future of digital
                    products depends not on making interfaces more
                    sophisticated, but on making their intentions clearer. Trust
                    Design offers a path toward a future where humans and
                    technology support one another with confidence rather than
                    friction.
                  </Text>

                  <Text tag="h2" appearance="h6">
                    Selected references
                  </Text>
                  <List appearance="body-2">
                    <li>
                      Kahneman, D. (2011). <em>Thinking, Fast and Slow.</em>
                      <Link
                        href="https://doi.org/10.1037/e512412015-078"
                        target="_blank"
                      >
                        ResearchGate
                      </Link>
                      .
                    </li>
                    <li>
                      Floridi, L. (2013). <em>The Ethics of Information.</em>
                      <Link
                        href="https://doi.org/10.1093/acprof:oso/9780199641321.001.0001"
                        target="_blank"
                      >
                        Oxford University Press
                      </Link>
                      .
                    </li>
                    <li>
                      Ehsan, U. et al. (2021).{" "}
                      <em>Human-Centered Explainable AI.</em>
                      <Link
                        href="https://dl.acm.org/doi/10.1145/3459930"
                        target="_blank"
                      >
                        ACM
                      </Link>
                      .
                    </li>
                    <li>
                      Nielsen Norman Group.{" "}
                      <Link
                        href="https://www.nngroup.com/articles/trustworthiness-websites/"
                        target="_blank"
                      >
                        Web credibility & trust research
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

export default Article_1;
