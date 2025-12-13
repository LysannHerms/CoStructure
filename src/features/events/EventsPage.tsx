import React from "react";
import {
  EventHero,
  ProgramCalendarSection,
  MobileCubesSection,
  PermanentCubesSection,
  EventFormatsSection,
  EventContributeSection,
} from "./sections/";

const EventsPage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[color:var(--peach-fuzz)]/30  via-[color:var(--atomic-tangerine)] to-[color:var(--syracuse-red-orange)]">
      
      <div className="relative">
        <EventHero />
        <ProgramCalendarSection />
        <MobileCubesSection />
        <PermanentCubesSection />
        <EventFormatsSection />
        <EventContributeSection />
      </div>
    </main>
  );
};

export default EventsPage;
