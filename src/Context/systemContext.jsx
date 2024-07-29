import React, { createContext, useState, useEffect, useCallback } from "react";
import settings from "../../settings";
import elementsAPI from '../Helpers/ApiHelpers/elementsAPI';

const  {getSystemSettingData } = elementsAPI(); 

const SystemContext = createContext();

const SystemProvider = ({ children }) => {

  const [systemModulesValues, setSystemModulesValues] = useState({});
  const [systemModuleValue,setSystemModuleValue] = useState({});
  const [publicPages,setPublicPages] = useState({});
  const [loading,setLoading] = useState(false);
  //console.log(documentControlMenu);
  const getSystemModulesValues = async () =>{
    setLoading(true);
    const data = await getSystemSettingData();
    //console.log('getSystemModulesValues',data);
    setSystemModulesValues(data? data?.modulesSettings : null);
    setLoading(false);
  };

const getPublicPagesInfo = ()=>{
  setLoading(true);
  setPublicPages(settings.generalSettings.publicPages);
  setLoading(false);
}


  const getSystemModuleValue = async (pathModule) => {
    setLoading(true);
    // Simulate API call delay with setTimeout (remove in production)
   // console.log('pathModule',pathModule);
    const data = await getSystemSettingData();
      const module = data ? data?.modulesSettings?.navMenus.find(item => item.url === `/app/${pathModule}`) : null;
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
        systemModulesValues,
        systemModuleValue,
        publicPages,
        getSystemModulesValues,
        getSystemModuleValue,
        getPublicPagesInfo,
        loading
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export { SystemContext, SystemProvider };
