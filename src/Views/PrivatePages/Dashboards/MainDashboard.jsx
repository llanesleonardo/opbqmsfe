import React, {useContext} from 'react'
import UserCalendar from "../../../Components/Calendars/UserCalendar"
import UserHistoryActions from "../../../Components/Sections/UserHistoryActions"
import { UserContext } from '../../../Context/userContext';


export default function MainDashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className='py-1 h-lvh bg-sky-600 flex flex-row flex-nowrap justify-center items-center'>
    <div className='w-3/4 h-svh bg-slate-200  '>
    <div className='w-auto h-[90%] overflow-y-scroll'>
    <div className='flex flex-row justify-around items-center gap-5 flex-wrap mx-5'>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
      <div className='w-60 h-60 rounded bg-white'></div>
    </div>
    </div>
    </div>
    <div className='w-1/4 h-lvh bg-white'>
    <div className=''>
    <UserCalendar />
    <UserHistoryActions />
    </div>
    </div>
  </div>
  )
}
