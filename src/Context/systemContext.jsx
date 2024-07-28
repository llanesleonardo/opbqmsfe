import React, { createContext, useState, useEffect, useCallback } from "react";
import { documentControlMenu } from "../data/menusData"


const SystemContext = createContext();

const SystemProvider = ({ children }) => {

  const [systemValues, setSystemValues] = useState([]);
  const [systemModuleValue,setSystemModuleValue] = useState({});
  const [loading,setLoading] = useState(false);
  //console.log(documentControlMenu);
  const getSystemValues = async () =>{
    setLoading(true);
      setSystemValues(documentControlMenu);
      setLoading(false);
  };


  const getSystemModuleValue = async (pathModule) => {
    setLoading(true);
    // Simulate API call delay with setTimeout (remove in production)

      const module = documentControlMenu.find(item => item.url === `/app/${pathModule}`);
      if (module) {
        setSystemModuleValue(module);
      } else {
        setSystemModuleValue({});
      }
      setLoading(false);
  };

  return (
    <SystemContext.Provider
      value={{
        systemValues,
        systemModuleValue,
        getSystemValues,
        getSystemModuleValue,
        loading
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export { SystemContext, SystemProvider };
