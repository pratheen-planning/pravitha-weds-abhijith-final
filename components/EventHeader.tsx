"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function EventHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Decorative Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
        }}
        viewport={{ once: true }}
        className="mb-6 flex justify-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white shadow-lg">
          <Sparkles className="h-7 w-7 text-[#C89B3C]" />
        </div>
      </motion.div>

      {/* Small Heading */}
      <p className="mb-3 tracking-[0.45em] uppercase text-[#C89B3C] text-sm font-semibold">
        Wedding Events
      </p>

      {/* Main Heading */}
      <h2 className="font-serif text-5xl md:text-6xl text-[#53341D] leading-tight">
        Wedding
        <span className="block italic text-[#C89B3C]">
          Celebrations
        </span>
      </h2>

      {/* Divider */}
      <div className="mx-auto my-8 h-px w-40 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent" />

      {/* Description */}
      <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6B5B4B]">
        Every celebration tells a beautiful story.
        Join us as we begin this unforgettable journey filled with love,
        laughter, family, and cherished memories.
      </p>
    </motion.div>
  );
}