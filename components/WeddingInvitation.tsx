"use client";

import { useState } from "react";

import Welcome from "./Welcome";
import Hero from "./Hero";
import ScratchReveal from "./ScratchReveal";
import StoryIntro from "./StoryIntro";
import CinematicStory from "./CinematicStory";
import WeddingDetails from "./WeddingDetails";
import WeddingCelebrations from "./WeddingCelebrations";
import OurStoryContinues from "./OurStoryContinues";
import FinalBlessing from "./FinalBlessing";
import MusicPlayer from "./MusicPlayer";
import RSVPSection from "./RSVPSection";

export default function WeddingInvitation() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
const [playMusic, setPlayMusic] = useState(false);

  function handleOpenInvitation(withMusic: boolean) {
  setPlayMusic(withMusic);
  setIsInvitationOpen(true);
}

  return (
    <main className="bg-[#FDF8F3] text-[#4B2E2E] overflow-x-hidden">
      {!isInvitationOpen ? (
        <Welcome onOpen={handleOpenInvitation} />
      ) : (
        <>
  <MusicPlayer autoPlay={playMusic} />

  <Hero />
  <ScratchReveal />
  <StoryIntro />
  <CinematicStory />
  <WeddingDetails />
 <WeddingCelebrations />
 <OurStoryContinues />

 <RSVPSection />
 
 <FinalBlessing />
</>
      )}
    </main>
  );
}