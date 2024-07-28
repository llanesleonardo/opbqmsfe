import React from "react";
import Hero from "../../Components/Sections/Hero";
import MarketingGrid from "../../Components/Sections/MarketingGrid";
import valueContentData from "../../data/valueContentData.json"
export default function HomePage() {
  return (
    <>
      <Hero
        title="Improve one percent each day."
        subtitle="This is the solution to progress."
        content=""
        link="/features"
        linkContent="Start now!"
        side="justify-center"
        bgcolor="bg-sky-600"
        size="h-96"
        color="text-white"
        isButtonShown={true}
      />
      <MarketingGrid
        title="Features"
        subtitle="You wont stop innovating your company"
        side="justify-center"
        bgcolor="bg-white"
        size=""
        color="text-blue"
        aligment="text-center"
        valueContentData={valueContentData.list}
        numberBlocks={3}
      />
    </>
  );
}
