import React from "react";
import { PageSection, Layout, Text, List, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_6: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  Trust Signals in AI Interfaces
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published inApril 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Why AI Needs Its Own Trust Signals
                  </Text>
                  <Text appearance="body-2">
                    Traditional interfaces are deterministic: when you tap a
                    button, the system responds in predictable, repeatable ways.
                    AI systems behave differently—they generate outputs
                    probabilistically, make inferences, and occasionally present
                    errors with confidence. Because their reasoning is hidden,
                    users rely on trust signals to understand what the system is
                    doing and how much to depend on it.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Setting Expectations Clearly
                  </Text>
                  <Text appearance="body-2">
                    One of the strongest trust signals for AI is honest framing.
                    Users need to know what the system is designed for, what it
                    handles well, where it may fail, and what boundaries it will
                    not cross. Statements such as “I can summarise your text,
                    but I may make mistakes—please double-check important
                    details” create psychological safety. Overconfident framing
                    invites misplaced trust.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Confidence, Evidence, and Alternatives
                  </Text>
                  <Text appearance="body-2">
                    AI interfaces benefit from patterns that reveal uncertainty.
                    Confidence indicators, citations, provenance cues, and
                    alternative responses help users calibrate reliability.
                    Rather than presenting a single authoritative answer,
                    systems can offer multiple interpretations or highlight
                    ambiguous areas. These patterns turn AI from a mysterious
                    oracle into a collaborative assistant.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Refusal as a Positive Signal
                  </Text>
                  <Text appearance="body-2">
                    Refusal is one of the most powerful trust signals an AI
                    system can express. When a system declines a request because
                    it is harmful, ambiguous, or outside its scope, users learn
                    that guardrails exist. A clear refusal—“I can’t help with
                    that because it may cause harm”—builds more trust than an
                    evasive or misleading answer.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Designing for Error Recovery
                  </Text>
                  <Text appearance="body-2">
                    AI will inevitably make mistakes. The key to maintaining
                    trust is how easily users can identify, correct, or recover
                    from them. Strong recovery patterns include options like
                    “Show another version”, “Why did you give this answer?”,
                    “Try again with different input”, or tools that let users
                    refine context. These affordances help maintain agency and
                    clarity.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Human–AI Collaboration
                  </Text>
                  <Text appearance="body-2">
                    AI should not replace human judgement—it should scaffold it.
                    Trustworthy AI makes its limits visible, invites correction,
                    and adapts without surprising users. It supports decisions
                    with clarity and humility. The most trusted AI systems
                    behave like reliable collaborators, not black boxes.
                  </Text>

                  <Text tag="h2" appearance="h6">
                    Selected references
                  </Text>
                  <List appearance="body-2">
                    <li>
                      Ehsan, U. et al. (2021).{" "}
                      <em>Human-Centered Explainable AI.</em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/10.1145/3459930"
                        target="_blank"
                      >
                        ACM
                      </Link>
                      .
                    </li>
                    <li>
                      Amershi, S. et al. (2019).{" "}
                      <em>Guidelines for Human–AI Interaction.</em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/10.1145/3290605.3300233"
                        target="_blank"
                      >
                        CHI
                      </Link>
                      .
                    </li>
                    <li>
                      Doshi-Velez, F. & Kim, B. (2017).{" "}
                      <em>Interpretability in Machine Learning.</em>{" "}
                      <Link
                        href="https://arxiv.org/abs/1702.08608"
                        target="_blank"
                      >
                        arXiv
                      </Link>
                      .
                    </li>
                    <li>
                      European Commission.{" "}
                      <Link
                        href="https://digital-strategy.ec.europa.eu/en/policies/trustworthy-ai"
                        target="_blank"
                      >
                        Guidance on Trustworthy AI
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

export default Article_6;
