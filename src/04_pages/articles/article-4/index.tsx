
import React from "react";
import { PageSection, Layout, Text, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_4: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>

                <Text tag="h1" appearance="h2">
                  A Brief History of Manipulative Design
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published on February 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">Section Title</Text>
                  <Text appearance="body-2">Full article text section. (Content abbreviated in this python output but would be replaced by final copy.)</Text>

                  <Text tag="h2" appearance="h5">Another Section</Text>
                  <Text appearance="body-2">Full article text section. (Content abbreviated in this python output but would be replaced by final copy.)</Text>
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

export default Article_4;
