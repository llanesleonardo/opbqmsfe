import React, { useState, useEffect } from "react";
import { Steps, useSteps } from "react-step-builder";
import axios from "axios";
import "../../../styles.css";
import ProjectInfoStep from "./ProjectSteps/ProjectInfoStep";
import ProjectTimeStep from "./ProjectSteps/ProjectTimeStep";

export default function CreateProjectForm(props) {
  const { prev, next, jump, total, current, progress } = useSteps();
  const [defaultTables, setDefaultTables] = useState({
    statusId: [],
    categoryId: [],
    departmentId: [],
    priorityId: [],
  });

  const [project, setProject] = useState({
    pname: "",
    pdesc: "",
    statusId: "",
    categoryId: "",
    priorityId: "",
    departmentId: "",
    userId: "",
    companyId: "",
    initialcost: "",
    initialbudget: "",
    start_at: undefined,
    end_at: undefined,
    updated_at: new Date(),
    created_at: undefined,
  });
  const [error, setError] = useState({
    pname: "",
    pdesc: "",
    statusId: "",
    categoryId: "",
    priorityId: "",
    departmentId: "",
    userId: "",
    companyId: "",
    initialcost: "",
    initialbudget: "",
  });

  useEffect(() => {
    const setBackendValues = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/project/fill"
        );

        if (response.status !== 200) {
          console.log("error");
          return;
        }
        console.log(response);
        setProject((prev) => ({
          ...prev,
          companyId: response.data.projectData.company[0],
          userId: response.data.projectData.user[0],
        }));
        setDefaultTables((prev) => ({
          ...prev,
          'statusId': response.data.defaultTables.status,
          'categoryId': response.data.defaultTables.category,
          'departmentId': response.data.defaultTables.department,
          'priorityId': response.data.defaultTables.priority,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    setBackendValues();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "pinitialcost") {
      const costValue = e.target.value;
      // const formattedValue = formatCurrency(e.target.value);
      setProject({ ...project, ["initialcost"]: costValue });
      //console.log(costValue.slice(1), e.target.value);
    } else if (e.target.name === "pinitialbudget") {
      const costValue = e.target.value;
      // const formattedValue = formatCurrency(e.target.value);
      setProject({ ...project, ["initialbudget"]: costValue });
      console.log(costValue.slice(1), e.target.value);
    } else {
      setProject({ ...project, [e.target.name]: e.target.value });
    }

    setError("");
  };
  const { title } = props;

  return (
      <div className="w-[90%] bg-white rounded border-1  mx-auto pt-5">
        <div className="steps_data mt-5">
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
            <Steps>
              <ProjectInfoStep
                project={project}
                handleChange={handleChange}
                error={error}
                setError={setError}
                setProject={setProject}
                defaultTables={defaultTables}
              />
              <ProjectTimeStep
                project={project}
                handleChange={handleChange}
                error={error}
                setError={setError}
                method={'create'}
              />
            </Steps>

            <p>{progress >= 0 ? console.log(project) : null}</p>
          </div>
        </div>
      </div>
  );
}
