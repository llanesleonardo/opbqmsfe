import React,{ useContext, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../../Context/userContext';
import { useNavigate } from 'react-router-dom';
import ModuleHeader from '../../../Components/Headers/ModuleHeader';
import { firstLetterToUpperCase} from "../../../Helpers/StringHelpers/StringHelper"
import ModuleMainInfo from '../../../Components/MainContent/Projects/ModuleMainInfo';
import {ChooseContext } from "../../../Helpers/ContextHelpers/ChooseContext";
import { setPathValues } from "../../../Helpers/UrlHeperls/urlHelper";
import {modulesTitles} from "../../../data/modulesTitles";
import { SystemContext } from "../../../Context/systemContext";
import PulseLoader from "react-spinners/PulseLoader";

export default function ProjectDetail() {
    const { user } = useContext(UserContext);
    let location = useLocation();
    const navigate = useNavigate();
    const { pathModule,pathName,pathId, pathAction } = setPathValues(location);

    const {
      list,
      element,
      getList,
      getElement,
      deleteElement,
      loadingElement
    } = useContext(ChooseContext(modulesTitles[pathModule][1]));
      const { systemValues, systemModuleValue,getSystemValues,getSystemModuleValue,loading } = useContext(SystemContext);  

      const setSystemValues  = async () =>{
        await getSystemModuleValue(pathModule);
      };
      
      useEffect(()=>{
        setSystemValues(pathModule);
     },[pathModule]);
    

    const handleClick = async (link,action) =>{
      if (action === 'delete') {
        const response = await deleteElement(pathId,pathName);
      }
        navigate(`${link}`);
    }

 

  return (
    <div className='w-full py-1 h-lvh bg-sky-600 flex flex-row flex-nowrap justify-center items-center'>
    <div className='w-full h-svh bg-slate-200 '>
    <div className='w-auto h-[90%] overflow-y-scroll '>
    <div className='w-[90%] mx-auto flex flex-row flex-nowrap justify-between items-center'> 
    {systemModuleValue.modulesTitles === undefined ? (
                <div className='my-10'>
                <PulseLoader
                 color={"#fff"}
                 loading={loading}
                 size={20}
                 aria-label="Loading Spinner"
                 data-testid="loader"
               />
               </div>
              ) : (
                <ModuleHeader
                  titles={systemModuleValue.modulesTitles}
                  pathId={pathId}
                  handleClick={handleClick}
                  modStr={firstLetterToUpperCase(pathName)}
                  actionButtons={['New','Edit','Delete']}
                  moduleLink={pathModule}
                />
              )} 
    </div>
    <div className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5' >
       {element ? 
       <ModuleMainInfo elementValues={element} getElement={getElement} pathId={pathId} pathName={pathName} loadingElement={loadingElement} />
        : null
        }
     </div>
        <div className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5 mt-5' >
        <div className='flex flex-row flex-nowrap justify-between items-center'> <p className='w-full text-sky-700 font-bold mb-3'>Processes </p> </div>
        </div>
        <div className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5 mt-5' >
        <div className='flex flex-row flex-nowrap justify-between items-center'> <p className='w-full text-sky-700 font-bold mb-3'>Users </p> </div>
        </div>
        <div className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5 mt-5' >
        <div className='flex flex-row flex-nowrap justify-between items-center'> <p className='w-full text-sky-700 font-bold mb-3'>Profiles </p> </div>
        </div>
        <div className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5 mt-5' >
        <div className='flex flex-row flex-nowrap justify-between items-center'> <p className='w-full text-sky-700 font-bold mb-3'>Roles </p> </div>
        </div>
        <div className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5 mt-5' >
        <div className='flex flex-row flex-nowrap justify-between items-center'> <p className='w-full text-sky-700 font-bold mb-3'>Report cards </p> </div>
        </div>
    </div>
    </div>
  </div>
  )
}
