"use client";

import { MapPinned, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface MapButtonProps {
  href: string;
}

export default function MapButton({ href }: MapButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-white/80 px-6 py-3 shadow-lg backdrop-blur transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B88917] text-white shadow">
        <MapPinned size={18} />
      </span>

      <div className="text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          Location
        </p>

        <p className="font-medium text-[#4D3424]">
          View Venue
        </p>
      </div>

      <ArrowUpRight
        size={18}
        className="ml-2 text-[#B88917] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </motion.a>
  );
}