"use client";

import { motion } from "framer-motion";

export default function StoryIntro() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black">

      <div className="text-center px-8">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-serif text-white italic"
        >
          Every love story
          <br />
          has a beginning...
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="tracking-[0.4em] uppercase text-[#F6D28B] text-sm">
            This is ours
          </p>
        </motion.div>

      </div>

    </section>
  );
}