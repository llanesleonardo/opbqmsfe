import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import elementsAPI from "../Helpers/ApiHelpers/elementsAPI";
const DataContext = createContext();

const DataProvider = ({ children }) => {
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
    console.log('getList',results);
    setList(results)
    },[getListEP]);
  const deleteElement =  useCallback(async (pathId,pathName) =>{ setDeletedElement(await deleteElementEP(pathId,pathName))},[]);
  const updateElement =  useCallback(async (pathId,pathName) =>{  setUpdatedElement(await updateElementEP(pathId,pathName))},[]);

  return (
    <DataContext.Provider
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
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
