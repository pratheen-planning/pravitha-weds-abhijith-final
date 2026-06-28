"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FinalBlessing() {
  return (
    <section className="relative overflow-hidden bg-[#FDF8F3] py-32">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heart
            className="h-14 w-14 fill-[#D4AF37] text-[#D4AF37]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 font-serif text-6xl text-[#4B2E2E]"
        >
          Thank You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-[#6E5A46]"
        >
          Thank you for celebrating this beautiful chapter of our lives.
          <br />
          Your love, prayers and blessings mean the world to us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <p className="font-serif text-5xl text-[#4B2E2E]">
            Pravitha P.V
          </p>

          <Heart className="mx-auto my-6 h-8 w-8 fill-[#D4AF37] text-[#D4AF37]" />

          <p className="font-serif text-5xl text-[#4B2E2E]">
            Abhijith Roy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <p className="text-lg tracking-[0.4em] uppercase text-[#B8860B]">
            18 August 2026
          </p>

          <p className="mt-6 font-serif text-3xl italic text-[#4B2E2E]">
            "And so, our forever begins..."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <p className="text-sm tracking-widest uppercase text-[#A48A6A]">
            Made with ❤️ for our family & friends
          </p>
        </motion.div>

      </div>
    </section>
  );
}