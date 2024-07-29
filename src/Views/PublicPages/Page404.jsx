import React from 'react'
import {Link } from "react-router-dom";
export default function Page404(props) {

  const { cssObject , generalSettings } = props;

  const { title } =generalSettings;
  const {
    buttonColor,
    shapeButton,
    side,
    bgcolor,
    color,
    buttonTextColor
  } = cssObject.Heros;


  return (
    <div className={`${bgcolor} py-1 gap-5 h-svh flex flex-col flex-nowrap ${side} items-center`}>
       <h1 className={`text-4xl ${color}`}>{title}</h1>
       <Link to='/' className={`py-2 px-3 ${buttonTextColor} ${shapeButton} ${buttonColor}`}>Back to Home</Link>
    </div>
  )
}
