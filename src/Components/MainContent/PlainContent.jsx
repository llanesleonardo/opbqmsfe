import React from 'react'

export default function PlainContent(props) {
const { subtitle, arrayContent  } = props;
  return (
    <div className="container mx-auto py-10">
    <h2>{subtitle}</h2>
    {arrayContent.map((element,index)=> {
      return (
       <p key={index} className="mb-5">
        {element}
       </p>
      )  
  }
    )}
  </div>
  )
}
