import React, { createContext, useState, useCallback } from "react";
import elementsAPI from '../Helpers/ApiHelpers/elementsAPI';

const  {getSystemSettingData,getModuleStructureSettings } = elementsAPI(); 

const SystemContext = createContext();

const SystemProvider = ({ children }) => {

  const [allSettings,setAllSettings] = useState({});
  const [publicPagesSettings,setPublicPagesSettings] = useState({});
  const [modulesSettings,setModulesSetttings] = useState({});
  const [securitySettings, setSecuritySettings] = useState({});
  const [complianceSettings,setComplianceSettings] = useState({});
  const [moduleStructureSettings,setModuleStructureSettings] = useState({});

  const [loading,setLoading] = useState(false);

  const getPublicPagesSettings = async()=>{
    setLoading(true);
    const data = await getSystemSettingData();
    setPublicPagesSettings(data? data?.publicPagesSettings : null);
    setLoading(false);
  }

  const getModuleSettings = async () =>{
    setLoading(true);
    const data = await getSystemSettingData();
    setModulesSetttings(data? data?.modulesSettings : null);
    setLoading(false);
  };


  const getSecuritySettings= async () =>{
    setLoading(true);
    const data = await getSystemSettingData();
    setSecuritySettings(data? data?.securitySettings : null);
    setLoading(false);
  };


  const getComplianceSettings= async () =>{
    setLoading(true);
    const data = await getSystemSettingData();
    setComplianceSettings(data? data?.complianceSettings : null);
    setLoading(false);
  };


  const getAllSettings= async () =>{
    setLoading(true);
    const data = await getSystemSettingData();
    setAllSettings(data? data : null);
    setLoading(false);
  };

  const getModuleStructureSettingss = async (pathName) =>{
    setLoading(true);
    const data = await getModuleStructureSettings();
    console.log('getModuleStructureSettingss',data[pathName]);
    setModuleStructureSettings(data? data[pathName] : null);
    setLoading(false);
  };


  return (
    <SystemContext.Provider
      value={{
        modulesSettings,
        publicPagesSettings,
        securitySettings,
        complianceSettings,
        allSettings,
        moduleStructureSettings,
        getModuleSettings,
        getPublicPagesSettings,
        getSecuritySettings,
        getComplianceSettings,
        getAllSettings,
        setAllSettings,
        getModuleStructureSettingss,
        loading
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export { SystemContext, SystemProvider };
