import React from 'react'
import Header from "../../Components/Headers/Header"
import Footer from "../../Components/Footers/Footer"
import { Outlet, Link } from 'react-router-dom';
import VerticalMenuSchemas from "../../Components/Menus/VerticalMenuSchemas"
import Search from "../../Components/Search/Search"

export default function LayoutAppSchemas({children}) {
  return (
    <div className='flex flex-row flex-nowrap justify-stretch items-stretch'>
    <div className='w-1/5 h-lvh bg-sky-600'>
        <VerticalMenuSchemas />
      </div>
      <div className='w-4/5 h-lvh bg-white'>
      <main className=''>
        <Outlet />
      </main>
      </div>
    </div>  
  )
}
