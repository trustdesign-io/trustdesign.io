import React from "react";
import { PageSection, Layout, Text, Link } from "../../../";
import Header from "../../../03_partials/header";
import Footer from "../../../03_partials/footer";

const Article_9: React.FC = () => {
  return (
    <Layout wrapper>
      <Header />
      <PageSection screen="content">
        <Layout container>
          <article>
            <Layout grid="70_30" stack="md">
              <Layout.Column>
                <Text tag="h1" appearance="h2">
                  Forensic UX Case Study: Scam UI Dissection
                </Text>

                <Layout bottomGutter="xl">
                  <Text appearance="body-2">
                    <em>Published on July 2026 by Danny Chambers</em>
                  </Text>
                </Layout>

                <Layout topGutter="xl" bottomGutter="xl">
                  <Text tag="h2" appearance="h5">
                    Why Scam Interfaces Deserve Serious Study
                  </Text>
                  <Text appearance="body-2">
                    Scam UIs aren’t crude or simplistic—they are weaponised
                    psychology. They borrow directly from patterns used in
                    legitimate products but sharpen them for deception. Studying
                    how scam interfaces work is crucial for Trust Design because
                    it exposes how easily visual language, interaction patterns,
                    and behavioural triggers can be turned against people. The
                    more we understand these tactics, the better we can design
                    trustworthy systems that clearly differentiate themselves
                    from fraudulent ones.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    The Core Mechanics of a Scam UI
                  </Text>
                  <Text appearance="body-2">
                    Most scam flows follow a predictable script, regardless of
                    target audience or platform:
                    <br />
                    <br />
                    <strong>1. Urgency and panic.</strong> Countdowns, flashing
                    colours, and wording like “Immediate action required” push
                    people into fast, uncritical decisions.
                    <br />
                    <strong>2. False authority.</strong> Impersonation of banks,
                    delivery services, or government agencies using logos, tone,
                    colours, and layout cues.
                    <br />
                    <strong>3. Constrained pathways.</strong> One oversized “Fix
                    Now” button and either no exit path—or one hidden in
                    low-contrast text.
                    <br />
                    <strong>4. Emotional hijacking.</strong> Messages implying
                    blame, danger, or embarrassment: “Your account is suspended
                    due to suspicious activity.”
                    <br />
                    <br />
                    These patterns work because they exploit our cognitive
                    shortcuts. Under pressure, the brain favours speed over
                    accuracy.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Coercive Patterns in Detail
                  </Text>
                  <Text appearance="body-2">
                    Scam interfaces often rely on predictable design tricks:
                    <br />
                    <br />• <strong>Fake system scans</strong> using animated
                    progress bars that imply malware or identity theft.
                    <br />• <strong>Forced fullscreen overlays</strong> that
                    mimic operating-system alerts.
                    <br />• <strong>Pre-selected harmful actions</strong> (e.g.,
                    “Call support now” leading to a scam hotline).
                    <br />• <strong>Brand mimicry</strong> that exploits trust
                    in familiar styling.
                    <br />
                    <br />
                    These techniques are effective because they hijack
                    legitimate interaction patterns. When users see a UI that
                    looks like their bank or OS, they extend trust
                    automatically.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Example: The Fake “Account Locked” Flow
                  </Text>
                  <Text appearance="body-2">
                    One of the most common scam patterns is the “Account Locked”
                    sequence. It typically includes:
                    <br />
                    <br />
                    • a security-style colour palette (reds, amber, dark navy)
                    <br />
                    • a bold system-warning icon
                    <br />
                    • a headline like “Unusual activity detected”
                    <br />
                    • a single large button: “Secure My Account”
                    <br />
                    • hidden or disabled navigation options
                    <br />
                    <br />
                    What makes this pattern dangerous is its familiarity. Real
                    products use nearly identical layouts during real security
                    incidents. The line between legitimate caution and coercive
                    fear is thinner than it looks.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    What Legitimate Products Must Avoid
                  </Text>
                  <Text appearance="body-2">
                    Forensic UX isn’t about pointing fingers—it’s about
                    recognising how easily harmful patterns slip into everyday
                    work. A legitimate product can accidentally resemble a scam
                    if it uses:
                    <br />
                    <br />
                    • unnecessary urgency
                    <br />
                    • unclear consequences
                    <br />
                    • hidden decline options
                    <br />
                    • aggressive upsell or reactivation flows
                    <br />
                    <br />
                    When users can’t distinguish your interface from fraud,
                    trust collapses. The goal is not to remove friction, but to
                    remove <em>coercive</em> friction.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Designing Products That Feel “Nothing Like a Scam”
                  </Text>
                  <Text appearance="body-2">
                    Trustworthy experiences have a recognisable feel:
                    <br />
                    <br />
                    • calm visual tone
                    <br />
                    • reversible actions
                    <br />
                    • clear system status
                    <br />
                    • explicit explanations
                    <br />
                    • honest microcopy
                    <br />
                    • no hidden paths
                    <br />
                    <br />
                    When a product maintains composure—even in security
                    flows—users feel safer. Visual calm is a trust signal.
                  </Text>

                  <Text tag="h2" appearance="h5">
                    Why Forensic UX Matters for Trust Design
                  </Text>
                  <Text appearance="body-2">
                    Studying scam UIs sharpens a team’s sensitivity to risk,
                    ambiguity, and coercion. It helps designers recognise early
                    when a feature drifts toward patterns that might “convert”
                    but undermine trust. The goal is not simply to avoid harm,
                    but to build products that actively resist harmful
                    interpretation. When your UI feels nothing like a scam—even
                    under stress—users feel confident, safe, and respected.
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

export default Article_9;
