import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='w-full  bg-slate-200'>
    <div className='container mx-auto py-10 flex flex-row flex-wrap justify-around items-center gap-20'>
        <p><Link to="/privacy">Privacy Policy</Link></p>
        <p><Link to="/faq">FAQ</Link></p>
        <p>Link 2</p>
        <p>Link 3</p>
    </div>
    <p className='py-3 text-center'> Copyright © 2020 - 2024 3L Technology & Innovation LLC. All rights reserved.</p>
    </div>
  )
}
