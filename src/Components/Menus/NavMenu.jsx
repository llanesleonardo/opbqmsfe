import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function NavMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="">
        <ul className='flex flex-row flex-wrap justify-end items-center gap-10 mr-5'>
            <li className='text-white'>
            <Link to="/">Home</Link>
            </li>
            <li className='text-white'>
            <Link to="/about">About</Link>
            </li>
            <li className='text-white'>
            <Link to="/features">Features</Link>
            </li>
            <li className='text-white'>
            <Link to="/contact">Contact</Link>
            </li>
            <li className='text-white'>
            <Link to="/login">Log in</Link>
            </li>
            <li className='text-white'>
            <Link to="/app/main-dashboard">Go to your account</Link>
            </li>
            <li className='text-white relative'>
              <button 
                onClick={()=> toggleDropdown(1)} 
                className="focus:outline-none">
                Leonardo Llanes
                </button>
                 <ul
                   className={`absolute w-56 top-full right-1 mt-2 bg-white p-2 rounded shadow-lg transition-opacity duration-300 ${
                   openDropdown === 1 ? 'block' : 'hidden'
                    }`}
                    >
                    <li className="py-1 px-2 rounded ">
                      <Link to="/account-settings" className='text-black'>Account settings</Link>
                    </li>
                    <li className="py-1 px-2 rounded ">
                      <Link to="/customer-support" className='text-black'>Customer support</Link>
                    </li>
                    <li className="py-1 px-2 rounded ">
                      <Link to="/account-settings" className='text-black'>Sign out</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
