import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SystemContext } from "../../Context/systemContext";
import PulseLoader from "react-spinners/PulseLoader";
import { 
  Cog8ToothIcon, 
} from "@heroicons/react/24/solid";

export default function MainMenuApp() {
  
  const { modulesSettings,getModuleSettings, loading } = useContext(SystemContext);
  const [activeSubMenus, setActiveSubMenus] = useState({});

  const setSystemValues = async () => {
    await getModuleSettings();
  };
  useEffect(() => {
    setSystemValues();
  }, []);


  return (
    <ul>
      {modulesSettings ? (
        modulesSettings?.navMenus?.map((menuItem, index) => {
          return (
            <li
              key={index}
              className="flex flex-row justify-start items-center py-3"
            >
              <div className="flex flex-row justify-start items-center gap-2">
                {menuItem?.icon}
                 
                <Cog8ToothIcon className="w-3 text-white" />
                <Link to={menuItem?.url} className="text-white">
                  {menuItem?.label}
                </Link>
                
              </div>
            </li>
          );
        })
      ) : (
       <>
       <li>
          <PulseLoader
            color={"#fff"}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </li>
        </>  
      )}
    </ul>
  );
}
