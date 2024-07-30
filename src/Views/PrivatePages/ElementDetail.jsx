import React,{ useContext, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';
import ModuleHeader from '../../Components/Headers/ModuleHeader';
import { firstLetterToUpperCase} from "../../Helpers/StringHelpers/StringHelper"
import ModuleMainInfo from '../../Components/MainContent/Projects/ModuleMainInfo';
import {ChooseContext } from "../../Helpers/ContextHelpers/ChooseContext";
import { setPathValues } from "../../Helpers/UrlHeperls/urlHelper";
import { SystemContext } from "../../Context/systemContext";
import PulseLoader from "react-spinners/PulseLoader";
import Table from "../../Components/Tables/Table";

export default function ElementDetail({modulesTitles}) {
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
    } = useContext(ChooseContext('data'));
    //useContext(ChooseContext(modulesTitles[pathModule][1]));
    const {  
      modulesSettings,
      publicPagesSettings,
      moduleStructureSettings,
      getModuleSettings,
      getPublicPagesSettings,
      getModuleStructureSettingss,
      loading
     } = useContext(SystemContext);

      const setSystemValues  = async (pathModule,pathName) =>{
       // await getSystemModuleValue(pathModule);
      await getModuleSettings();
      await getModuleStructureSettingss(pathName);
      };

   
      useEffect(()=>{
        setSystemValues(pathModule,pathName);
     },[pathModule]);
    
     useEffect(() => {
      const setBackendValues = async () => {
        await getElement(pathId, pathName);
      };
      
      setBackendValues();
      console.log('setBackendValues');
    }, [pathId, pathName]);
  



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

    {modulesTitles === undefined ? (
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
                  titles={modulesTitles}
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
     {moduleStructureSettings ? (
           moduleStructureSettings?.relatedModules?.map((item,index)=>{
            return (  
              <div key={index} className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5 mt-5' >
              <div className='flex flex-col flex-nowrap justify-between items-center'>
                   <p className='w-full text-sky-700 font-bold mb-3'>{item?.titles[1]}</p>          
              <Table
                title={item.titles}
                handleClick={handleClick}
              /> 
            
           </div>
        </div>
         )
        })
           ):(<div></div>)}
    </div>
    </div>
  </div>
  )
}
