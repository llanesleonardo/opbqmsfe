import React from 'react'
import Header from "../Components/Headers/Header"
import Footer from "../Components/Footers/Footer"
import { Outlet, Link } from 'react-router-dom';


export default function LayoutDefault({children}) {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
