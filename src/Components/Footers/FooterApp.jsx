import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='w-full  bg-white'>
    <p className='py-3 text-center'> Copyright © 2020 - {`${new Date().getFullYear()}`} 3L Technology & Innovation LLC. All rights reserved.</p>
    </div>
  )
}
