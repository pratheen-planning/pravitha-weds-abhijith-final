"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type WelcomeProps = {
  onOpen: (playMusic: boolean) => void;
};

export default function Welcome({ onOpen }: WelcomeProps) {
  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-photo.jpg"
        alt="Couple"
        fill
        priority
        className="object-contain object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.45em] text-white text-sm"
        >
          Om Ganeshaya Namah
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 text-white font-serif font-semibold
          text-5xl md:text-7xl leading-tight"
        >
          Pravitha P V
          <br />
          <span className="text-yellow-300">&</span>
          <br />
          Abhijith Roy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-white/80 tracking-[0.25em] uppercase text-xs"
        >
          Wedding Film Invitation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex flex-col gap-4 w-full max-w-xs"
        >
          <button
            onClick={() => onOpen(true)}
            className="rounded-full bg-white text-black py-4 font-semibold hover:scale-105 transition"
          >
            🎵 Open With Music
          </button>

          <button
            onClick={() => onOpen(false)}
            className="rounded-full border border-white text-white py-4 hover:bg-white hover:text-black transition"
          >
            Open Quietly
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2
          }}
          className="absolute bottom-10 text-white text-sm tracking-[0.25em]"
        >
          ↓ Scroll
        </motion.div>
      </div>
    </section>
  );
}