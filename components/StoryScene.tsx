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
    <>
      {/* DESKTOP LAYOUT - Unchanged */}
      <section className="hidden md:block relative h-screen overflow-hidden">
 
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
    sizes="100vw"
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
    sizes="58vw"
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

      {/* MOBILE LAYOUT - Full Width Cinematic */}
      <section className="md:hidden relative w-full h-96 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 12, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            priority
            className={`${imageClass} w-full h-full`}
          />
        </motion.div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />

        {/* Mobile Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 pb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-2 uppercase tracking-[0.3em] text-xs text-[#F6D28B] font-bold"
          >
            CHAPTER {chapter}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-semibold leading-tight text-white mb-2"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm leading-relaxed text-[#F6D28B]"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>
    </>
  );
}