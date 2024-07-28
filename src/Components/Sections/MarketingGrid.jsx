import React from 'react'
import GridImagesWithDesc from "../Grids/GridImagesWithDesc"


export default function MarketingGrid(props) {

    const { title, subtitle,side,bgcolor,size,color,aligment, valueContentData,numberBlocks} = props;
  console.log('numberBlocks 11',numberBlocks);
  return (
    <div className={`${size} ${bgcolor} ${side} flex flex-row items-start pt-10 pb-5 px-5`}>
    <div>
        <h1 className={`${color} ${aligment} text-3xl lg:text-8xl`}> 
           {title} 
        </h1>
        <h4 className={`${color} ${aligment} text-2xl lg:text-5xl`} >{subtitle}</h4>
        <GridImagesWithDesc ValueContentList={valueContentData} numberBlocks={numberBlocks}/>
    </div>
</div>
  )
}
