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
                    Why trust design matters
                  </Text>
                  <Text appearance="body-2">
                    Trust is the invisible architecture of digital products.
                    People decide to read, buy, sign up, or walk away based on
                    whether an interface feels competent, honest, and
                    respectful. The Trust Design Audit (TDA) gives teams a fast,
                    evidence-informed snapshot of those trust signals on any
                    page and shows where design changes will have the biggest
                    impact.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    What TDA checks (10 factors → one score)
                  </Text>
                  <Text appearance="body-2">
                    TDA analyzes the live DOM of the current page and produces
                    one overall Trust Score plus category scores. Each category
                    is grounded in established research on trust, credibility,
                    human-centred design, accessibility, and dark patterns. The
                    ten factors we assess are:
                  </Text>

                  <List appearance="body-2">
                    <li>
                      <strong>Transparency &amp; Disclosure</strong> — upfront
                      clarity around prices, limits, data use.
                    </li>
                    <li>
                      <strong>Consent &amp; Control</strong> — genuine choices
                      (e.g., accept/decline), accessible settings.
                    </li>
                    <li>
                      <strong>Privacy Signals</strong> — visible privacy
                      notices, data-minimising defaults in forms.
                    </li>
                    <li>
                      <strong>Security &amp; Authenticity Basics</strong> —
                      HTTPS, no mixed content or broken trust cues.
                    </li>
                    <li>
                      <strong>Reliability &amp; Stability</strong> — broken
                      links/images and surfaced errors reduce confidence.
                    </li>
                    <li>
                      <strong>Usability &amp; Clarity</strong> — readable
                      labels, clear primary actions, predictable navigation.
                    </li>
                    <li>
                      <strong>Honesty in Influence</strong> — penalties for
                      manipulative patterns such as disguised ads, forced
                      continuity, or false scarcity.
                    </li>
                    <li>
                      <strong>Accountability &amp; Contactability</strong> —
                      clear identity, company details, and contact options.
                    </li>
                    <li>
                      <strong>Accessibility Signals</strong> — basic
                      landmarks/alt text/semantics (a light-touch, not a full
                      WCAG audit).
                    </li>
                    <li>
                      <strong>Consistency &amp; System Integrity</strong> —
                      coherent component usage and copy consistency, including
                      data-component coverage from your design system.
                    </li>
                  </List>

                  <Text tag="h2" appearance="h5">
                    How scoring works (in brief)
                  </Text>
                  <Text appearance="body-2">
                    <strong>Detection:</strong> each factor has lightweight
                    detectors (selectors, text heuristics, structure). For
                    example, consent modules that present accept and decline
                    with comparable visual weight score higher than accept-only
                    banners. <strong>Normalization:</strong> raw matches are
                    scaled to 0–100 per category, with penalties applied for
                    misleading or coercive patterns.{" "}
                    <strong>Aggregation:</strong> the overall Trust Score is a
                    weighted mean of category scores (extra weight on
                    Transparency, Consent, and Honesty in Influence). The output
                    is an overall score, category bars, and a concise summary
                    explaining where to focus improvements.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    What it is - and isn’t
                  </Text>
                  <Text appearance="body-2">
                    TDA is a fast heuristic audit. It helps you spot obvious
                    trust gaps quickly and track improvements after you ship
                    changes. It is not a legal opinion, a full accessibility
                    review, or a deep security assessment. For AI-mediated
                    experiences, pair TDA with recognized frameworks such as the{" "}
                    <Link
                      href="https://www.nist.gov/itl/ai-risk-management-framework"
                      target="_blank"
                    >
                      NIST AI Risk Management Framework
                    </Link>{" "}
                    or domain-specific testing.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why this approach is grounded
                  </Text>
                  <Text appearance="body-2">
                    TDA is informed by long-standing research on trust and
                    credibility, human-centred design standards, and empirical
                    work on deceptive patterns. In particular: models framing
                    trust as <em>ability, benevolence, integrity</em>;
                    web-credibility guidance; and taxonomies of manipulative
                    interfaces. Together, they offer practical signals the DOM
                    can answer—and teams can act on.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    How to use it in practice
                  </Text>

                  <List appearance="body-2">
                    <li>
                      Scan key flows (landing → pricing → checkout → onboarding
                      → settings).
                    </li>
                    <li>
                      Fix the biggest gaps first (typically Transparency,
                      Consent, or Honesty in Influence).
                    </li>
                    <li>
                      Re-run after changes to capture before/after score deltas.
                    </li>
                    <li>
                      Pair with interviews or usability tests to validate that
                      fixes increase user confidence.
                    </li>
                  </List>

                  <Text tag="h2" appearance="h5">
                    Toward technology that deserves our trust
                  </Text>

                  <Text appearance="body-2">
                    Design is our bridge between what technology can do and what
                    people need it to be. By making trust signals visible—and
                    measurable—we can steer teams toward transparency, consent,
                    and honesty in influence. The result is not just a higher
                    score, but stronger relationships and better products.
                  </Text>

                  <Text appearance="body-2">
                    Download the{" "}
                    <Link url="/tools" target="_self">
                      Trust Design Toolkit
                    </Link>{" "}
                    .
                  </Text>

                  <Layout topGutter="xl">
                    <Text tag="h2" appearance="h6">
                      Selected references
                    </Text>

                    <List appearance="body-2">
                      <li>
                        Mayer, R.C., Davis, J.H. &amp; Schoorman, F.D. (1995).{" "}
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
                        McKnight, D.H. &amp; Chervany, N.L. (2001).{" "}
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
                          Persuasive Technology: Using Computers to Change What
                          We Think and Do.
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
                        Mathur, A. et&nbsp;al. (2019).{" "}
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
