import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { UserIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
export default function UserMenu({user}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  
  return (
    <div className="relative">
      <div  onClick={()=> toggleDropdown(1)}  className="flex flex-row flex-nowrap gap-2 justify-start items-center ocus:outline-none">
        <div className="bg-slate-200 py-2 px-2 rounded">
          <UserIcon className="w-5" />
        </div>
        <p className="text-sm font-bold">
          {user.username}
          <br />
          <span className="text-[9px]">{user.email}</span>
        </p>
        <ChevronDownIcon className="w-2" />
      </div>
      <ul
        className={`absolute w-56 top-full right-1 mt-2 bg-white p-2 rounded shadow-lg transition-opacity duration-300 ${
          openDropdown === 1 ? "block" : "hidden"
        }`}
      >
        <li className="py-1 px-2 rounded ">
          <Link to="/account-settings" className="text-black">
            Account settings
          </Link>
        </li>
        <li className="py-1 px-2 rounded ">
          <Link to="/customer-support" className="text-black">
            Customer support
          </Link>
        </li>
        <li className="py-1 px-2 rounded ">
          <Link to="/account-settings" className="text-black">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
}
