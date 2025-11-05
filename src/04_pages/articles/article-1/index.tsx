import React from "react";

import { PageSection, Layout, Text, Link } from "../../../";

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
                    The Fragility of Trust
                  </Text>
                  <Text appearance="body-2">
                    Trust is one of our oldest survival instincts - the quiet
                    glue that made civilization possible. It’s the reason
                    language, trade, and cooperation could emerge at all. And
                    yet, the same instinct that once bound tribes and
                    communities together now defines our relationship with
                    technology. Each day, we hand over fragments of our lives to
                    systems we barely understand - systems that learn from us,
                    speak to us, and shape what we see. We trust them to guide
                    our choices, tell our stories, and connect us to one
                    another. But that trust is often assumed rather than earned.{" "}
                    <Link href="https://amzn.to/4nrq3hi" target="_blank">
                      Deceptive patterns
                    </Link>
                    , manipulative interfaces, and opaque algorithms have made
                    the digital world feel less like a shared commons and more
                    like a maze of hidden incentives. The result is a quiet
                    erosion of confidence - a trust deficit that extends beyond
                    individual products into our sense of truth, agency, and
                    belonging.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    If Trust Can Be Eroded by Design, It Can Be Restored by
                    Design
                  </Text>
                  <Text appearance="body-2">
                    If design has the power to deceive, it also has the power to
                    restore. Every interaction between a person and a system is
                    built on design choices - what to reveal, what to conceal,
                    and how to guide behaviour. These choices carry moral
                    weight. They decide whether a user feels respected or
                    manipulated, empowered or exploited. Trust, in this sense,
                    isn’t abstract or sentimental. It’s structural. It lives in
                    the transparency of a form, the honesty of a message, the
                    predictability of an algorithm. It’s the quiet moment when
                    technology aligns with human intent instead of working
                    against it. Design has always shaped behaviour. The next
                    challenge is to shape it toward trustworthiness. To move
                    from intuition to evidence. From feeling to measurement.
                    From assuming trust to designing for it.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Making the Invisible Visible
                  </Text>
                  <Text appearance="body-2">
                    That is the work at hand. The Trust Design Toolkit is our
                    first experiment in making the invisible architecture of
                    trust visible. It allows us to inspect how design systems,
                    interfaces, and patterns communicate - or quietly compromise
                    - integrity. By studying how trust manifests in digital
                    environments, we can begin to define its signals: clarity,
                    honesty, control, respect. These qualities can be observed,
                    audited, and ultimately designed for. The more we can see
                    them, the better we can align technology with the
                    psychological and relational fabric it depends on. Measuring
                    trust doesn’t mean reducing it to numbers - it means finding
                    language and evidence to guide better choices. It means
                    giving designers, technologists, and organizations a clearer
                    way to build systems that earn belief rather than borrow it.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Toward Technology That Deserves Our Trust
                  </Text>

                  <Text appearance="body-2">
                    Human progress has always depended on trust - between
                    people, communities, and now, increasingly, between humans
                    and machines. As our tools become more autonomous and
                    intelligent, the question of trustworthiness will define how
                    well we adapt. Design is our bridge between what technology
                    can do and what humanity needs it to be. If we can
                    understand how trust is built, we can ensure our systems
                    reflect the same cooperative instinct that made civilization
                    possible in the first place. The challenge - and the
                    opportunity - is to design technology that deserves the
                    trust it depends on.
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

export default Article_1;
