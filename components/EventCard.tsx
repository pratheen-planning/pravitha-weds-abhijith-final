"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
}

export default function EventCard({
  image,
  title,
  subtitle,
  date,
  time,
  venue,
}: EventCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative mx-auto mb-24 h-[700px] w-full overflow-hidden rounded-[40px] shadow-2xl"
    >
      {/* Background Image */}

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover scale-105 transition-transform duration-[8000ms] hover:scale-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Golden Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center justify-center px-10">

        <div className="max-w-3xl text-center text-white">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="font-serif text-7xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-6 text-2xl text-white/90"
          >
            {subtitle}
          </motion.p>

          <div className="mt-16 space-y-6">

            <p className="text-3xl">
              📅 {date}
            </p>

            <p className="text-3xl">
              🕒 {time}
            </p>

            <p className="text-3xl">
              📍 {venue}
            </p>

          </div>

        </div>

      </div>

    </motion.section>
  );
}