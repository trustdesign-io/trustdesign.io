import React from "react";
import { PageSection, Layout, Text, Link } from "../../../";
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
                    <em>Published on June 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Persuasion Is Inevitable
                  </Text>
                  <Text appearance="body-2">
                    All design persuades. The moment you choose a default, a
                    button label, a visual hierarchy, or a notification
                    strategy, you are nudging behaviour. Sometimes gently,
                    sometimes forcefully. Persuasion is built into the
                    architecture of interaction—there is no neutral state. The
                    ethical question is not whether we persuade, but whether
                    that persuasion aligns with a person’s interests,
                    understanding, and intent. When design choices amplify
                    vulnerability, exploit cognitive bias, or steer people
                    toward outcomes they would not choose under clear
                    conditions, persuasion crosses a line.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    When Persuasion Becomes Manipulation
                  </Text>
                  <Text appearance="body-2">
                    Manipulation happens when the product benefits from a user’s
                    confusion, pressure, or limited attention. Unlike ethical
                    persuasion, manipulation obscures the true cost, meaning, or
                    consequence of a choice. Common examples include:
                    <br />
                    <br />
                    • hiding decline or opt-out options
                    <br />
                    • pre-selecting high-commitment choices by default
                    <br />
                    • creating urgency where none exists
                    <br />
                    • framing decisions in ways that trigger shame or fear
                    <br />
                    <br />
                    These patterns may improve short-term metrics, but they
                    degrade long-term trust. When people feel tricked or
                    funneled, they may comply once—but they rarely return
                    willingly.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Three Tests for Ethical Influence
                  </Text>
                  <Text appearance="body-2">
                    Trust Design uses three simple tests to evaluate whether a
                    flow is ethically persuasive or manipulative:
                    <br />
                    <br />
                    <strong>1. Clarity Test</strong>
                    <br />
                    Would a reasonable person understand what they are agreeing
                    to without needing extra research?
                    <br />
                    <br />
                    <strong>2. Alignment Test</strong>
                    <br />
                    Is the intended outcome genuinely in the user’s interest—or
                    primarily in ours?
                    <br />
                    <br />
                    <strong>3. Exposure Test</strong>
                    <br />
                    If this screen were screenshot and posted publicly, would we
                    feel comfortable defending it?
                    <br />
                    <br />
                    If any of these tests fail, the persuasion pattern needs to
                    be reconsidered or redesigned.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Designing With Rather Than At People
                  </Text>
                  <Text appearance="body-2">
                    Ethical persuasion involves treating users as collaborators
                    rather than targets. This means creating flows that respect
                    autonomy: explaining trade-offs, offering reversible
                    choices, and giving people time to think. Co-design,
                    trust-focused usability studies, and interviewing people
                    about moments of hesitation all help uncover where
                    intentions and impact diverge. A pattern that feels harmless
                    in a workshop may feel coercive when encountered during
                    stress, fatigue, or fear. Trust Design foregrounds those
                    emotional contexts rather than treating them as edge cases.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Long-Term Relationships Over Short-Term Gains
                  </Text>
                  <Text appearance="body-2">
                    Ethical persuasion prioritises the long-term relationship
                    between the person and the product. Teams often face
                    pressure to maximise conversions, retention, or engagement.
                    But when those behaviours are achieved through pressure or
                    misdirection, trust erodes—and erosion is expensive. People
                    churn quietly. Complaints spike. Reputation weakens.
                    Regulators take interest. The most valuable products are
                    those that people recommend willingly, not reluctantly.
                    Ethical persuasion is not just a moral choice; it is a
                    strategic one.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Making Ethics Operational
                  </Text>
                  <Text appearance="body-2">
                    Values only matter when they show up in the actual work.
                    This means adding ethics checkpoints into design reviews,
                    writing pattern guidelines that forbid harmful defaults,
                    documenting reasoning behind high-impact decisions, and
                    creating space for dissent during product planning. The
                    Trust Design Toolkit can surface points where copy,
                    components, or flow patterns lean toward coercion. These
                    artefacts help teams make grounded decisions rather than
                    relying on gut instinct.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    A More Respectful Future for Interface Design
                  </Text>
                  <Text appearance="body-2">
                    As the industry matures, the line between persuasion and
                    manipulation will become sharper—not because designers
                    suddenly become more virtuous, but because trust will become
                    a competitive advantage. Ethical persuasion builds
                    credibility, lowers friction, and creates environments where
                    people feel genuinely empowered. When users feel that a
                    product is working with them rather than against them, they
                    invest more deeply—not just with their time, but with their
                    belief.
                  </Text>
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
