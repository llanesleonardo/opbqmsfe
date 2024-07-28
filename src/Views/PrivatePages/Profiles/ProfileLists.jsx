import React from 'react'
import Search from "../../../Components/Search/Search"
import UserMenu from "../../../Components/Menus/UserMenu"
import UserNotifications from "../../../Components/Notificartions/UserNotifications"
//import Playground from "../../../Components/Playgrounds/Playground"

export default function ProfileLists() {
  return (
    <div className='w-full py-1 h-lvh bg-sky-600 flex flex-row flex-nowrap justify-center items-center'>
    <div className='w-full h-svh bg-slate-200 border-1 rounded-l-lg '>
    <div className='w-full h-[10%] flex flex-row flex-nowrap items-center justify-between'>
    <div className='grow'>
    <Search />
    </div>
    <div className='flex-none w-[20%] mx-5 my-5 flex flex-row flex-nowrap gap-5 justify-end items-center'>
      <UserMenu />
      <UserNotifications />
    </div>
    </div>
    <div className='w-auto h-[90%] overflow-y-scroll'>
     {/* <Playground title={['profile','profiles']} />*/}
    </div>
    </div>
  </div>
  )
}
