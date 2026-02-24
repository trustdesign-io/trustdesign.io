import React from "react";
import { PageSection, Layout, Text, List, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_9: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  Forensic UX Case Study: Scam UI Dissection
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published in July 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Why Scam Interfaces Deserve Serious Study
                  </Text>
                  <Text appearance="body-2">
                    Scam UIs are not crude—they are precise behavioural weapons.
                    They exploit the same psychological triggers used in
                    mainstream products but sharpened toward deception. Studying
                    these interfaces is essential for Trust Design because it
                    reveals how easily familiar interaction patterns can be
                    misused. The more we understand these tactics, the better we
                    can ensure legitimate products feel safe, calm, and
                    unmistakably trustworthy.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Core Mechanics of Deception
                  </Text>
                  <Text appearance="body-2">
                    Scam flows follow predictable psychological scripts:
                    <br />
                    <br />
                    <strong>Urgency and panic.</strong> Timers, flashing
                    colours, and warnings like “Immediate action required” force
                    snap decisions.
                    <br />
                    <strong>False authority.</strong> Scam pages mimic banks,
                    logistics brands, or government agencies using borrowed
                    visual language.
                    <br />
                    <strong>Constrained pathways.</strong> There is usually one
                    oversized action—“Secure Now”—with escape routes hidden or
                    disabled.
                    <br />
                    <strong>Emotional hijacking.</strong> Messages imply blame,
                    danger, or embarrassment to increase compliance.
                    <br />
                    <br />
                    These triggers work because they exploit cognitive shortcuts
                    people use when under stress.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Coercive Patterns in Detail
                  </Text>
                  <Text appearance="body-2">
                    Scam interfaces rely on familiar UI patterns used in
                    legitimate products:
                    <br />
                    <br />• <strong>Fake system scans</strong> with animated
                    progress bars.
                    <br />• <strong>Fullscreen overlays</strong> imitating
                    OS-level alerts.
                    <br />• <strong>Preselected harmful options</strong> like
                    “Call support now”—connecting to scammers.
                    <br />• <strong>Brand mimicry</strong> exploiting trust in
                    common interaction styles.
                    <br />
                    <br />
                    These tactics remind us that interface norms themselves can
                    be dangerous when misapplied.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Fake “Account Locked” Pattern
                  </Text>
                  <Text appearance="body-2">
                    One of the most widespread scam patterns begins with a
                    fabricated security alert. It typically includes:
                    <br />
                    <br />
                    • a security‑style colour palette
                    <br />
                    • a prominent warning symbol
                    <br />
                    • vague claims of “unusual activity”
                    <br />
                    • a dominant action button (“Secure My Account”)
                    <br />
                    • suppressed exits and links
                    <br />
                    <br />
                    Legitimate products often resemble this pattern
                    unintentionally during genuine security flows. The
                    difference lies in clarity, reversibility, and tone—not in
                    visual style alone.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    What Legitimate Products Must Avoid
                  </Text>
                  <Text appearance="body-2">
                    Trustworthy products must not echo scam heuristics. Teams
                    should review flows by asking:
                    <br />
                    <br />
                    • Are we manufacturing urgency unnecessarily?
                    <br />
                    • Does anything resemble known fraudulent patterns?
                    <br />
                    • If someone posted a screenshot online, would we be
                    comfortable explaining it?
                    <br />
                    <br />
                    These questions catch coercive tendencies early—before users
                    experience them as harm.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Designing Experiences That Feel “Nothing Like a Scam”
                  </Text>
                  <Text appearance="body-2">
                    Products feel safe when they cultivate a consistent sense of
                    calm and clarity:
                    <br />
                    <br />
                    • balanced, reversible actions
                    <br />
                    • visible system state
                    <br />
                    • honest, specific explanations
                    <br />
                    • clear exits
                    <br />
                    • stable, predictable copy and components
                    <br />
                    <br />
                    Security flows should feel composed, not threatening.
                    Calmness is a trust signal.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why Forensic UX Matters
                  </Text>
                  <Text appearance="body-2">
                    Forensic UX sharpens designers’ awareness of
                    coercion—intentional or accidental. By analysing harmful
                    interfaces, teams learn to recognise early warning signs in
                    their own work. The goal is not just to avoid similarities
                    with scams, but to build systems that actively resist
                    harmful interpretations. Trustworthy products maintain
                    integrity even when taken out of context.
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
                      Bösch, C. et al. (2016).{" "}
                      <em>Fakes and Frauds in the Digital World.</em>{" "}
                      <Link
                        href="https://link.springer.com/article/10.1007/s10207-016-0328-2"
                        target="_blank"
                      >
                        Springer
                      </Link>
                      .
                    </li>
                    <li>
                      UK NCSC.{" "}
                      <Link
                        href="https://www.ncsc.gov.uk/guidance/phishing"
                        target="_blank"
                      >
                        Phishing Guidance
                      </Link>
                      .
                    </li>
                    <li>
                      Maier, B. (2023).{" "}
                      <em>Interface Deception and User Manipulation.</em>{" "}
                      <Link
                        href="https://arxiv.org/abs/2301.10464"
                        target="_blank"
                      >
                        arXiv
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

export default Article_9;
