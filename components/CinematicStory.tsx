"use client";

import StoryScene from "./StoryScene";

export default function CinematicStory() {
  return (
  <>
    <StoryScene
      chapter="One"
      title="First Meeting"
      subtitle="St. Thomas College of Engineering & Technology"
      quote=""
      image="/images/story/chapter1-first-meeting.png"
    />

    <StoryScene
      chapter="Two"
      title="Friendship"
      subtitle="Every conversation became a cherished memory."
      quote=""
      image="/images/story/chapter2-friendship.png"
      align="right"
    />

    <StoryScene
      chapter="Three"
      title="The Proposal"
      subtitle="She said Yes."
      quote=""
      image="/images/story/chapter3-proposal.png"
      align="left"
      imageClass="object-cover object-[center_10%]"
    />

    <StoryScene
      chapter="Four"
      title="The Engagement"
      subtitle="A promise of forever."
      quote=""
      image="/images/story/chapter4-engagement.png"
      align="right"
    />

    <StoryScene
      chapter="Five"
      title="The Wedding"
      subtitle="Forever Begins Here"
      quote=""
      image="/images/story/chapter5-wedding.png"
    />
  </>
);
}