import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SystemContext } from "../../Context/systemContext";
import PulseLoader from "react-spinners/PulseLoader";
export default function MainMenuApp() {
  const { systemModulesValues, getSystemModulesValues, loading } = useContext(SystemContext);
  const [activeSubMenus, setActiveSubMenus] = useState({});

  const setSystemValues = async () => {
    await getSystemModulesValues();
  };
  useEffect(() => {
    setSystemValues();
  }, []);


  return (
    <ul>
      {console.log(systemModulesValues.navMenus)}
      {systemModulesValues ? (
        systemModulesValues?.navMenus?.map((menuItem, index) => {
          return (
            <li
              key={index}
              className="flex flex-row justify-start items-center py-3"
            >
              <div className="flex flex-row justify-start items-center">
                {menuItem?.icon}
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
