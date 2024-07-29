import React from "react";
import Hero from "../../Components/Sections/Hero";
import MarketingGrid from "../../Components/Sections/MarketingGrid";
import valueContentData from "../../data/valueContentData.json"
import { SunIcon } from "@heroicons/react/24/solid";
export default function HomePage(props) {
  
  const {cssObject,generalSettings } = props;
  const { title, subtitle,url } = generalSettings;
  const {Heros, MarketingGrids} = cssObject;


  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        content=""
        link="/createaccount"
        linkContent="Start now!"
        cssObject={Heros}
        isButtonShown={true}
      />
      <MarketingGrid
        title="Features"
        subtitle="You wont stop innovating your company"
        cssObject={MarketingGrids}
        valueContentData={valueContentData.list}
        numberBlocks={3}
      />
    </>
  );
}
