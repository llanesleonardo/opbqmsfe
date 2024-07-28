import React from 'react'
import Search from "../Search/Search"
import UserNotifications from "../Notificartions/UserNotifications"
import UserMenu from "../Menus/UserMenu"

export default function HeaderApp({user,setUrl}) {
  return (
    <div className='w-full h-[10%] flex flex-row flex-nowrap items-center justify-between'>
    <div className='grow'>
    <Search setUrl={setUrl} />
    </div>
    <div className='flex-none w-[20%] mx-5 my-5 flex flex-row flex-nowrap gap-5 justify-end items-center'>
      <UserMenu user={user}/>
      <UserNotifications />
    </div>
    </div>
  )
}
