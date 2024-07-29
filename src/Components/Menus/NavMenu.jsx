import React, {useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { SystemContext } from "../../Context/systemContext";

export default function NavMenu() {
  const { publicPages,systemValues, getSystemValues, loading,getPublicPagesInfo } = useContext(SystemContext);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const setPublicPages = async () => {
    await getPublicPagesInfo();
  };
  useEffect(() => {
    setPublicPages();
  }, []);


  return (
    <div className="">
        <ul className='flex flex-row flex-wrap justify-end items-center gap-10 mr-5'>
       {publicPages ? (
        publicPages?.navMenus?.map((menuItem, index) => {
          if(
            menuItem.modulesTitles[0] !== 'createaccount' 
            && menuItem.modulesTitles[0] !== 'faq'
            && menuItem.modulesTitles[0] !== 'passwordreset'
          ){
            return (<li key={index} className='text-white'>
              <Link to={`/${menuItem.url}`}>{menuItem.label}</Link>
            </li>)
           }
          }
        )):('')}       
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
