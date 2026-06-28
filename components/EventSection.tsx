"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EventSectionProps {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
}

export default function EventSection({
  image,
  title,
  subtitle,
  date,
  time,
  venue,
}: EventSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image src={image} alt={title} fill priority className="object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Golden Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-xl rounded-[36px] border border-[#D4AF37]/30 bg-[#FFFDF7]/95 p-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-center text-sm uppercase tracking-[0.45em] text-[#B58A52]"
          >
            THE BEGINNING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center font-serif text-6xl text-[#4B2E2E]"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-xl leading-9 text-[#6B4F3B]"
          >
            {subtitle}
          </motion.p>

          <div className="mx-auto mt-10 h-px w-32 bg-[#D4AF37]" />

          <div className="mt-10 space-y-5 text-center">
            <p className="text-lg text-[#6B4F3B]">📅 {date}</p>
            <p className="text-lg text-[#6B4F3B]">🕒 {time}</p>
            <p className="text-lg text-[#6B4F3B]">📍 {venue}</p>
          </div>

          <div className="mt-12 flex justify-center">
            <button className="rounded-full border border-[#D4AF37] bg-[#FFF8E8] px-10 py-4 text-lg font-medium text-[#4B2E2E] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white hover:scale-105">
              Get Directions →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
