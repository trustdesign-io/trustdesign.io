import React from "react";

import {
  PageSection,
  Layout,
  Text,
  LinkGroup,
  Icon,
  Link,
  Avatar,
} from "../../";

import DannyChambers from "../../00_assets/images/DannyClaydenChambers-1.jpg";

/* -- Content -- */

const Profile: React.FC = () => {
  return (
    <Layout wrapper>
      <PageSection screen="full">
        <Layout container>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Layout bottomGutter="lg">
              <Avatar src={DannyChambers} size="xl" />
            </Layout>
            <Text tag="h1" appearance="h4">
              Design technology, human-centred interfaces and systems
            </Text>
            <Text appearance="body-1">
              I'm Danny Chambers — a Design Technologist with 20 years of
              experience working at the intersection of user experience design
              and front-end engineering.
            </Text>
            <Text appearance="body-1">
              I specialise in prototyping, design systems and nurturing
              effective designer–developer relationships.
            </Text>
            <Text appearance="body-1">
              If you’re building something and want to deliver robust, scalable
              interfaces - lets talk!
            </Text>
            <Layout topGutter="lg">
              <LinkGroup alignment="center">
                {/* <Link url="mailto:danny@trustdesign.io" title="Email">
                  <span className="visually-hidden">Email</span>
                  <Icon name="email" />
                </Link> */}
                <Link
                  url="https://www.linkedin.com/in/dannyclaydenchambers"
                  title="Find me on LinkedIn"
                  target="_blank"
                >
                  <span className="visually-hidden">LinkedIn</span>
                  <Icon name="linkedin-logo" />
                </Link>
                <Link
                  url="https://github.com/dannychambers"
                  title="Find me on Github"
                  target="_blank"
                >
                  <span className="visually-hidden">Github</span>
                  <Icon name="github-logo" />
                </Link>
                <Link
                  url="https://x.com/claydenchambers"
                  title="Find me on X"
                  target="_blank"
                >
                  <span className="visually-hidden">X</span>
                  <Icon name="x-logo" />
                </Link>
              </LinkGroup>
            </Layout>
          </div>
        </Layout>
      </PageSection>
    </Layout>
  );
};

export default Profile;
