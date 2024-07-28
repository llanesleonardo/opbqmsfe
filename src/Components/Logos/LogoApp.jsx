import React from 'react'
import {systemTitles}  from "../../data/systemTitles"

export default function LogoApp() {
  return (
    <div className="text-3xl w-full ml-5 mt-5 text-white">{systemTitles[0]}</div>

  )
}
