import React from "react";

import { PageSection, Layout, Text, List, Link } from "../../../";

import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

/* -- Content -- */

const Article_2: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  Trust Design Audit: what it does and why it matters
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published on December 1, 2025 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Auditing for Trustworthiness
                  </Text>
                  <Text appearance="body-2">
                    Trust is often treated as an intangible quality—felt,
                    observed, occasionally measured through surveys, and
                    frequently debated without a shared definition. Auditing for
                    trustworthiness turns trust from an intuition into an
                    evaluable property of an interface. It asks a simple but
                    profound question: “Does this product behave in a way people
                    can understand, predict, and feel safe relying on?”
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why audit trust?
                  </Text>
                  <Text appearance="body-2">
                    Traditional usability testing focuses on efficiency—task
                    success, time on task, error rates. But trust involves a
                    different set of questions: Do people understand what
                    they’re agreeing to? Can they predict what will happen next?
                    Are choices genuine and reversible? Do they feel safe
                    disclosing information? A trust audit reframes success as
                    psychological safety.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The five pillars of trust auditing
                  </Text>
                  <Text appearance="body-2">
                    Trust Design evaluates products using five pillars:
                  </Text>
                  <List appearance="body-2">
                    <li>
                      <strong>Transparency</strong> — clarity at the moment of
                      commitment.
                    </li>
                    <li>
                      <strong>Predictability</strong> — consistent behaviour and
                      reliable patterns.
                    </li>
                    <li>
                      <strong>Consent</strong> — genuine choice, balanced
                      options, reversibility.
                    </li>
                    <li>
                      <strong>Data dignity</strong> — data treated as borrowed,
                      with clear purpose.
                    </li>
                    <li>
                      <strong>Safety</strong> — anticipation of harm, warnings,
                      and recovery paths.
                    </li>
                  </List>

                  <Text tag="h2" appearance="h5">
                    Mapping moments of vulnerability
                  </Text>
                  <Text appearance="body-2">
                    Audits focus on high‑risk moments: entering personal data,
                    accepting permissions, making purchases, interacting with
                    AI, or taking irreversible actions. These moments are where
                    trust is earned—or lost. Identifying them early helps teams
                    design with clarity and protection.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    A UX engineer’s perspective
                  </Text>
                  <Text appearance="body-2">
                    Across my career, the biggest trust failures I’ve seen
                    rarely come from malicious intent—they come from ambiguity.
                    A button labelled “Continue” that unexpectedly triggers
                    payment. A settings page that hides destructive actions.
                    Small misunderstandings accumulate into hesitation and
                    withdrawal. Auditing reveals these gaps so they can be
                    corrected.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    How a trust audit works
                  </Text>
                  <Text appearance="body-2">
                    A typical audit includes heuristic evaluation, copy
                    analysis, component review, consent mapping, dark‑pattern
                    detection, and user testing focused on comprehension and
                    comfort. The result is a Trust Score, category breakdowns,
                    annotated screenshots, and prioritised recommendations.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    AI requires new heuristics
                  </Text>
                  <Text appearance="body-2">
                    AI introduces uncertainty: hallucinations, shifting
                    behaviour, opaque reasoning. Trust audits for AI must assess
                    uncertainty indicators, explainability, refusal behaviours,
                    provenance, and recovery patterns. These signals help users
                    calibrate confidence and understand limitations.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    What teams gain
                  </Text>
                  <Text appearance="body-2">
                    Beyond identifying risks, audits give teams a shared
                    vocabulary. Instead of debating feelings, teams discuss
                    evidence: unclear consent, inconsistent patterns, missing
                    explanations, coercive framing. This accelerates
                    decision‑making and strengthens organisational alignment.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Key takeaway
                  </Text>
                  <Text appearance="body-2">
                    Auditing for trustworthiness transforms trust from an
                    abstract aspiration into a practical discipline. By
                    examining transparency, predictability, consent, data
                    dignity, and safety, teams build products that earn trust
                    intentionally—not accidentally.
                  </Text>

                  <Text tag="h2" appearance="h6">
                    Selected references
                  </Text>
                  <List appearance="body-2">
                    <li>
                      Mayer, R.C., Davis, J.H. & Schoorman, F.D. (1995).{" "}
                      <em>An Integrative Model of Organizational Trust.</em>{" "}
                      <Link
                        href="https://doi.org/10.2307/258792"
                        target="_blank"
                      >
                        Academy of Management Review
                      </Link>
                      .
                    </li>
                    <li>
                      McKnight, D.H. & Chervany, N.L. (2001).{" "}
                      <em>
                        What Trust Means in E-Commerce Customer Relationships.
                      </em>{" "}
                      <Link
                        href="https://aisel.aisnet.org/misq/vol26/iss3/1/"
                        target="_blank"
                      >
                        MIS Quarterly
                      </Link>
                      .
                    </li>
                    <li>
                      <Link
                        href="https://www.nngroup.com/articles/trustworthiness-websites/"
                        target="_blank"
                      >
                        Nielsen Norman Group
                      </Link>{" "}
                      — Web credibility and disclosure guidance.
                    </li>
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
                      Mathur, A. et al. (2019).{" "}
                      <em>
                        Dark Patterns at Scale: Findings from a Crawl of 11K
                        Shopping Websites.
                      </em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/10.1145/3359181"
                        target="_blank"
                      >
                        ACM CSCW
                      </Link>
                      .
                    </li>
                    <li>
                      <Link
                        href="https://www.iso.org/standard/77520.html"
                        target="_blank"
                      >
                        ISO 9241-210
                      </Link>{" "}
                      — Human-centred design for interactive systems.
                    </li>
                    <li>
                      <Link
                        href="https://www.nist.gov/itl/ai-risk-management-framework"
                        target="_blank"
                      >
                        NIST AI Risk Management Framework
                      </Link>{" "}
                      — context, measurement, and mitigation.
                    </li>
                    <li>
                      <Link
                        href="https://ethicsinaction.ieee.org/"
                        target="_blank"
                      >
                        IEEE <em>Ethically Aligned Design</em>
                      </Link>{" "}
                      — broader ethical guidance for trustworthy technology.
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

export default Article_2;
