import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../../Context/userContext";
import Table from "../../../Components/Tables/Table";
import ModuleHeader from "../../../Components/Headers/ModuleHeader";
import { useNavigate } from "react-router-dom";
import { firstLetterToUpperCase } from "../../../Helpers/StringHelpers/StringHelper";
import { useLocation } from "react-router-dom";
import { setPathValues } from "../../../Helpers/UrlHeperls/urlHelper";
import { SystemContext } from "../../../Context/systemContext";
import PulseLoader from "react-spinners/PulseLoader";

export default function ProjectLists() {
  const navigate = useNavigate();
  let location = useLocation();
  const { user } = useContext(UserContext);
  const {
    systemValues,
    systemModuleValue,
    getSystemValues,
    getSystemModuleValue,
    loading,
  } = useContext(SystemContext);
  const { pathModule, pathName, pathId, pathAction } = setPathValues(location);

  const setSystemValues = async (pathModule) => {
    await getSystemModuleValue(pathModule);
  };

  useEffect(() => {
    setSystemValues(pathModule);
  }, [pathModule]);

  const handleClick = async (link, action) => {
    navigate(`${link}`);
  };

  return (
    <div className="w-full py-1 h-lvh bg-sky-600 flex flex-row flex-nowrap justify-center items-center">
      <div className="w-full h-svh bg-slate-200  ">
        <div className="w-auto h-[90%] overflow-y-scroll">
          <div className="w-auto overflow-y-scroll flex flex-col flex-wrap  justify-start items-center">
            <div className="w-[95%] mx-auto flex flex-row flex-nowrap justify-between items-center">
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
                  modStr={firstLetterToUpperCase(pathModule)}
                  actionButtons={["New"]}
                  moduleLink={pathModule}
                />
              )}
            </div>
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
              <Table
                title={systemModuleValue.modulesTitles}
                handleClick={handleClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
