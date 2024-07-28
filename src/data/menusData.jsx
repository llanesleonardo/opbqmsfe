import React,{useState} from "react";
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

export const documentControlMenu = 
[
  {
    url:'/app/main-dashboard',
    modulesTitles:['dashboard','dashboards'],
    label:'Dashboard',
    icon:<ChartPieIcon className="w-4  text-white mr-2" />,
    form:''
  },
  {url:'/app/projects',modulesTitles:['project','projects'],label:'Projects',icon:<ListBulletIcon className="w-4  text-white mr-2" />,submenu: [{url:'/app/main-dashboard',label:'Dashboard',icon:<ChartPieIcon className="w-4  text-white mr-2" />}]},
  {url:'/app/processes',modulesTitles:['project','projects'],label:'Processes',icon:<PuzzlePieceIcon className="w-4  text-white mr-2" />},
  {url:'/app/profiles',modulesTitles:['project','projects'],label:'Profiles',icon: <IdentificationIcon className="w-4  text-white mr-2" />},
  {url:'/app/roles',modulesTitles:['project','projects'],label:'Roles',icon:<CalendarDaysIcon className="w-4  text-white mr-2" />},
  {url:'/app/reportcards',modulesTitles:['project','projects'],label:'Report cards',icon: <UserGroupIcon className="w-4  text-white mr-2" />},
  {url:'/app/users',modulesTitles:['project','projects'],label:'Users',icon:<UserGroupIcon className="w-4  text-white mr-2" />}
];


/**
 * 
 * export const documentControlMenu = 
{
  dashboards:[{url:'/app/main-dashboard',label:'Dashboard',icon:<ChartPieIcon className="w-4  text-white mr-2" />}],
  projects:[{modulesTitles: ['project','projects'],url:'/app/projects',label:'Projects',icon:<ListBulletIcon className="w-4  text-white mr-2" />}]
};
 */



export const qualityManagementMenu =
[
  {url:'/app/dashboard',label:'Dashboard',icon:<ChartPieIcon className="w-4  text-white mr-2" />},
  {url:'/app/projects',label:'Corporate environment',icon:<ListBulletIcon className="w-4  text-white mr-2" />},
  {url:'/app/processes',label:'Governance',icon:<PuzzlePieceIcon className="w-4  text-white mr-2" />},
  {url:'/app/profiles',label:'Strategy',icon: <IdentificationIcon className="w-4  text-white mr-2" />},
  {url:'/app/roles',label:'Knowledge',icon:<CalendarDaysIcon className="w-4  text-white mr-2" />},
  {url:'/app/users',label:'Operations',icon:<UserGroupIcon className="w-4  text-white mr-2" />},
  {url:'/app/reportcards',label:'Improvement',icon: <UserGroupIcon className="w-4  text-white mr-2" />},
  {url:'/app/users',label:'Performance',icon:<UserGroupIcon className="w-4  text-white mr-2" />},
  {url:'/app/users',label:'QMS Docs',icon:<UserGroupIcon className="w-4  text-white mr-2" />}

];

export const modulesTitles = {
  projects:['project','projects'],
  processes:['process','processes'],
};


export const systemTitles = ['OPB QMS'];