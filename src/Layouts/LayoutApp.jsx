import React,{ useContext,useState } from 'react'
import FooterApp from "../Components/Footers/FooterApp"
import { Outlet, Link } from 'react-router-dom';
import VerticalMenu from "../Components/Menus/VerticalMenu"
import { UserContext } from '../Context/userContext';
import HeaderApp from "../Components/Headers/HeaderApp"


export default function LayoutApp({children}) {

  const { user } = useContext(UserContext);
  const [url, setUrl] = useState('');


  return (
    <div className='flex flex-col flex-nowrap justify-stretch items-stretch'>
    <div className='flex flex-row flex-nowrap justify-stretch items-stretch'>
        <VerticalMenu />
      <main className='w-4/5  bg-slate-200'>
        <HeaderApp user={user} setUrl={setUrl}/>
        <Outlet />
      </main>
    </div>
    <FooterApp />
    </div>
  )
}
