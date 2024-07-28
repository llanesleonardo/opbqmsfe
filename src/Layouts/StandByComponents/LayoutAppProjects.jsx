import React,{ useContext } from 'react'
import Header from "../../Components/Headers/Header"
import Footer from "../../Components/Footers/Footer"
import { Outlet, Link } from 'react-router-dom';
import VerticalMenu from "../../Components/Menus/VerticalMenu"
import Search from "../../Components/Search/Search"
import { UserContext } from '../../Context/userContext';


export default function LayoutApp({children}) {

  const { user } = useContext(UserContext);


  return (
    <div className='flex flex-row flex-nowrap justify-stretch items-stretch'>
    <div className='w-1/5 h-lvh bg-sky-600'>
        <VerticalMenu />
      </div>
      <div className='w-4/5 h-lvh bg-slate-200'>
      <main className=''>
        <Outlet/>
      </main>
      </div>
    </div>  
  )
}
