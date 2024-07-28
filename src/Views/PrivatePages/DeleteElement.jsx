import React, { useContext, useState, useEffect,useCallback } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from 'react-router-dom';
import { firstLetterToUpperCase} from "../../Helpers/StringHelpers/StringHelper"
import {ChooseContext } from "../../Helpers/ContextHelpers/ChooseContext";
import ModuleHeader from "../../Components/Headers/ModuleHeader";
import { setPathValues } from "../../Helpers/UrlHeperls/urlHelper";
import {modulesTitles} from "../../data/modulesTitles";
import {ChooseForm} from "../../Helpers/FormHelpers/ChooseForm";
import { SystemContext } from "../../Context/systemContext";
import PulseLoader from "react-spinners/PulseLoader";

export default function DeleteProject() {

  const { user } = useContext(UserContext);
  let location = useLocation();
  const navigate = useNavigate();
  // Destructure pathname, search, and hash from location object
  const { pathModule,pathName,pathId, pathAction } = setPathValues(location);

const {
  list,
  element,
  getList,
  getElement,
  deleteElement,
  loadingElement,
} = useContext(ChooseContext(modulesTitles[pathModule][1])); 
const { systemValues, systemModuleValue,getSystemValues,getSystemModuleValue,loading } = useContext(SystemContext);  

const setElementValue  = async (pathId,pathName) =>{
  await getElement(pathId,pathName);
};

useEffect(() => {
  setElementValue(pathId,pathName);
  }, [pathId,pathName]);

  const setSystemValues  = async () =>{
    await getSystemModuleValue(pathModule);
  };
  
  useEffect(()=>{
    setSystemValues(pathModule);
 },[pathModule]);



  const handleClick = async (link,action) =>{
      navigate(`${link}`);
  }


  const moduleForm = element ? ChooseForm(
    element,
    deleteElement,
    pathModule,
    pathName,
    pathId,
    pathAction,
    loadingElement
  ):null;


  return (
    <div className="w-full py-1 h-lvh bg-sky-600 flex flex-row flex-nowrap justify-center items-center">
      <div className="w-full h-svh bg-slate-200  ">
        <div className="w-auto h-[90%] overflow-y-scroll ">
            <div className="w-[90%] mx-auto flex flex-row flex-nowrap justify-between items-center">
            {systemModuleValue.modulesTitles === undefined ? (
                        <div className="my-10">
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
                  actionButtons={["View","Cancel"]}
                  moduleLink={pathModule}
                />
              )}   
           </div>
            {/*<DeleteProjectForm deleteConfirm={deleteConfirm} elementValues={element} handleDeleteConfirm={handleDeleteConfirm} pathId={pathId} pathName={pathName}  handleClick={handleClick} />*/}
            {moduleForm ? moduleForm : 
                        <div className="my-10">
                        <PulseLoader
                          color={"#fff"}
                          loading={loadingElement}
                          size={20}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </div>
            }
        </div>
      </div>
    </div>
  );
}
