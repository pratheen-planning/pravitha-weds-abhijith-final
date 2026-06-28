"use client";

import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";

export default function OurStoryContinues() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F4] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-full border border-[#D4AF37]/40 bg-white p-5 shadow-lg">
            <Camera className="h-8 w-8 text-[#C89B3C]" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 font-serif text-5xl text-[#4B2E2E]"
        >
          Our Story Continues...
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6E5A46]"
        >
          The most beautiful chapter of our journey is about to begin.
          Every smile, every laugh and every unforgettable moment from our
          wedding day will become part of our forever story.
        </motion.p>

        {/* Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-16 w-full max-w-sm"
        >
          <div className="rotate-[-2deg] rounded-xl bg-white p-5 shadow-2xl">
            <div className="flex aspect-[4/5] items-center justify-center rounded-lg border-2 border-dashed border-[#D4AF37]/30 bg-[#FDF8F3]">
              <div className="text-center">
                <Camera className="mx-auto h-12 w-12 text-[#C89B3C]" />
                <p className="mt-4 text-xl font-semibold text-[#4B2E2E]">
                  Coming Soon
                </p>
              </div>
            </div>

            <p className="mt-5 text-center font-serif text-xl text-[#4B2E2E]">
              Our First Picture
            </p>

            <p className="text-center text-[#8B7355]">
              As Husband & Wife ❤️
            </p>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <Heart className="mx-auto h-8 w-8 fill-[#C89B3C] text-[#C89B3C]" />

          <p className="mt-6 text-xl italic text-[#6E5A46]">
  We can't wait to share those beautiful memories with you.
</p>

          <p className="mt-10 font-serif text-3xl text-[#4B2E2E]">
            18 August 2026
          </p>

          <p className="mt-2 text-[#8B7355]">
            Pravitha ❤️ Abhijith
          </p>
        </motion.div>

      </div>
    </section>
  );
}