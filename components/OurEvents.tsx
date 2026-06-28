"use client";

import EventSection from "./EventSection";

const events = [
  {
    image: "/images/events/haldi.jpg",
    title: "Haldi Ceremony",
    subtitle:
      "A joyful beginning filled with love, laughter and vibrant traditions.",
    date: "16 August 2026",
    time: "5:00 PM",
    venue: "Thiruvalla, Kuttoor",
  },
  {
    image: "/images/events/pudava.jpg",
    title: "Pudava Kodukkal",
    subtitle:
      "A beautiful tradition celebrating togetherness, blessings and family.",
    date: "17 August 2026",
    time: "10:00 AM",
    venue: "Thiruvalla, Kuttoor",
  },
  {
    image: "/images/events/wedding.jpg",
    title: "Wedding Ceremony",
    subtitle:
      "The moment our hearts become one, surrounded by love and blessings.",
    date: "18 August 2026",
    time: "11:47 AM - 12:05 PM",
    venue: "N.S.S Auditorium, Mundankavu",
  },
  {
    image: "/images/events/reception.jpg",
    title: "Evening Reception",
    subtitle:
      "Join us for an evening of celebration, joy and unforgettable memories.",
    date: "18 August 2026",
    time: "6:00 PM",
    venue: "Chettikulangara",
  },
];

export default function OurEvents() {
  return (
    <>
      {events.map((event) => (
        <EventSection key={event.title} {...event} />
      ))}
    </>
  );
}