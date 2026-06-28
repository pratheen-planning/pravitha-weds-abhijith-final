"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StorySceneProps {
  chapter: string;
  title: string;
  subtitle: string;
  quote: string;
  image: string;
  align?: "left" | "right";
  imageClass?: string;
}

export default function StoryScene({
  chapter,
  title,
  subtitle,
  quote,
  image,
  align = "left",
  imageClass = "object-cover object-center",
}: StorySceneProps) {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}

      <motion.div
  initial={{ scale: 1 }}
  whileInView={{ scale: 1.08 }}
  transition={{ duration: 14, ease: "easeOut" }}
  viewport={{ once: true }}
  className="absolute inset-0"
>
  {/* Blurred Background */}
  <Image
    src={image}
    alt=""
    fill
    priority
    className="object-cover blur-xl scale-110 opacity-40"
  />

 {/* Main Image */}
<div
  className={`absolute inset-y-0 w-[58%] ${
    align === "right"
      ? "left-0"
      : "right-0"
  }`}
>
  <Image
    src={image}
    alt={title}
    fill
    priority
    className={imageClass}
  />

  {/* Fade between image and text */}
  <div
    className={`absolute inset-0 ${
      align === "right"
        ? "bg-gradient-to-r from-transparent via-transparent to-black"
        : "bg-gradient-to-l from-transparent via-transparent to-black"
    }`}
  />
</div>
</motion.div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}

      <div
  className={`relative z-10 flex h-full items-center px-12 md:px-24 ${
    align === "right"
      ? "justify-end text-right"
      : "justify-start text-left"
  }`}
>
        <div className="max-w-xl">

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    viewport={{ once: true }}
    className="mb-4 uppercase tracking-[0.4em] text-sm text-[#F6D28B]"
  >
    CHAPTER {chapter}
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    viewport={{ once: true }}
    className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-none text-white"
  >
    {title}
  </motion.h2>

  
  <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-8 max-w-md text-xl md:text-2xl leading-relaxed text-[#F6D28B]"
>
  {subtitle}
</motion.p>

        </div>
      </div>
    </section>
  );
}