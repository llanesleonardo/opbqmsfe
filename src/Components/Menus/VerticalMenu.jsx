import React from "react";
import { 
    Cog8ToothIcon, 
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
import MainMenuApp from "./MainMenuApp"
import LogoApp from "../Logos/LogoApp";


export default function VerticalMenu() {


  return (
    <div className='w-2/6  bg-sky-600'>
   <div className="h-lvh flex flex-col flex-wrap gap-3 justify-center items-center">
      <LogoApp />      
      <div className="w-full grow flex flex-row flex-wrap justify-center items-start  mt-20">
        <MainMenuApp />
      </div>
      <div className="w-full">
 
        <Cog8ToothIcon className="w-6 text-white ml-5 mb-5" />
        <ul>
       <li>
       <div className="flex flex-row justify-start items-center">
          <Link to={'/'} className="text-white pl-5 mb-5">Home page</Link>
       </div>
       </li>
        </ul>
      </div>
    </div>
    </div>
  );
}
