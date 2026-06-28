"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import MapButton from "./MapButton";

export interface EventData {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  maps: string;
  theme: "haldi" | "pudava" | "wedding" | "reception";
  featured?: boolean;
}

interface EventContentProps {
  event: EventData;
}

const themeStyles = {
  haldi: {
    badge: "bg-amber-100 text-amber-800 border-amber-200",
    accent: "text-amber-700",
    line: "from-amber-300 via-yellow-500 to-amber-300",
  },
  pudava: {
    badge: "bg-rose-100 text-rose-800 border-rose-200",
    accent: "text-rose-700",
    line: "from-rose-300 via-rose-500 to-rose-300",
  },
  wedding: {
    badge: "bg-yellow-100 text-yellow-800 border-yellow-300",
    accent: "text-[#B88917]",
    line: "from-yellow-300 via-[#D4AF37] to-yellow-300",
  },
  reception: {
    badge: "bg-purple-100 text-purple-800 border-purple-200",
    accent: "text-purple-700",
    line: "from-purple-300 via-fuchsia-500 to-purple-300",
  },
};

export default function EventContent({ event }: EventContentProps) {
  const style = themeStyles[event.theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7 }}
      className="flex h-full flex-col justify-center"
    >
      <span
        className={`mb-5 inline-flex w-fit rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${style.badge}`}
      >
        {event.type}
      </span>

      <h2 className="font-serif text-4xl font-semibold leading-tight text-[#4D3424] md:text-5xl">
        {event.title}
      </h2>

      <div
        className={`my-6 h-[2px] w-24 bg-gradient-to-r ${style.line}`}
      />

      <p className="max-w-lg text-base leading-8 text-[#6A584B] md:text-lg">
        {event.subtitle}
      </p>

      <div className="mt-10 space-y-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-white p-3 shadow-md">
            <CalendarDays className={`h-5 w-5 ${style.accent}`} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Date
            </p>

            <h4 className="mt-1 text-lg font-medium text-[#4D3424]">
              {event.date}
            </h4>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-full bg-white p-3 shadow-md">
            <Clock3 className={`h-5 w-5 ${style.accent}`} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Time
            </p>

            <h4 className="mt-1 text-lg font-medium text-[#4D3424]">
              {event.time}
            </h4>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-full bg-white p-3 shadow-md">
            <MapPin className={`h-5 w-5 ${style.accent}`} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Venue
            </p>

            <h4 className="mt-1 max-w-md text-lg leading-7 text-[#4D3424]">
              {event.venue}
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <MapButton href={event.maps} />
      </div>
    </motion.div>
  );
}