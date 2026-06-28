"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, ChevronRight } from "lucide-react";

const brideNumber = "919061134884";
const groomNumber = "919847110017";

const message = encodeURIComponent(
`Dear Pravitha & Abhijith,

Congratulations on your wedding!

I am pleased to confirm my presence for your wedding celebration on 18 August 2026.

Looking forward to celebrating your special day together.

Warm regards,
`
);

export default function RSVPSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] flex items-center justify-center px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#F6D28B]/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-white/5 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Glass Card */}
        <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-14 shadow-2xl">

          {/* Heart */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 180,
            }}
            className="flex justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F6D28B]/40 bg-[#F6D28B]/10">
              <Heart
                className="text-[#F6D28B]"
                fill="currentColor"
                size={28}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-center font-serif text-4xl md:text-6xl text-white leading-tight"
          >
            Your Presence
            <br />
            Would Mean
            <br />
            Everything To Us
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-8 max-w-xl text-center text-lg leading-8 text-gray-300"
          >
            We would be honoured to celebrate this beautiful day with you.
            <br />
            Join us as we begin our forever.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto my-10 h-px bg-[#F6D28B]"
          />

          {/* Buttons */}
          <div className="space-y-5">

            <motion.a
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              href={`https://wa.me/${brideNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-500 hover:border-[#F6D28B]/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="text-[#F6D28B]" size={24} />

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#F6D28B]">
                    Bride
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Pravitha P.V
                  </h3>
                </div>
              </div>

              <ChevronRight className="text-white transition-transform group-hover:translate-x-2" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              href={`https://wa.me/${groomNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-500 hover:border-[#F6D28B]/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="text-[#F6D28B]" size={24} />

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#F6D28B]">
                    Groom
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Abhijith Roy
                  </h3>
                </div>
              </div>

              <ChevronRight className="text-white transition-transform group-hover:translate-x-2" />
            </motion.a>

          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="mt-14 text-center"
          >
            <p className="text-[#F6D28B] tracking-[0.35em] uppercase text-sm">
              18 August 2026
            </p>

            <h3 className="mt-4 font-serif text-3xl text-white">
              Pravitha ❤️ Abhijith
            </h3>

            <p className="mt-5 text-gray-400 italic">
              "The greatest gift is your presence."
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}