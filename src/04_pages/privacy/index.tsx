import React from "react";
import { PageSection, Layout, Text, List, Link } from "../../";
import Header from "../../03_partials/header";
import Footer from "../../03_partials/footer";

/* -- Content -- */

const Privacy: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <Layout bottomGutter="xl">
            <Text tag="h1" appearance="h4">
              Trust Design Toolkit — Privacy Policy
            </Text>
            <Text appearance="body-2">
              <strong>Last updated:</strong> 7 November 2025
            </Text>
            <Text appearance="body-2">
              <strong>Owner:</strong> Trust Design Toolkit (“TDT”), developed by
              Trust Design Ltd.
            </Text>
          </Layout>

          <Text tag="h2" appearance="h5">
            1. Overview
          </Text>
          <Text appearance="body-2">
            The Trust Design Toolkit is a local-only Chrome extension that helps
            designers and product teams inspect, edit, and audit digital
            interfaces. The extension operates entirely on your device and does{" "}
            <strong>not</strong> collect, transmit, or store any personal data
            on external servers.
          </Text>

          <Text tag="h2" appearance="h5">
            2. Data Handling and Storage
          </Text>
          <List appearance="body-2">
            <li>
              <strong>Local-only processing:</strong> All analysis and editing
              happen in your browser.
            </li>
            <li>
              <strong>Storage:</strong> Only lightweight preferences are stored
              using <code>chrome.storage.sync</code> (e.g. selected tool,
              attribute name, and license key).
            </li>
            <li>
              <strong>No cloud sync:</strong> No data is sent to, or retrieved
              from, any external service.
            </li>
            <li>
              <strong>No telemetry or analytics:</strong> The extension contains
              no tracking scripts, cookies, or analytics tags.
            </li>
            <li>
              <strong>Exports:</strong> When you choose to export results, files
              are generated and downloaded locally on your device only.
            </li>
          </List>

          <Text tag="h2" appearance="h5">
            3. Permissions Used and Why
          </Text>
          <List appearance="body-2">
            <li>
              <strong>activeTab:</strong> Allows the selected tool to run on the
              current webpage at the user’s request.
            </li>
            <li>
              <strong>downloads:</strong> Enables optional export of audit or
              inspection results (JSON/DOCX).
            </li>
            <li>
              <strong>host permissions:</strong> Grants read-only access so
              tools can analyse page content for inspection or editing.
            </li>
            <li>
              <strong>scripting:</strong> Injects local content scripts required
              for the tools to function.
            </li>
            <li>
              <strong>storage:</strong> Saves non-personal user preferences
              locally (no external sync).
            </li>
            <li>
              <strong>remote code:</strong> Not used; all code is packaged
              within the extension.
            </li>
          </List>

          <Text tag="h2" appearance="h5">
            4. Data Sharing
          </Text>
          <Text appearance="body-2">
            The Trust Design Toolkit does <strong>not</strong> share, sell, or
            transmit any user data to third parties. No network requests are
            made by the extension at any point.
          </Text>

          <Text tag="h2" appearance="h5">
            5. Security
          </Text>
          <Text appearance="body-2">
            All operations occur within the Chrome browser sandbox. The
            extension never requests or stores sensitive information such as
            passwords, payment data, or user identifiers.
          </Text>

          <Text tag="h2" appearance="h5">
            6. User Control and Removal
          </Text>
          <Text appearance="body-2">
            You can remove all stored preferences at any time by:
          </Text>
          <List appearance="body-2">
            <li>
              Opening Chrome → Extensions → Manage Extensions → Remove Trust
              Design Toolkit, or
            </li>
            <li>Clearing extension data in Chrome’s settings.</li>
          </List>

          <Text tag="h2" appearance="h5">
            7. Contact
          </Text>
          <Text appearance="body-2">
            For any privacy or compliance questions, please contact:
          </Text>
          <List appearance="body-2">
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:admin@trustdesign.io">
                admin@trustdesign.io
              </Link>
            </li>
            <li>
              <strong>Developer:</strong> Trust Design Ltd
            </li>
          </List>
        </Layout>
      </PageSection>
      <Footer />
    </Layout>
  );
};

export default Privacy;
