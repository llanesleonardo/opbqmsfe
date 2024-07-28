import React,{ useContext, useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import Search from "../../../Components/Search/Search"
import UserMenu from "../../../Components/Menus/UserMenu"
import UserNotifications from "../../../Components/Notificartions/UserNotifications"
import { UserContext } from '../../../Context/userContext';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../../Context/projectContext';
import ModuleHeader from '../../../Components/Headers/ModuleHeader';
import { firstLetterToUpperCase} from "../../../Helpers/StringHelpers/StringHelper"
import ProjectInfo from '../../../Components/MainContent/Projects/ModuleMainInfo';
import {ChooseContext } from "../../../Helpers/ContextHelpers/ChooseContext";
import { modulesTitles } from '../../../data/modulesTitles';

export default function ProcessDetail() {
    const { user } = useContext(UserContext);
    //const { projectData,getProjectData,deleteProject } = useContext(ProjectContext);
    let location = useLocation();
    const navigate = useNavigate();
    // Destructure pathname, search, and hash from location object
    let { pathname, search, hash } = location;
    const pathId = pathname.split("/")[4];
    const pathName = pathname.split("/")[3];
    const pathAction = pathname.split("/")[5];
    const pathModule = pathname.split("/")[2];


    const {
      list,
      element,
      getList,
      getElement,
      deleteElement } = useContext(ChooseContext(modulesTitles[pathModule][1]));
    const [url, setUrl] = useState('');
    
  
 

    useEffect(()=>{
      console.log(pathId,pathModule);
      getElement(pathId,pathName);
    },[url]);


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
    <ModuleHeader title={modulesTitles[pathModule]} pathId={pathId} handleClick={handleClick} modStr={firstLetterToUpperCase(pathName)} actionButtons={['New','Edit','Delete']} moduleLink={pathModule}/>
    </div>
    <div className='bg-white rounded border-1 w-[90%] mx-auto py-5 px-5' >
      <ProjectInfo projectData={element}/>  
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
