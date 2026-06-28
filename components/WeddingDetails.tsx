"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WeddingDetails() {
    const weddingDate = new Date("2026-08-18T11:47:00");

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {
      clearInterval(timer);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F2E8]">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#F8F2E8] to-[#EFE5D5]" />

      {/* Decorative Blur */}

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#EFD8B8] blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#EAD2BE] blur-3xl opacity-40" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-8 py-24">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="tracking-[0.5em] uppercase text-[#B38B59]"
        >
          Wedding Details
        </motion.p>
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-8 text-center"
>
  <div className="text-6xl">🕉</div>

  <p className="mt-3 italic text-[#8A5A44]">
    Om Shree Ganeshaya Namah
  </p>

  <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B4F3B]">
    Together with our families,
    we warmly invite you to celebrate
    the beginning of our forever and
    bless us with your presence.
  </p>
</motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3, duration: .8 }}
          viewport={{ once: true }}
          className="mt-6 text-center font-serif text-6xl text-[#4B2E2E]"
        >
          Pravitha P.V
        </motion.h2>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: .8 }}
          viewport={{ once: true }}
          className="my-5 text-4xl text-[#C89B3C]"
        >
          ♥
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: .8 }}
          viewport={{ once: true }}
          className="font-serif text-6xl text-[#4B2E2E]"
        >
          Abhijith Roy
        </motion.h2>

        {/* Date Time Venue */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-24 grid w-full max-w-5xl gap-8 md:grid-cols-3"
>

  {/* Date */}

  <div className="rounded-3xl border border-[#D8C2A8] bg-white/60 p-8 text-center shadow-xl backdrop-blur-md">
    <div className="text-4xl">📅</div>

    <p className="mt-5 text-lg uppercase tracking-widest text-[#B38B59]">
      Tuesday
    </p>

    <h3 className="mt-2 font-serif text-4xl text-[#4B2E2E]">
      18
    </h3>

    <p className="mt-2 text-xl text-[#6B4F3B]">
      August 2026
    </p>

    <p className="mt-2 text-sm text-gray-500">
      (1202 Chingam 2)
    </p>
  </div>

  {/* Time */}

  <div className="rounded-3xl border border-[#D8C2A8] bg-white/60 p-8 text-center shadow-xl backdrop-blur-md">
    <div className="text-4xl">🕒</div>

    <p className="mt-5 text-lg uppercase tracking-widest text-[#B38B59]">
      Muhurtham
    </p>

    <h3 className="mt-4 font-serif text-4xl text-[#4B2E2E]">
      11:47 AM
    </h3>

    <p className="mt-3 text-xl text-[#6B4F3B]">
      to
    </p>

    <h3 className="mt-3 font-serif text-4xl text-[#4B2E2E]">
      12:05 PM
    </h3>
  </div>

  {/* Venue */}

  <div className="rounded-3xl border border-[#D8C2A8] bg-white/60 p-8 text-center shadow-xl backdrop-blur-md">
    <div className="text-4xl">📍</div>

    <p className="mt-5 text-lg uppercase tracking-widest text-[#B38B59]">
      Venue
    </p>

    <h3 className="mt-3 font-serif text-3xl text-[#4B2E2E]">
      N.S.S Auditorium
    </h3>

    <p className="mt-4 leading-8 text-[#6B4F3B]">
      Mundankavu,
      <br />
      Kallissery,
      <br />
      Chengannur
    </p>
  </div>
  </motion.div>
  {/* Countdown Section */}

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
 className="mt-20 mb-0 w-full text-center"
>
  <p className="tracking-[0.45em] uppercase text-[#B58A52] text-sm">
    SAVE THE DATE
  </p>

  <h2 className="mt-4 font-serif text-5xl text-[#4B2E2E]">
    18 August 2026
  </h2>

  <p className="mt-4 text-xl text-[#6B4F3B]">
    Our forever begins in...
  </p>

  <div className="mt-16 flex flex-wrap justify-center gap-8">

    {/* Days */}

    <div className="group flex h-44 w-36 flex-col items-center justify-center rounded-[30px] border border-[#E8D7C2] bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(96,67,38,0.12)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-[#C89B3C] hover:shadow-[0_25px_55px_rgba(201,155,60,0.25)]">
      <h3 className="font-serif text-6xl text-[#4B2E2E]">
        {timeLeft.days}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#B58A52]">
        Days
      </p>
    </div>

    {/* Hours */}

    <div className="group flex h-44 w-36 flex-col items-center justify-center rounded-[30px] border border-[#E8D7C2] bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(96,67,38,0.12)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-[#C89B3C] hover:shadow-[0_25px_55px_rgba(201,155,60,0.25)]">
      <h3 className="font-serif text-6xl text-[#4B2E2E]">
        {timeLeft.hours}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#B58A52]">
        Hours
      </p>
    </div>

    {/* Minutes */}

    <div className="group flex h-44 w-36 flex-col items-center justify-center rounded-[30px] border border-[#E8D7C2] bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(96,67,38,0.12)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-[#C89B3C] hover:shadow-[0_25px_55px_rgba(201,155,60,0.25)]">
      <h3 className="font-serif text-6xl text-[#4B2E2E]">
        {timeLeft.minutes}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#B58A52]">
        Minutes
      </p>
    </div>

    {/* Seconds */}

    <div className="group flex h-44 w-36 flex-col items-center justify-center rounded-[30px] border border-[#E8D7C2] bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(96,67,38,0.12)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-[#C89B3C] hover:shadow-[0_25px_55px_rgba(201,155,60,0.25)]">
      <h3 className="font-serif text-6xl text-[#4B2E2E]">
        {timeLeft.seconds}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#B58A52]">
        Seconds
      </p>
    </div>

  </div>
</motion.section>

</div>

</section>
);
}