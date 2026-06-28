"use client";

import { motion } from "framer-motion";

const story = [
  {
    emoji: "🎓",
    title: "First Meeting",
    date: "St. Thomas College of Engineering & Technology",
    text: "Where two paths crossed and a beautiful story quietly began.",
  },
  {
    emoji: "🤝",
    title: "Friendship",
    date: "",
    text: "A beautiful friendship that grew stronger with time.",
  },
  {
    emoji: "❤️",
    title: "Proposal",
    date: "22 June 2021",
    text: "A special day that marked the beginning of our forever journey together.",
  },
  {
    emoji: "💍",
    title: "Engagement",
    date: "18 August 2025",
    text: "A joyful celebration with our families, filled with love, blessings, and happiness.",
  },
  {
    emoji: "👰🤵",
    title: "Wedding",
    date: "18 August 2026",
    text: "The beginning of a new chapter, a lifetime of love, companionship, and togetherness.",
  },
];

export default function Story() {
  return (
    <section className="bg-[#FDF8F3] py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-6xl font-serif text-[#4B2E2E] mb-4"
        >
          Our Story
        </motion.h2>

        <p className="text-center text-[#9C6B53] mb-20 tracking-[0.3em] uppercase">
          Every Love Story Is Beautiful
        </p>

        <div className="relative">

          <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#D8C4A8]" />

          {story.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex items-start gap-8 mb-20"
            >

              <div className="z-10 h-16 w-16 rounded-full bg-[#8A5A44] text-white flex items-center justify-center text-3xl shadow-xl">
                {item.emoji}
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 flex-1">

                <h3 className="text-3xl font-serif text-[#4B2E2E]">
                  {item.title}
                </h3>

                {item.date && (
                  <p className="mt-2 text-[#B47B5A] font-semibold">
                    {item.date}
                  </p>
                )}

                <p className="mt-4 text-gray-600 leading-8">
                  {item.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}