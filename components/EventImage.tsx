"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EventImageProps {
  image: string;
  title: string;
  featured?: boolean;
}

export default function EventImage({
  image,
  title,
  featured = false,
}: EventImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="relative group"
    >
      {/* Gold Glow */}
      <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-amber-300/20 via-yellow-200/10 to-amber-300/20 blur-2xl transition-opacity duration-700 group-hover:opacity-100 opacity-60" />

      {/* Decorative Border */}
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-[#D8B25A] via-[#F4E4B8] to-[#C89B3C] p-[1px]">
        <div className="h-full w-full rounded-[31px] bg-[#FFF9F4]" />
      </div>

      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-[30px] ${
          featured ? "aspect-[4/5]" : "aspect-[3/4]"
        }`}
      >
        <Image
  src={image}
  alt={title}
  fill
  priority={featured}
  sizes="(max-width:768px) 100vw, 50vw"
  className="object-cover transition duration-700 group-hover:scale-105"
/>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

        {/* Corner Decorations */}
        <div className="absolute left-5 top-5 h-12 w-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm" />

        <div className="absolute bottom-5 right-5 h-10 w-10 rounded-full border border-[#D8B25A]/70 bg-[#D8B25A]/15 backdrop-blur-sm" />

        {/* Bottom Gold Line */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#D8B25A] to-transparent" />
      </div>
    </motion.div>
  );
}