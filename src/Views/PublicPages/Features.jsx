import React from 'react'
import MarketingGrid from "../../Components/Sections/MarketingGrid";
import valueContentData from "../../data/valueContentData.json"

export default function Features() {
  return (
   <>
        <MarketingGrid
        title="Features"
        subtitle="You wont stop innovating your company"
        side="justify-center"
        bgcolor="bg-white"
        size=""
        color="text-blue"
        aligment="text-center"
        valueContentData={valueContentData.list}
        numberBlocks={6}
      />
   </>
  )
}
