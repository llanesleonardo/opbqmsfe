import React, { useState, useEffect,useContext,useCallback } from "react";
import { Steps, useSteps } from "react-step-builder";
import axios from "axios";
import "../../../styles.css";
import { useLocation } from 'react-router-dom';
import ProjectInfoStep from "./ProjectSteps/ProjectInfoStep";
import ProjectTimeStep from "./ProjectSteps/ProjectTimeStep";
import {ChooseContext } from "../../../Helpers/ContextHelpers/ChooseContext";
 
export default function EditProjectForm({ title, element, getElement, pathModule, pathName, pathId, action, loading}) {
  const { prev, next, jump, total, current, progress } = useSteps();
  const [elementValuesx, setElementValuesx] = useState({});
  const [defaultValuesx, setDefaultValuesx] = useState({});

    
  
  useEffect(() => {
    const setBackendValues = async () => {
      await getElement(pathId,pathName);
    };
   setBackendValues();
  }, []);


  const [error, setError] = useState({});
  

  const handleChange = (e) => {
    if (e.target.name === "pinitialcost") {
      const costValue = e.target.value;
      // const formattedValue = formatCurrency(e.target.value);
      setElementValuesx({ ...elementValuesx, ["initialcost"]: costValue });
      //console.log(costValue.slice(1), e.target.value);
    } else if (e.target.name === "pinitialbudget") {
      const costValue = e.target.value;
      // const formattedValue = formatCurrency(e.target.value);
      setElementValuesx({ ...elementValuesx, ["initialbudget"]: costValue });
      console.log(costValue.slice(1), e.target.value);
    } else {
      setElementValuesx({ ...elementValuesx, [e.target.name]: e.target.value });
    }

    setError("");
  };

  return (
      <div className="w-[90%] bg-white rounded border-1 mx-auto">
           <div className="steps_data mt-5 pt-5">
          {/*<div>Total Steps: {total}</div>*/}
          <div className="text-sky-600">
            <span className=" border-2 rounded-full text-sky-700s  py-1 px-2 border-sky-700 ">
              {current}
            </span>{" "}
            {current === 1 ? "Project Information" : ""}{" "}
            {current === 2 ? "Review Project Information" : ""}
          </div>
          <div className="text-sky-600">Progress: {progress * 100}%</div>
        </div>
        <div className=" h-auto mx-3 my-5 rounded">
          <div className="steps_wrapper w-full bg-white">
          {loading ? (<p>loading</p>) :(
            <Steps>
              <ProjectInfoStep
                elementValues={element?.projectData}
                handleChange={handleChange}
                error={error}
                setError={setError}
                defaultValues={element?.defaultTables}
                loading={loading}
              />
              <ProjectTimeStep
                elementValues={element?.defaultTables}
                handleChange={handleChange}
                error={error}
                setError={setError}
                method={'edit'}
                loading={loading}
              />
            </Steps>
          )}

            <p>{progress >= 0 ? console.log('progress section',element.defaultTables) : null}</p>
          </div>
        </div>
      </div>

  );
}
