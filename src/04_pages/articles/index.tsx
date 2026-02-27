import React from "react";

import { PageSection, Layout, Text, List } from "../../";

import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";
import Link from "../../03_partials/link";
import { useLocation } from "react-router-dom";

const isReleased = (monthYear: string, forceAll: boolean): boolean => {
  if (forceAll) return true;
  const [month, year] = monthYear.split(" ");
  const release = new Date(`${month} 1, ${year}`);
  const now = new Date();
  return now >= release;
};

/* -- Content -- */

const Articles: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const forceAll = params.get("allArticles") === "true";

  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="full">
        <Layout container>
          <Layout bottomGutter="xl">
            <Text tag="h1" appearance="h4">
              Articles
            </Text>
          </Layout>
          <Layout grid="80_20" stack="md">
            <Layout.Column>
              <List marker={false} margin="md" appearance="body-1">
                {isReleased("December 2026", forceAll) && (
                  <li>
                    <Link to="/the-future-of-trust-design">
                      The Future of Trust Design
                    </Link>
                    <Text appearance="body-3">
                      Published in December 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("November 2026", forceAll) && (
                  <li>
                    <Link to="/the-trust-design-toolkit-explained">
                      The Trust Design Toolkit Explained
                    </Link>
                    <Text appearance="body-3">
                      Published in November 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("October 2026", forceAll) && (
                  <li>
                    <Link to="/trust-by-default-product-design-principles">
                      Trust by Default: Product Design Principles
                    </Link>
                    <Text appearance="body-3">
                      Published in October 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("September 2026", forceAll) && (
                  <li>
                    <Link to="/designing-for-safety-and-consent">
                      Designing for Safety and Consent
                    </Link>
                    <Text appearance="body-3">
                      Published in September 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("August 2026", forceAll) && (
                  <li>
                    <Link to="/from-ux-to-policy">From UX to Policy</Link>
                    <Text appearance="body-3">
                      Published in August 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("July 2026", forceAll) && (
                  <li>
                    <Link to="/forensic-ux-case-study-scam-ui-dissection">
                      Forensic UX Case Study: Scam UI Dissection
                    </Link>
                    <Text appearance="body-3">
                      Published in July 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("June 2026", forceAll) && (
                  <li>
                    <Link to="/the-ethics-of-persuasion">
                      The Ethics of Persuasion
                    </Link>
                    <Text appearance="body-3">
                      Published in June 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("May 2026", forceAll) && (
                  <li>
                    <Link to="/scam-interfaces-and-forensic-ux">
                      Auditing for Trustworthiness
                    </Link>
                    <Text appearance="body-3">
                      Published in May 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("April 2026", forceAll) && (
                  <li>
                    <Link to="/trust-signals-in-ai-interfaces">
                      Trust Signals in AI Interfaces
                    </Link>
                    <Text appearance="body-3">
                      Published in April 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("March 2026", forceAll) && (
                  <li>
                    <Link to="/designing-transparency">
                      Designing Transparency
                    </Link>
                    <Text appearance="body-3">
                      Published in March 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("February 2026", forceAll) && (
                  <li>
                    <Link to="/a-brief-history-of-manipulative-design">
                      A Brief History of Manipulative Design
                    </Link>
                    <Text appearance="body-3">
                      Published in February 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("January 2026", forceAll) && (
                  <li>
                    <Link to="/what-is-trust-design">
                      What Is Trust Design?
                    </Link>
                    <Text appearance="body-3">
                      Published in January 2026 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("December 2025", forceAll) && (
                  <li>
                    <Link to="/trust-design-audit-what-it-does-and-why-it-matters">
                      Trust Design Audit: what it does and why it matters
                    </Link>
                    <Text appearance="body-3">
                      Published in December 2025 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
                {isReleased("November 2025", forceAll) && (
                  <li>
                    <Link to="/designing-trust-for-emerging-technology">
                      Designing Trust for emerging technology
                    </Link>
                    <Text appearance="body-3">
                      Published in November 2025 by{" "}
                      <Link to="/dannyclaydenchambers" subtle>
                        Danny Clayden Chambers
                      </Link>
                    </Text>
                  </li>
                )}
              </List>
            </Layout.Column>
            <Layout.Column>&nbsp;</Layout.Column>
          </Layout>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Articles;
