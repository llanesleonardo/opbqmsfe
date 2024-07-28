import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import elementsAPI from "../Helpers/ApiHelpers/elementsAPI";
const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const  {getElementEP,getListEP,deleteElementEP,updateElementEP } = elementsAPI();
  
  const [list, setList] = useState([]);
  const [element, setElement] = useState({});
  const [deletedElement,setDeletedElement] = useState({});
  const [updatedElement,setUpdatedElement] = useState({});
  const [loadingElement, setLoadingElement] = useState(false);


  const getElement = useCallback(async (pathId,pathName) =>{ 
      const result = await getElementEP(pathId,pathName,setLoadingElement);
      setElement(result);
  },[getElementEP]);
  const getList =  useCallback(async (pathName) =>{
    const results = await getListEP(pathName,setLoadingElement);
    setList(results)
    },[getListEP]);
  const deleteElement =  useCallback(async (pathId,pathName) =>{ setDeletedElement(await deleteElementEP(pathId,pathName))},[]);
  const updateElement =  useCallback(async (pathId,pathName) =>{  setUpdatedElement(await updateElementEP(pathId,pathName))},[]);

  return (
    <ProjectContext.Provider
      value={{
        list,
        element,
        deletedElement,
        updatedElement,
        loadingElement,
        getList,
        getElement,
        deleteElement,
        updateElement
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
