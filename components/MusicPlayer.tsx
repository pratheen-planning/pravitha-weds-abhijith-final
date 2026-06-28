"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  autoPlay: boolean;
}

export default function MusicPlayer({ autoPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {
        setPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/wedding-theme.mp3"
        loop
      />

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPlaying(!playing)}
        className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-white/80 px-5 py-3 shadow-2xl backdrop-blur-xl"
      >
        <motion.div
          animate={{
            rotate: playing ? 360 : 0,
          }}
          transition={{
            duration: 8,
            repeat: playing ? Infinity : 0,
            ease: "linear",
          }}
        >
          {playing ? (
            <Music2 className="h-6 w-6 text-[#C89B3C]" />
          ) : (
            <Pause className="h-6 w-6 text-[#C89B3C]" />
          )}
        </motion.div>

        <span className="font-medium text-[#4B2E2E]">
          {playing ? "Music On" : "Play Music"}
        </span>
      </motion.button>
    </>
  );
}