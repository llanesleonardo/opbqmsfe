import React from 'react'
import MarketingGrid from "../../Components/Sections/MarketingGrid";
import valueContentData from "../../data/valueContentData.json"

export default function Features(props) {

  const {cssObject,generalSettings } = props;
  const { title, subtitle,url } = generalSettings;
  const {MarketingGrids} = cssObject;



  return (
   <>
      <MarketingGrid
        title={title}
        subtitle={subtitle}
        cssObject={MarketingGrids}
        valueContentData={valueContentData.list}
        numberBlocks={6}
      />
   </>
  )
}
