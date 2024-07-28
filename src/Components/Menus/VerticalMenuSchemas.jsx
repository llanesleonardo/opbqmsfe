import React from "react";
import { 
    Cog8ToothIcon, 
    ChartPieIcon,
    ListBulletIcon,
    PuzzlePieceIcon,
    UserGroupIcon,
    CalendarDaysIcon,
    ChartBarIcon,
    UserIcon,
    IdentificationIcon
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom"

export default function HorizontalMenu() {
  return (
    <div className="h-lvh flex flex-col flex-wrap gap-3 justify-between items-start">
      <div className="text-3xl w-full ml-5 mt-5 text-white">3LStrategy</div>
      <div className="w-full grow flex flex-col flex-wrap justify-start items-start mt-20 ml-5">
        <ul>
          <li className="flex flex-row justify-start items-center">
            <ChartPieIcon className="w-4  text-white mr-2" />
            <Link to='/schema/project' className="text-white">Project</Link>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Cog8ToothIcon className="w-6 text-white ml-5 mb-5" />
      </div>
    </div>
  );
}
