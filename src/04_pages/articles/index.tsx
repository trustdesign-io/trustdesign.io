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
              Recent articles
            </Text>
          </Layout>
          <Layout grid="80_20" stack="md">
            <Layout.Column>
              <List marker={false} margin="md" appearance="body-1">
                {isReleased("December 2026", forceAll) && (
                  <li>
                    <Link to="/article-14">The Future of Trust Design</Link>
                    <Text appearance="body-3">Published in December 2026.</Text>
                  </li>
                )}
                {isReleased("November 2026", forceAll) && (
                  <li>
                    <Link to="/article-13">
                      The Trust Design Toolkit Explained
                    </Link>
                    <Text appearance="body-3">Published in November 2026.</Text>
                  </li>
                )}
                {isReleased("October 2026", forceAll) && (
                  <li>
                    <Link to="/article-12">
                      Trust by Default: Product Design Principles
                    </Link>
                    <Text appearance="body-3">Published in October 2026.</Text>
                  </li>
                )}
                {isReleased("September 2026", forceAll) && (
                  <li>
                    <Link to="/article-11">
                      Designing for Safety and Consent
                    </Link>
                    <Text appearance="body-3">
                      Published in September 2026.
                    </Text>
                  </li>
                )}
                {isReleased("August 2026", forceAll) && (
                  <li>
                    <Link to="/article-10">From UX to Policy</Link>
                    <Text appearance="body-3">Published in August 2026.</Text>
                  </li>
                )}
                {isReleased("July 2026", forceAll) && (
                  <li>
                    <Link to="/article-9">
                      Forensic UX Case Study: Scam UI Dissection
                    </Link>
                    <Text appearance="body-3">Published in July 2026.</Text>
                  </li>
                )}
                {isReleased("June 2026", forceAll) && (
                  <li>
                    <Link to="/article-8">The Ethics of Persuasion</Link>
                    <Text appearance="body-3">Published in June 2026.</Text>
                  </li>
                )}
                {isReleased("May 2026", forceAll) && (
                  <li>
                    <Link to="/article-7">Auditing for Trustworthiness</Link>
                    <Text appearance="body-3">Published in May 2026.</Text>
                  </li>
                )}
                {isReleased("April 2026", forceAll) && (
                  <li>
                    <Link to="/article-6">Trust Signals in AI Interfaces</Link>
                    <Text appearance="body-3">Published in April 2026.</Text>
                  </li>
                )}
                {isReleased("March 2026", forceAll) && (
                  <li>
                    <Link to="/article-5">Designing Transparency</Link>
                    <Text appearance="body-3">Published in March 2026.</Text>
                  </li>
                )}
                {isReleased("February 2026", forceAll) && (
                  <li>
                    <Link to="/article-4">
                      A Brief History of Manipulative Design
                    </Link>
                    <Text appearance="body-3">Published in February 2026.</Text>
                  </li>
                )}
                {isReleased("January 2026", forceAll) && (
                  <li>
                    <Link to="/article-3">What Is Trust Design?</Link>
                    <Text appearance="body-3">Published in January 2026.</Text>
                  </li>
                )}
                {isReleased("December 2025", forceAll) && (
                  <li>
                    <Link to="/trust-design-audit-what-it-does-and-why-it-matters">
                      Trust Design Audit: what it does and why it matters
                    </Link>
                    <Text appearance="body-3">Published in December 2025.</Text>
                  </li>
                )}
                {isReleased("November 2025", forceAll) && (
                  <li>
                    <Link to="/designing-trust-for-emerging-technology">
                      Designing Trust for emerging technology
                    </Link>
                    <Text appearance="body-3">Published in November 2025.</Text>
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
