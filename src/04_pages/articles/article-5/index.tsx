import React from "react";
import { PageSection, Layout, Text, List, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_5: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  Designing Transparency
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    Published in March 2026 by{" "}
                    <Link url="/dannyclaydenchambers" subtle>
                      Danny Clayden Chambers
                    </Link>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Why Transparency Matters
                  </Text>
                  <Text appearance="body-2">
                    Transparency is often misunderstood as disclosure—as long as
                    a product links to a privacy policy, the assumption is that
                    it has fulfilled its obligation. But genuine transparency is
                    not a legal artefact; it is a lived experience. People
                    should be able to understand what a system is doing, why it
                    is doing it, and what will happen next without pausing to
                    decipher jargon or navigate hidden details. When systems
                    obscure intent or behaviour, even unintentionally, trust
                    weakens.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Three Dimensions of Transparency
                  </Text>
                  <Text appearance="body-2">
                    Trust Design approaches transparency through three
                    dimensions:
                    <br />
                    <br />
                    <strong>Surface transparency:</strong> Labels, actions, and
                    outcomes are clear. A button reveals the true consequence of
                    tapping it. System states are visible. Nothing behaves
                    mysteriously.
                    <br />
                    <strong>Process transparency:</strong> People have insight
                    into how a system works—how data flows, how recommendations
                    are made, and what processes shape outcomes. They don’t need
                    full technical detail; they need meaningful visibility.
                    <br />
                    <strong>Purpose transparency:</strong> The product clearly
                    communicates why a process exists. Why does this feature
                    need this permission? Why is this data collected? Whose
                    interests does this design serve?
                    <br />
                    <br />
                    Most digital products achieve surface transparency at best.
                    Trustworthy systems intentionally support all three
                    dimensions.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Where Transparency Fails
                  </Text>
                  <Text appearance="body-2">
                    Transparency breaks down in predictable places: consent
                    flows, checkout processes, permission requests, AI-driven
                    recommendations, and identity-related interactions. In these
                    moments, people face uncertainty or potential risk. If the
                    system does not anticipate their questions—"Why am I seeing
                    this? What will this do? Can I undo it?"—then hesitation
                    grows, even when the underlying system is safe.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Designing Explanations That Feel Human
                  </Text>
                  <Text appearance="body-2">
                    Explanations often fail because they are written for
                    compliance teams or engineers, not the people who must act
                    on them. Human-centred transparency uses familiar language,
                    avoids euphemism, and offers examples when needed. Instead
                    of saying, “Your engagement data may be shared with trusted
                    partners,” a transparent interface might say: “We use some
                    of your activity to recommend better content. You can turn
                    this off at any time.” Clarity is respect.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Making Invisible Systems Legible
                  </Text>
                  <Text appearance="body-2">
                    Modern digital products rely on invisible processes:
                    machine-learning models, ranking systems, risk scores,
                    personalisation engines. When hidden, they create
                    unpredictability; when revealed thoughtfully, they help
                    people make informed decisions. Effective patterns include
                    confidence indicators, explanation-on-demand, “Why am I
                    seeing this?” affordances, and summaries of data inputs.
                    Legibility is not full technical exposure—it is contextual
                    clarity.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Transparency as Ongoing Maintenance
                  </Text>
                  <Text appearance="body-2">
                    Transparency must evolve as products evolve. New features
                    introduce new risks; new model behaviours introduce new
                    ambiguity. Interfaces should be periodically reviewed to
                    ensure that explanations remain accurate, copy reflects
                    reality, and data practices remain clear. The Trust Design
                    Audit is designed to detect where transparency has drifted
                    or degraded over time.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Link Between Transparency and Trust
                  </Text>
                  <Text appearance="body-2">
                    People trust systems that behave like good collaborators:
                    predictable, honest, and calm. When people understand how a
                    system works, they feel more in control, more willing to
                    explore, and more capable of forming accurate expectations.
                    Transparency is not about overwhelming users with detail—it
                    is about giving them the right information at the right
                    moment.
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
                      Lipton, Z. (2018).{" "}
                      <em>The Mythos of Model Interpretability.</em>{" "}
                      <Link
                        href="https://arxiv.org/abs/1606.08354"
                        target="_blank"
                      >
                        arXiv
                      </Link>
                      .
                    </li>
                    <li>
                      Nielsen Norman Group.{" "}
                      <Link
                        href="https://www.nngroup.com/articles/transparency/"
                        target="_blank"
                      >
                        Transparency in UX
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

export default Article_5;
