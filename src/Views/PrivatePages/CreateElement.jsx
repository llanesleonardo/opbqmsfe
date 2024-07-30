import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StepsProvider } from "react-step-builder";
import { UserContext } from "../../Context/userContext";
import ModuleHeader from "../../Components/Headers/ModuleHeader";
import { firstLetterToUpperCase } from "../../Helpers/StringHelpers/StringHelper";
import { setPathValues } from "../../Helpers/UrlHeperls/urlHelper";
import { SystemContext } from "../../Context/systemContext";
import { ChooseForm } from "../../Helpers/FormHelpers/ChooseForm";
import PulseLoader from "react-spinners/PulseLoader";

export default function CreateElement({modulesTitles}) {
  const { user } = useContext(UserContext);
  let location = useLocation();
  const navigate = useNavigate();
  const {  
    modulesSettings,
    publicPagesSettings,
    getModuleSettings,
    getPublicPagesSettings,
    loading
   } = useContext(SystemContext);

   
  const { pathModule, pathName, pathId, pathAction } = setPathValues(location);

  const setSystemValues = async () => {
   // await getSystemModuleValue(pathModule);
   await getModuleSettings()
  };

  useEffect(() => {
    setSystemValues(pathModule);
  }, [pathModule]);

  const handleClick = async (link, action) => {
    console.log("link", link);
    navigate(`${link}`);
  };

  const moduleForm = ChooseForm(
    {},
    () => {},
    pathModule,
    pathName,
    pathId,
    "create",
    loading
  );

  return (
    <div className="w-full py-1 h-lvh bg-sky-600 flex flex-row flex-nowrap justify-center items-center">
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="w-full h-svh bg-slate-200  ">
          <div className="w-auto h-[90%] overflow-y-scroll">
            <div className="w-[90%] mx-auto flex flex-row flex-nowrap justify-between items-center">
              {modulesTitles === undefined ? (
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
                  titles={modulesTitles}
                  pathId={pathId}
                  handleClick={handleClick}
                  modStr={firstLetterToUpperCase(pathName)}
                  actionButtons={["Cancel"]}
                  moduleLink={pathModule}
                />
              )}
            </div>
            <StepsProvider>
              {moduleForm ? (
                moduleForm
              ) : (
                <div className="my-10">
                  <PulseLoader
                    color={"#fff"}
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              )}
            </StepsProvider>
          </div>
        </div>
      )}
    </div>
  );
}
