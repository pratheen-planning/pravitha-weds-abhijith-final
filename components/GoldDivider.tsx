"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function GoldDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center gap-4"
    >
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />

      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white shadow">
        <Sparkles className="h-4 w-4 text-[#D4AF37]" />
      </div>

      <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </motion.div>
  );
}