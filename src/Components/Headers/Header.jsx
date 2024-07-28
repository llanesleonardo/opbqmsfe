import React from 'react'
import NavMenu from "../Menus/NavMenu"
import Logo from "../Logos/Logo"


export default function Header() {
  return (
    <div  className=' bg-sky-600 py-5 flex flex-row items-center justify-between'>
        <Logo />
        <NavMenu/>
    </div>
  )
}
