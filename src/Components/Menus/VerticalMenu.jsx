import React from "react";
import { 
    Cog8ToothIcon, 
  } from "@heroicons/react/24/solid";

import MainMenuApp from "./MainMenuApp"
import LogoApp from "../Logos/LogoApp";


export default function VerticalMenu() {


  return (
    <div className='w-1/5  bg-sky-600'>
   <div className="h-lvh flex flex-col flex-wrap gap-3 justify-between items-start">
      <LogoApp />      
      <div className="w-full grow flex flex-col flex-wrap justify-start items-start mt-20 ml-5">
        <MainMenuApp />
      </div>
      <div className="w-full">
        <Cog8ToothIcon className="w-6 text-white ml-5 mb-5" />
      </div>
    </div>
    </div>
  );
}
