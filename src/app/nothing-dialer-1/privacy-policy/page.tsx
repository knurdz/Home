import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

const BASE_URL = "https://knurdz.org";
const PAGE_PATH = "/nothing-dialer-1/privacy-policy";

export const metadata: Metadata = {
  title: "Nothing Dialer 1 Privacy Policy",
  description:
    "Privacy Policy for Nothing Dialer 1 by Knurdz Organization.",
  alternates: {
    canonical: `${BASE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Nothing Dialer 1 Privacy Policy",
    description:
      "Read how Nothing Dialer 1 handles permissions, local processing, and data security.",
    url: `${BASE_URL}${PAGE_PATH}`,
    siteName: "Knurdz",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Nothing Dialer 1 Privacy Policy",
    description:
      "Read how Nothing Dialer 1 handles permissions, local processing, and data security.",
  },
};

export default function NothingDialerPrivacyPolicyPage() {
  return (
    <>
      <ScrollIndicator />
      <Navbar />

      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-14">
            <span className="inline-block px-4 py-2 rounded border border-border text-muted text-sm mono-font mb-6">
              $ cat privacy-policy.md
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mono-font leading-tight text-foreground">
              Nothing Dialer 1 <span className="text-faded">Privacy Policy</span>
            </h1>
            <p className="text-muted text-lg mt-6 leading-relaxed">
              Welcome to Nothing Dialer 1, developed by Knurdz Organization. Your
              privacy is critically important to us. This policy
              explains how we handle your information when you use our mobile
              application.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm mono-font text-muted">
              <span className="px-3 py-1 rounded border border-border bg-card">
                Effective Date: April 15, 2026
              </span>
              <span className="px-3 py-1 rounded border border-border bg-card">
                Last Updated: April 15, 2026
              </span>
            </div>
          </header>

          <article className="space-y-8">
            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mono-font mb-4 text-foreground">
                1. Information We Collect and Why
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Nothing Dialer 1 is designed to be a utility-first application.
                To function as a replacement dialer and integrate with the Nothing
                Glyph Interface, we require the following permissions:
              </p>
              <ul className="space-y-4 text-muted leading-relaxed">
                <li>
                  <span className="mono-font text-foreground">
                    Contacts (READ_CONTACTS, WRITE_CONTACTS):
                  </span>{" "}
                  Used to display your contact list, allow you to search for
                  people to call, and show caller IDs.
                </li>
                <li>
                  <span className="mono-font text-foreground">
                    Phone and Call Logs (READ_CALL_LOG, CALL_PHONE):
                  </span>{" "}
                  Used to make outgoing calls, show your recent call history,
                  and manage active calls.
                </li>
                <li>
                  <span className="mono-font text-foreground">
                    Nothing Glyph Interface (GDK):
                  </span>{" "}
                  Used to trigger the LED patterns on the back of your Nothing
                  Phone when you receive calls or notifications.
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mono-font mb-4 text-foreground">
                2. Data Storage and Transfer
              </h2>
              <ul className="space-y-4 text-muted leading-relaxed">
                <li>
                  <span className="mono-font text-foreground">Local Processing:</span>{" "}
                  All contact information and call logs are processed locally on
                  your device.
                </li>
                <li>
                  <span className="mono-font text-foreground">No Cloud Uploads:</span>{" "}
                  Knurdz Organization does not collect, upload, or store
                  your contacts or call history on our servers. Your personal
                  communication data stays on your phone.
                </li>
                <li>
                  <span className="mono-font text-foreground">Third-Party Sharing:</span>{" "}
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties.
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mono-font mb-4 text-foreground">
                3. Hardware Integration
              </h2>
              <p className="text-muted leading-relaxed">
                Nothing Dialer 1 utilizes the Nothing Glyph Developer Kit (GDK).
                This integration is used solely for visual signaling via the
                device&apos;s hardware LEDs. No audio or metadata from your calls
                is transmitted to Nothing Technology Limited or any other third
                party through this integration.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mono-font mb-4 text-foreground">
                4. Security
              </h2>
              <p className="text-muted leading-relaxed">
                We implement industry-standard security practices within the
                Flutter framework to ensure that the app handles your device&apos;s
                data securely. However, please remember that no method of
                electronic storage or transmission is 100% secure.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mono-font mb-4 text-foreground">
                5. Changes to This Policy
              </h2>
              <p className="text-muted leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the version within the app.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mono-font mb-4 text-foreground">
                6. Contact Us
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us:
              </p>
              <ul className="space-y-3 text-muted leading-relaxed">
                <li>
                  <span className="mono-font text-foreground">Company:</span>{" "}
                  Knurdz Organization
                </li>
                <li>
                  <span className="mono-font text-foreground">Email:</span>{" "}
                  support@knurdz.org
                </li>
                <li>
                  <span className="mono-font text-foreground">Location:</span>{" "}
                  Colombo, Sri Lanka
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}