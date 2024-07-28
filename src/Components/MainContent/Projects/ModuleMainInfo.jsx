import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default function ModuleMainInfo({
  elementValues,
  getElement,
  pathId,
  pathName,
  loadingElement,
}) {
  useEffect(() => {
    const setBackendValues = async () => {
      await getElement(pathId, pathName);
    };
    setBackendValues();
  }, [pathId, pathName]);

  const widthField = "w-2/3 pl-2";
  const widthFieldName = "w-1/3";
  const colorText = "text-slate-500";

  return (
    <div className="flex flex-row flex-nowrap  justify-center items-start">
      {loadingElement ? (
        <div className="my-10">
          <PulseLoader
            color={"#fff"}
            loading={loadingElement}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div className="w-[90%]">
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Project name:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.pname}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Account:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.companyId}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Account user:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.userId}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>Status: </p>{" "}
              <p className={`${widthField} `}>
                {" "}
                {elementValues.projectData?.statusId}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Category:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.categoryId}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Priority:{" "}
              </p>{" "}
              <p className={`${widthField} `}>
                {" "}
                {elementValues.projectData?.priorityId}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Department:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.departmentId}
              </p>
            </div>
          </div>
          <div className="w-[90%]">
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Start at:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.start_at}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText}`}>End at: </p>{" "}
              <p className={`${widthField} `}>
                {" "}
                {elementValues.projectData?.end_at}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText}`}>
                Updated at:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.updated_at}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText}`}>
                Created at:{" "}
              </p>{" "}
              <p className={`${widthField} `}>
                {" "}
                {elementValues.projectData?.created_at}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText}`}>
                Initial budget:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.initialbudget}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText}`}>
                Initial cost:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.initialcost}
              </p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-center">
              {" "}
              <p className={`${widthFieldName} ${colorText} `}>
                Description:{" "}
              </p>{" "}
              <p className={`${widthField}`}>
                {" "}
                {elementValues.projectData?.pdesc}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
