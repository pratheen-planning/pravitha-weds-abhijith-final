"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CelebrationCardProps {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  mapLink: string;
}

export default function CelebrationCard({
  image,
  eyebrow,
  title,
  description,
  date,
  time,
  venue,
  mapLink,
}: CelebrationCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 w-full max-w-4xl rounded-[36px] bg-[#FFFDF8]/95 backdrop-blur-md shadow-2xl p-8 md:p-14 text-center">

        <p className="tracking-[0.45em] uppercase text-[#B88A44] text-sm">
          {eyebrow}
        </p>

        <h2 className="mt-5 font-serif text-5xl md:text-7xl text-[#4B2E2E]">
          {title}
        </h2>

        <p className="mt-8 text-lg md:text-xl leading-9 text-[#6D5555]">
          {description}
        </p>

        <div className="mx-auto my-10 h-px w-32 bg-[#D6B26A]" />

        <div className="space-y-5 text-[#4B2E2E] text-lg md:text-xl">

          <p>📅 {date}</p>

          <p>🕒 {time}</p>

          <p>📍 {venue}</p>

        </div>

        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-12 rounded-full border border-[#CDA349] px-8 py-4 text-lg font-medium text-[#8B5E1A] transition hover:bg-[#CDA349] hover:text-white"
        >
          Get Directions →
        </a>

      </div>
    </motion.section>
  );
}