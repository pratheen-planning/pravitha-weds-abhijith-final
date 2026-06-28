"use client";

import { useState } from "react";

export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#faf4eb] px-6 py-20">

      <div className="max-w-2xl w-full text-center">

        <p className="tracking-[0.45em] uppercase text-sm text-[#B47B5A] mb-5">
          Our Wedding Invitation
        </p>

        <h2 className="text-5xl md:text-6xl font-serif text-[#4B2E2E] mb-12">
          Scratch To Reveal
        </h2>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full h-56 rounded-3xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-2xl text-3xl font-bold text-white transition duration-300 hover:scale-105"
          >
            ✨ Scratch Here ✨
          </button>
        ) : (
          <div className="rounded-3xl bg-white shadow-2xl p-10 md:p-14">

            <h2 className="text-6xl mb-6">
              💍
            </h2>

            <p className="uppercase tracking-[0.35em] text-sm text-[#B47B5A] mb-3">
              Save The Date
            </p>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#4B2E2E] mb-3">
              18 August 2026
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Tuesday
            </p>

            <div className="space-y-6 text-[#4B2E2E]">

              <div>
                <p className="text-xl font-semibold">
                  🕚 Wedding Reception
                </p>

                <p className="text-lg">
                  11:47 AM – 12:05 PM
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">
                  📍 Venue
                </p>

                <p className="text-lg">
                  N.S.S. Auditorium
                </p>

                <p>
                  Mundankavu, Kallissery
                </p>

                <p>
                  Chengannur
                </p>
              </div>

              <div className="border-t pt-6">

                <p className="text-gray-600">
                  Guests are requested to arrive around
                </p>

                <p className="text-2xl font-bold text-[#B47B5A] mt-2">
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