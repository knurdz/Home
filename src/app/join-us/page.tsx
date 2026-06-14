import ScrollIndicator from "@/components/ScrollIndicator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyJoinUs from "@/components/WhyJoinUs";

export default function JoinUsPage() {
  return (
    <>
      <ScrollIndicator />

      {/* Navigation */}
      <Navbar activePage="join-us" />

      <main className="min-h-screen pt-site-header-lg pb-16 sm:pb-20 px-4 sm:px-6 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl min-w-0">

          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded border border-border text-muted text-sm mono-font mb-6">
              $ git checkout -b join-the-team
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mono-font leading-tight">
              <span className="text-foreground">Join</span>{" "}
              <span className="text-faded">Us</span>
              <span className="text-green-500">.</span>
            </h1>
            <p className="mt-4 text-xl text-muted max-w-xl">
              Ready to build the future with Knurdz? We&apos;re always looking for talented individuals.
            </p>
          </div>

          <WhyJoinUs />

          <section className="mt-10 pt-10 border-t border-border">
            <div className="mx-auto max-w-3xl">
              <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
                <p className="mono-font text-xs text-muted">// intake.status</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                  <span className="mono-font text-sm text-red-500">applications closed</span>
                </div>
                <h2 className="text-2xl font-bold mono-font text-foreground">
                  Applications are currently closed
                </h2>
                <p className="text-muted text-sm leading-relaxed max-w-xl mx-auto">
                  We&apos;re not accepting new applications at the moment. This intake cycle has reached
                  its capacity — check back soon for the next opportunity to join Knurdz.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
