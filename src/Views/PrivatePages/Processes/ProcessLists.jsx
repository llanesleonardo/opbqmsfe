import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../../Context/userContext';
import Table from "../../../Components/Tables/Table";
import ModuleHeader from "../../../Components/Headers/ModuleHeader";
import { useNavigate } from "react-router-dom";
import {firstLetterToUpperCase} from "../../../Helpers/StringHelpers/StringHelper"
import { useLocation } from 'react-router-dom';

export default function ProcessLists() {

  const { user } = useContext(UserContext);
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  let location = useLocation();

  let { pathname, search, hash } = location;
  const pathId = pathname.split("/")[4];
  const pathName = pathname.split("/")[3];
  const pathAction = pathname.split("/")[5];
  const pathModule = pathname.split("/")[2];

  const modulesTitles = {
    projects:['project','projects'],
    processes:['process','processes'],
  };

  
  const handleClick = async (link, action) => {
    navigate(`${link}`);
  };



  return (
    <div className='w-full py-1 h-lvh bg-sky-600 flex flex-row flex-nowrap justify-center items-center'>
    <div className='w-full h-svh bg-slate-200  '>
    <div className='w-auto h-[90%] overflow-y-scroll'>
      <div className="w-auto overflow-y-scroll flex flex-col flex-wrap  justify-start items-center">
    <div className='w-[95%] mx-auto flex flex-row flex-nowrap justify-between items-center'> 
      <ModuleHeader title={modulesTitles[pathModule]} pathId={pathId} handleClick={handleClick} modStr={firstLetterToUpperCase(pathModule)} actionButtons={['New']} moduleLink={pathModule} />
    </div>
       <Table title={modulesTitles[pathModule]}  handleClick={handleClick}/>
    </div>
    </div>
    </div>
  </div>
  )
}