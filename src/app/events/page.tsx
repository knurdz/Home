import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import EventsList from "@/components/EventsList";
import { getAllEvents } from "@/lib/events";

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <Navbar activePage="events" />
      <ScrollIndicator />

      <main className="pt-site-header-lg pb-16 sm:pb-20 overflow-x-hidden">
        <section className="relative px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl min-w-0">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-border text-muted text-xs sm:text-sm mono-font">
                $ ls events/
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 mono-font text-foreground leading-tight">
                Event <span className="text-faded">Solutions</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto px-1 leading-relaxed">
                Web and software platforms we ship for competitions, workshops,
                and partner-led events.
              </p>
            </div>

            <EventsList events={events} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
