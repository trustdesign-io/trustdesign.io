import React from "react";
import { PageSection, Layout, Text, List, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_12: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  Trust by Default: Product Design Principles
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published on October 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Default Settings as Moral Commitments
                  </Text>
                  <Text appearance="body-2">
                    Defaults shape behaviour more than almost any other design
                    decision. Most people never change them. Whether the setting
                    concerns notifications, data sharing, recommendations, or
                    visibility controls, the default is interpreted as the
                    product’s true intention. That is why defaults are moral
                    choices. They reveal whether a team prioritises user
                    wellbeing or business optimisation. A product that assumes
                    maximum data capture, constant attention, or aggressive
                    engagement signals that trust is secondary. Trust by Default
                    reverses this assumption: every default should protect the
                    person—not extract from them.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Principle 1: Honesty in Copy and Intent
                  </Text>
                  <Text appearance="body-2">
                    Honesty is more than the absence of deception—it is the
                    practice of removing ambiguity. Clarity builds trust even
                    when the message delivers an undesired outcome. Honest
                    interfaces state consequences plainly, avoid euphemisms,
                    reduce legalese, and ensure that product behaviour matches
                    on‑screen promises. Anything less signals manipulation. When
                    honesty becomes the default, users learn that the product
                    speaks plainly, even in difficult moments.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Principle 2: Reversibility as a Safety Net
                  </Text>
                  <Text appearance="body-2">
                    People feel safer when they know decisions can be undone.
                    Reversibility reduces fear, lowers cognitive load, and
                    encourages experimentation. Trust is damaged when products
                    make actions permanent without adequate warning. Reversible
                    design patterns include:
                    <br />
                    <br />• clear “undo” moments after impactful actions
                    <br />• trial periods for high‑commitment choices
                    <br />• cancellation paths that are as simple as sign‑up
                    paths
                    <br />• non‑destructive defaults that require deliberate
                    user action to escalate risk
                    <br />
                    <br />
                    When reversibility is the norm, people feel respected rather
                    than trapped.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Principle 3: Predictability and Pattern Integrity
                  </Text>
                  <Text appearance="body-2">
                    Predictability is the foundation upon which trust is built.
                    Consistent patterns allow people to form reliable mental
                    models—crucial when making decisions under time pressure or
                    emotional stress. Trust suffers when components shift
                    meaning across contexts or when interactions behave
                    unpredictably. Predictability by Default means:
                    <br />
                    <br />• resisting clever misdirections in favour of clarity
                    <br />• maintaining component integrity across flows
                    <br />• ensuring familiar actions always produce familiar
                    outcomes
                    <br />
                    <br />
                    Predictability keeps users orientated, confident, and safe.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Principle 4: Minimal Surprise
                  </Text>
                  <Text appearance="body-2">
                    Surprise is a powerful creative device, but it should never
                    apply to decisions with meaningful consequences. Minimal
                    Surprise means eliminating:
                    <br />
                    <br />• hidden fees or costs
                    <br />• unexpected commitments
                    <br />• preselected high‑impact options
                    <br />• ambiguous transitions or unclear next steps
                    <br />
                    <br />
                    Safe products behave calmly. They signal intent clearly and
                    avoid triggering regret. A user should never find themselves
                    thinking, “I didn’t realise what I was agreeing to.”
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Principle 5: Data Dignity
                  </Text>
                  <Text appearance="body-2">
                    Trust by Default treats personal data as borrowed—not owned.
                    People should always understand what is collected, why it is
                    needed, where it is stored, and how to change their
                    preferences. Data dignity includes:
                    <br />
                    <br />• data‑off as the default unless clearly justified
                    <br />• short retention windows for non‑essential
                    information
                    <br />• easily discoverable settings
                    <br />• honest explanations free of technical obfuscation
                    <br />
                    <br />
                    Products that hide data practices behind jargon or bury
                    important opt‑outs in nested menus communicate a lack of
                    respect. Dignity is the antidote.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why Trust by Default Matters
                  </Text>
                  <Text appearance="body-2">
                    Trust cannot be manufactured through tone or branding—it
                    emerges from behaviour. Defaults are the clearest expression
                    of that behaviour because they demonstrate what the product
                    chooses on behalf of the person. When defaults protect
                    autonomy, respect attention, and minimise harm, trust grows
                    naturally. Trust by Default is more than a collection of
                    principles—it is a design philosophy that aligns product
                    strategy with human dignity. As technology becomes more
                    powerful and more deeply integrated into daily life, these
                    principles will distinguish products that earn long‑term
                    loyalty from those that slowly erode it.
                  </Text>

                  <Text tag="h2" appearance="h6">
                    Selected references
                  </Text>
                  <List appearance="body-2">
                    <li>
                      Cranor, L. (2012).{" "}
                      <em>Human Factors in Privacy Notice and Consent.</em>{" "}
                      <Link
                        href="https://www.usenix.org/legacy/events/upsec07/tech/full_papers/cranor/cranor.pdf"
                        target="_blank"
                      >
                        USENIX
                      </Link>
                      .
                    </li>
                    <li>
                      NIST.{" "}
                      <Link
                        href="https://www.nist.gov/itl/ai-risk-management-framework"
                        target="_blank"
                      >
                        AI Risk Management Framework
                      </Link>
                      .
                    </li>
                    <li>
                      Böhme, R. & Köpsell, S. (2010).{" "}
                      <em>Tragedy of the Commons in Privacy.</em>{" "}
                      <Link
                        href="https://dl.acm.org/doi/10.1145/1754393.1754420"
                        target="_blank"
                      >
                        WEIS
                      </Link>
                      .
                    </li>
                    <li>
                      European Data Protection Board.{" "}
                      <Link
                        href="https://edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en"
                        target="_blank"
                      >
                        Consent Guidelines
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

export default Article_12;
