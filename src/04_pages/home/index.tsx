import { useLocation } from "react-router-dom";

import { PageSection, Layout, Text, Button, ButtonGroup, Link } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
import { ActivityHeatmap } from "../../02_components/ActivityHeatmap";

import { breakpoint } from "../../01_foundation/dimension/dimension.ts";
import { useMediaQuery } from "../../05_utilities/useMediaQuery.ts";

/* -- Content -- */

// import DannyChambers from "../../00_assets/images/DannyClaydenChambers-1.jpg";
// import ChristianMacedo from "../../00_assets/images/testimonials/ChristianMacedo.jpeg";

type ArticlePromo = {
  id: number;
  slug: string;
  title: string;
  blurb: string;
  monthYear: string;
  author: string;
  avatar: string;
};

const isReleased = (monthYear: string): boolean => {
  const [month, year] = monthYear.split(" ");
  const release = new Date(`${month} 1, ${year}`);
  const now = new Date();
  return now >= release;
};

const articlePromos: ArticlePromo[] = [
  {
    id: 14,
    slug: "/the-future-of-trust-design",
    title: "The Future of Trust Design",
    blurb:
      "Trust Design is moving from niche topic to standard practice. This article looks ahead at how regulation, AI, and shifting public expectations will make trustworthiness a basic requirement for any serious product, not a branding claim or marketing message.",
    monthYear: "December 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 13,
    slug: "/the-trust-design-toolkit-explained",
    title: "The Trust Design Toolkit Explained",
    blurb:
      "The Trust Design Toolkit turns fuzzy worries about trust into structured audits, screenshots, and findings that teams can act on. We explain what each tool does, how they work together, and how to use them to improve a real product rather than just a slide deck.",
    monthYear: "November 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 12,
    slug: "/trust-by-default-product-design-principles",
    title: "Trust by Default: Product Design Principles",
    blurb:
      "Defaults quietly decide what happens to people who never change a setting. This piece introduces Trust by Default as a practical set of design principles for privacy, data use, consent, and safety, and shows how to use them when your product is under real commercial pressure.",
    monthYear: "October 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 11,
    slug: "/designing-for-safety-and-consent",
    title: "Designing for Safety and Consent",
    blurb:
      "Consent and safety often show up as legal or edge-case concerns, but they are central to how people experience your product. This article looks at patterns for reversible choices, clear warnings, and recovery paths that reduce harm without turning every flow into a legal document.",
    monthYear: "September 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 10,
    slug: "/from-ux-to-policy",
    title: "From UX to Policy",
    blurb:
      "Interfaces now implement policy in practice. We explore how emerging rules on dark patterns, consent, and transparency intersect with design systems, and how Trust Design can help teams ship flows that are both compliant and understandable to the people who have to use them.",
    monthYear: "August 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 9,
    slug: "/forensic-ux-case-study-scam-ui-dissection",
    title: "Forensic UX Case Study: Scam UI Dissection",
    blurb:
      "Scam UIs compress the worst ideas in interface design into a few screens. By dissecting a common ‘account locked’ fraud flow, this article shows which visual and behavioural patterns are reused in scams and how legitimate products can avoid accidentally looking or feeling the same.",
    monthYear: "July 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 8,
    slug: "/the-ethics-of-persuasion",
    title: "The Ethics of Persuasion",
    blurb:
      "Every product nudges behaviour. The question is whether that influence aligns with the person using it. We unpack where persuasive design becomes manipulative, offer practical tests teams can run on their own flows, and discuss how to handle commercial targets without crossing the line.",
    monthYear: "June 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 7,
    slug: "/scam-interfaces-and-forensic-ux",
    title: "Scam Interfaces and Forensic UX",
    blurb:
      "Scam interfaces concentrate the most coercive patterns in interface design into a few high-pressure screens. This article looks at scam flows through a forensic UX lens and shows how legitimate products can avoid resembling them, so they feel nothing like fraud even in moments of friction.",
    monthYear: "May 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 6,
    slug: "/trust-signals-in-ai-interfaces",
    title: "Trust Signals in AI Interfaces",
    blurb:
      "AI systems are probabilistic and can be confidently wrong. We look at which trust signals matter most in AI interfaces—such as expectation setting, evidence, uncertainty, and refusal—and how to design them so that people can decide when to rely on an output and when to double-check.",
    monthYear: "April 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 5,
    slug: "/designing-transparency",
    title: "Designing Transparency",
    blurb:
      "Transparency is not about dumping more text into a privacy policy. It is about helping people understand what is happening to them at the moment they act. This article breaks down where transparency matters most in a product and offers patterns for explaining decisions in plain language.",
    monthYear: "March 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 4,
    slug: "/a-brief-history-of-manipulative-design",
    title: "A Brief History of Manipulative Design",
    blurb:
      "Manipulative design did not start with a single bad actor. It emerged from optimisation culture, growth targets, and experiments that slowly pushed interfaces toward pressure and obscurity. We trace that history and outline what needs to change if we want a different pattern language.",
    monthYear: "February 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 3,
    slug: "/what-is-trust-design",
    title: "What Is Trust Design?",
    blurb:
      "Trust Design is our working name for a discipline that treats trust as something you can deliberately shape in products. This piece defines the term, places it in relation to UX, ethics, and security, and argues for why teams need a more precise language for these decisions.",
    monthYear: "January 2026",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 2,
    slug: "/trust-design-audit-what-it-does-and-why-it-matters",
    title: "Trust Design Audit: what it does and why it matters",
    blurb:
      "The Trust Design Audit is a structured way to examine how a product communicates, asks for consent, and handles risk. We describe the audit model, what it measures, and how teams can use the findings to have clearer conversations with design, product, and leadership.",
    monthYear: "December 2025",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
  {
    id: 1,
    slug: "/designing-trust-for-emerging-technology",
    title: "Designing Trust for emerging technology",
    blurb:
      "As new technologies move from prototypes to infrastructure, the question is no longer just whether they work, but whether people can safely rely on them. This introductory article looks at how trust considerations change as products become part of everyday, non-expert life.",
    monthYear: "November 2025",
    author: "Danny Clayden Chambers",
    avatar: "DannyChambers",
  },
];

const Home: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const articleOverride = params.get("article");

  const isDesktopLarge = useMediaQuery(`(min-width: ${breakpoint.lg.value})`);

  const releasedArticles = articlePromos.filter((article) =>
    isReleased(article.monthYear),
  );

  const latestArticle = releasedArticles[0];
  const overriddenArticle =
    articleOverride &&
    articlePromos.find((a) => String(a.id) === articleOverride);

  return (
    <Layout wrapper className="homepage">
      <Header />

      <PageSection screen="half">
        <Layout container>
          <div className="visually-hidden">
            <Text appearance="h3" tag="h2">
              Latest article..
            </Text>
          </div>

          <Layout grid="70_30" stack="md">
            <Layout.Column>
              {overriddenArticle && (
                <>
                  <Layout bottomGutter="md">
                    <Text tag="h3" appearance="h2">
                      {overriddenArticle.title}
                    </Text>
                    <Text appearance="body-3">
                      Published in {latestArticle.monthYear} by{" "}
                      <Link url="/profile">{latestArticle.author}</Link>
                    </Text>
                  </Layout>
                  <Text appearance="body-1">{overriddenArticle.blurb}</Text>
                  <Layout topGutter="lg">
                    <ButtonGroup>
                      <Button url={overriddenArticle.slug} appearance="body-1">
                        Read this article
                      </Button>
                      <Button
                        url="/articles"
                        appearance="body-1"
                        tier="secondary"
                      >
                        More articles
                      </Button>
                    </ButtonGroup>
                  </Layout>
                </>
              )}

              {!overriddenArticle && latestArticle && (
                <>
                  <Layout bottomGutter="md">
                    <Text tag="h2" appearance="h2">
                      {latestArticle.title}
                    </Text>
                    <Text appearance="body-3">
                      Published in {latestArticle.monthYear} by{" "}
                      <Link url="/profile">{latestArticle.author}</Link>
                    </Text>
                  </Layout>
                  <Text appearance="body-1">{latestArticle.blurb}</Text>
                  <Layout topGutter="lg">
                    <ButtonGroup>
                      <Button url={latestArticle.slug} appearance="body-1">
                        Read this article
                      </Button>
                      <Button
                        url="/articles"
                        appearance="body-1"
                        tier="secondary"
                      >
                        More articles
                      </Button>
                    </ButtonGroup>
                  </Layout>
                </>
              )}
            </Layout.Column>

            <Layout.Column>&nbsp;</Layout.Column>
          </Layout>
        </Layout>
      </PageSection>

      <PageSection screen="half">
        <Layout container>
          <Layout grid="60_40" gap="xl" stack="md">
            <Layout.Column>
              <Layout bottomGutter="lg">
                <Text tag="h2" appearance="h5">
                  About TrustDesign
                </Text>

                <Text appearance="body-1">
                  This project explores the human computer relationship, and how
                  trust can be understood, measured, and designed into emerging
                  technologies.
                </Text>

                <Text appearance="body-1">
                  We build tools that make the mechanics of trust visible -
                  helping designers, businesses, and researchers see where
                  technology supports human intention.
                </Text>
              </Layout>
            </Layout.Column>

            <Layout.Column>
              <Text tag="h2" appearance="h5">
                About me
              </Text>

              <Text appearance="body-1">
                I'm Danny Chambers - a Design Technologist working at the
                intersection of user experience design and interface
                development.
              </Text>

              <Text appearance="body-1">
                <Link url="/dannyclaydenchambers" target="_blank">
                  More about my experience
                </Link>
              </Text>
            </Layout.Column>
          </Layout>
        </Layout>
      </PageSection>

      <PageSection screen="half" backgroundColor="rgb(4 10 16 / 90%)">
        <Layout container>
          <div className="activity-feed">
            <Text tag="h2" appearance="h5">
              Activity
            </Text>

            <Text appearance="body-1">
              Contributions across the{" "}
              <Link href="https://github.com/trustdesign-io" target="blank">
                trustdesign-io
              </Link>{" "}
              github org - human and agent.
            </Text>

            <Layout topGutter="md" bottomGutter="sm">
              <ActivityHeatmap weeks={isDesktopLarge ? 36 : 7} />
            </Layout>
          </div>
        </Layout>
      </PageSection>

      <Footer />
    </Layout>
  );
};

export default Home;
