"use client";

import { motion } from "framer-motion";
import EventImage from "./EventImage";
import EventContent, { EventData } from "./EventContent";

interface EventBlockProps {
  event: EventData;
  reverse?: boolean;
}

export default function EventBlock({
  event,
  reverse = false,
}: EventBlockProps) {
  const featured = event.featured ?? false;

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Background Glow */}
      <div
        className={`absolute inset-0 rounded-[40px] blur-3xl opacity-40 ${
          event.theme === "haldi"
            ? "bg-yellow-100"
            : event.theme === "pudava"
            ? "bg-rose-100"
            : event.theme === "wedding"
            ? "bg-amber-100"
            : "bg-purple-100"
        }`}
      />

      <div
        className={`
          relative overflow-hidden rounded-[40px]
          border border-[#E8D9B5]
          bg-white/70
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          ${
            featured
              ? "px-8 py-10 md:px-12 md:py-14"
              : "px-6 py-8 md:px-10 md:py-10"
          }
        `}
      >
        {/* Decorative Corners */}
        <div className="absolute left-5 top-5 h-10 w-10 rounded-full border border-[#D4AF37]/30" />
        <div className="absolute right-5 top-5 h-10 w-10 rounded-full border border-[#D4AF37]/30" />
        <div className="absolute bottom-5 left-5 h-10 w-10 rounded-full border border-[#D4AF37]/30" />
        <div className="absolute bottom-5 right-5 h-10 w-10 rounded-full border border-[#D4AF37]/30" />

        <div
          className={`
            grid items-center gap-12
            ${
              featured
                ? "lg:grid-cols-[1.2fr_1fr]"
                : "lg:grid-cols-2"
            }
          `}
        >
          {reverse ? (
            <>
              <EventContent event={event} />
              <EventImage
                image={event.image}
                title={event.title}
                featured={featured}
              />
            </>
          ) : (
            <>
              <EventImage
                image={event.image}
                title={event.title}
                featured={featured}
              />
              <EventContent event={event} />
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}