"use client";

import { useState } from "react";

import Welcome from "./Welcome";
import Hero from "./Hero";
import ScratchReveal from "./ScratchReveal";
import StoryIntro from "./StoryIntro";
import CinematicStory from "./CinematicStory";
import WeddingDetails from "./WeddingDetails";
import WeddingCelebrations from "./WeddingCelebrations";

export default function WeddingInvitation() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  function handleOpenInvitation(playMusic: boolean) {
    console.log("Play Music:", playMusic);

    // We'll start the music here later
    setIsInvitationOpen(true);
  }

  return (
    <main className="bg-[#FDF8F3] text-[#4B2E2E] overflow-x-hidden">
      {!isInvitationOpen ? (
        <Welcome onOpen={handleOpenInvitation} />
      ) : (
        <>
  <Hero />
  <ScratchReveal />
  <StoryIntro />
  <CinematicStory />
  <WeddingDetails />
 <WeddingCelebrations />
</>
      )}
    </main>
  );
}