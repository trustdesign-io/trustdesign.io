import React from "react";
import { PageSection, Layout, Text } from "../../../";
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
                    <em>Published on March 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Transparency Isn’t Just Disclosure
                  </Text>
                  <Text appearance="body-2">
                    When most teams hear the word “transparency,” they think
                    about disclosures: privacy notices, policy updates, or long
                    blocks of explanatory text. But transparency is not the same
                    as disclosure. Disclosure is legal; transparency is
                    experiential. It describes what people can actually
                    understand in the moment of making a decision—not what is
                    technically documented somewhere else. If a person needs to
                    stop, reread, or translate a message to understand what is
                    happening to their data, trust is already strained. Real
                    transparency focuses on clarity, timing, and usability—not
                    verbosity.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Three Layers of Transparency
                  </Text>
                  <Text appearance="body-2">
                    Effective transparency emerges across three layers:
                    <br />
                    <br />
                    <strong>Surface transparency:</strong> clear labels, honest
                    buttons, visible system states, and predictable results.
                    People should be able to see what an action will do before
                    they commit to it.
                    <br />
                    <strong>Process transparency:</strong> insight into how the
                    system works—how data flows, how recommendations are chosen,
                    how permissions shape outcomes. This doesn’t require full
                    technical detail; it requires meaningful visibility.
                    <br />
                    <strong>Purpose transparency:</strong> the “why” behind the
                    system. Why is this feature here? Why is this data needed?
                    Whose interests does this interaction ultimately serve?
                    <br />
                    <br />
                    Most products only achieve surface transparency. Trust
                    Design pushes insight into the deeper layers.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Moments That Matter
                  </Text>
                  <Text appearance="body-2">
                    Transparency is most critical at points of vulnerability:
                    granting permissions, making purchases, changing identity
                    information, or interacting with systems that could impact
                    finances, security, or reputation. People don’t need to
                    understand everything all the time—they need clarity at the
                    moments that matter. Mapping these moments reveals where
                    misunderstandings cluster: subscription renewals,
                    data-sharing toggles, algorithmic recommendations, or
                    AI-generated content. These are the places where small
                    improvements produce major trust gains.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Designing Explanations That Feel Human
                  </Text>
                  <Text appearance="body-2">
                    Transparency often fails because explanations are written
                    for lawyers or engineers, not the humans who actually use
                    the product. Good transparency feels like a conversation. It
                    uses familiar language, concrete examples, and avoids
                    euphemisms. Instead of “We may share anonymised engagement
                    metadata with trusted partners,” a transparent message might
                    say, “We use some of your activity to suggest better
                    content. You can turn this off anytime.” Clarity isn’t
                    dumbing down—it’s respect.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Making Invisible Systems Visible
                  </Text>
                  <Text appearance="body-2">
                    Modern products are full of invisible processes:
                    machine‑learning models that personalise feeds, risk‑scoring
                    systems that flag transactions, ranking algorithms that
                    determine what people see first. When these systems remain
                    opaque, people cannot form reliable expectations. Trust
                    Design encourages teams to bring just enough of the system
                    into view to help people reason about outcomes. Examples
                    include: confidence indicators for AI, explanations for
                    recommendations, or summaries of what data influenced a
                    decision. The goal isn’t total exposure—it’s contextual
                    legibility.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Transparency as a Living Practice
                  </Text>
                  <Text appearance="body-2">
                    Transparency cannot be written once and forgotten. As
                    products evolve, adopt new models, add permissions, or
                    change business incentives, the transparency story must
                    evolve too. That means regularly reviewing copy, auditing
                    interactions, and testing whether people still understand
                    what the product is doing. The Trust Design Audit helps
                    identify where information has become outdated, ambiguous,
                    or overloaded. Transparency is not a compliance checkbox—it
                    is an ongoing conversation between a product and its users.
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

export default Article_5;
