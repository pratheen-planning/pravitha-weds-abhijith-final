"use client";

import { useState } from "react";

export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#faf4eb] px-5 sm:px-6 md:px-8 py-16 sm:py-20">
      <div className="w-full max-w-2xl text-center">
        <p className="mb-5 uppercase tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.45em] text-[11px] sm:text-xs md:text-sm text-[#B47B5A]">
          Our Wedding Invitation
        </p>

        <h2 className="mb-12 font-serif text-4xl sm:text-5xl md:text-6xl text-[#4B2E2E]">
          Scratch To Reveal
        </h2>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="h-44 sm:h-52 md:h-56 w-full rounded-3xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-2xl sm:text-3xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105"
          >
            ✨ Scratch Here ✨
          </button>
        ) : (
          <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-14 shadow-2xl">
            <h2 className="mb-6 text-5xl sm:text-6xl">
              💍
            </h2>

            <p className="mb-3 uppercase tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm text-[#B47B5A]">
              Save The Date
            </p>

            <h1 className="mb-3 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B2E2E]">
              18 August 2026
            </h1>

            <p className="mb-8 text-base sm:text-lg text-gray-600">
              Tuesday
            </p>

            <div className="space-y-6 text-[#4B2E2E]">
              <div>
                <p className="text-lg sm:text-xl font-semibold">
                  🕚 Wedding Reception
                </p>

                <p className="text-base sm:text-lg">
                  11:47 AM – 12:05 PM
                </p>
              </div>

              <div>
                <p className="text-lg sm:text-xl font-semibold">
                  📍 Venue
                </p>

                <p className="text-base sm:text-lg">
                  N.S.S. Auditorium
                </p>

                <p>Mundankavu, Kallissery</p>

                <p>Chengannur</p>
              </div>

              <div className="border-t pt-6">
                <p className="text-gray-600">
                  Guests are requested to arrive around
                </p>

                <p className="mt-2 text-xl sm:text-2xl font-bold text-[#B47B5A]">
                  10:30 AM
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}