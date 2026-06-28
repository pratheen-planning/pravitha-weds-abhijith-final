"use client";

import EventBlock from "./EventBlock";
import EventHeader from "./EventHeader";
import GoldDivider from "./GoldDivider";
import type { EventData } from "./EventContent";

const events: EventData[] = [
  {
    id: 1,
    type: "Haldi",
    title: "Haldi Ceremony",
    subtitle: "A joyful beginning filled with love, laughter and vibrant traditions.",
    date: "16 August 2026",
    time: "5:00 PM Onwards",
    venue: "Thiruvalla, Kuttoor",
    image: "/images/events/haldi.jpg",
    maps:
      "https://www.google.com/maps/place/9%C2%B021'30.7%22N+76%C2%B035'40.1%22E/@9.358535,76.5918821,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.358535!4d76.594457",
    theme: "haldi",
    featured: false,
  },
  {
    id: 2,
    type: "Pudava Kodukkal",
    title: "Pudava Kodukkal",
    subtitle: "A beautiful tradition that marks love, respect and togetherness.",
    date: "17 August 2026",
    time: "10:00 AM Onwards",
    venue: "Thiruvalla, Kuttoor",
    image: "/images/events/pudava.jpg",
    maps:
      "https://www.google.com/maps/place/9%C2%B021'30.7%22N+76%C2%B035'40.1%22E/@9.358535,76.5918821,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.358535!4d76.594457",
    theme: "pudava",
    featured: false,
  },
  {
    id: 3,
    type: "Wedding",
    title: "Wedding Ceremony",
    subtitle: "Two hearts, two families, one beautiful promise.",
    date: "18 August 2026",
    time: "11:47 AM",
    venue: "Mannam Smaraka Mandiram, N.S.S. Auditorium, Mundankavu, Kallissery",
    image: "/images/events/wedding.jpg",
    maps:
      "https://www.google.com/maps/place/Mannam+smaraka+mandiram,+N.S.S.+Auditorium./@9.3316384,76.6053959,17z",
    theme: "wedding",
    featured: true,
  },
  {
    id: 4,
    type: "Reception",
    title: "Wedding Reception",
    subtitle: "An evening of celebration, dinner and endless memories.",
    date: "18 August 2026",
    time: "6:00 PM Onwards",
    venue: "Chettikulangara",
    image: "/images/events/reception.jpg",
    maps:
      "https://www.google.com/maps/place/9.220686,76.516936",
    theme: "reception",
    featured: false,
  },
];

export default function WeddingCelebrations() {
  return (
    <section
      id="celebrations"
      className="relative overflow-hidden bg-[#FFF9F4] py-24"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-amber-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <EventHeader />

        <div className="mt-20 space-y-24">
          {events.map((event, index) => (
            <div key={event.id}>
              <EventBlock
                event={event}
                reverse={index % 2 !== 0}
              />

              {index !== events.length - 1 && (
                <div className="py-16">
                  <GoldDivider />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}