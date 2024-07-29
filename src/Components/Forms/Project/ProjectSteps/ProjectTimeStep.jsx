import React,{useState} from "react";
import { Steps, useSteps } from "react-step-builder";
import axios from "axios"
import { useNavigate } from 'react-router-dom';


export default function ProjectTimeStep(props) {
  const { prev, next, jump, total, current, progress  } = useSteps();
  const { elementValues, handleChange, error, setError , method} = props;
  const navigate = useNavigate();


  const handleSubmit = async () => {

      try {
        let response =``;
        let url='';
        if(method === 'create'){
         url = `http://localhost:3001/api/v1/project`
         response = await axios.post(
          url,{
            'data':elementValues
          }
        );
        }else{
         url = `http://localhost:3001/api/v1/project/${project.id}`
          response = await axios.patch(
            url,{
              'data':elementValues
            }
          );
          
        }


        if (response.status === 200 || response.status === 201) {
          console.log('response.data',response.data);
          navigate('/app/main-projects');

        }else{
          console.log(" status error ");
          return;
        }


      } catch (error) {
        console.log(error);
      }
  }
  
  return (
    <div className="step">
      <div className="form">
          <div className="form flex flex-row gap-3 justify-between items-center mb-5 flex-wrap">
          <div className='w-full'>
            <p  className='block'>Account company: {elementValues.companyId}</p>
          </div>
          <div className='w-full'>
          <p  className='block'>Account user: {elementValues.userId}</p>

            </div>
            <div className='w-full'>
            <p  className='block'>Project name: {elementValues.pname}</p>

            </div>
            <div className='w-full'>
            <p  className='block'>Status: {elementValues.statusId}</p>
 
            </div>
            <div className='w-full'>
            <p  className='block'>Category: {elementValues.categoryId}</p>
  
            </div>
            <div className='w-full'>
            <p  className='block'>Department: {elementValues.departmentId}</p>
 
            </div>
            <div className='w-full'>
            <p  className='block'>Priority: {elementValues.priorityId}</p>
 
            </div>
            <div className='w-full'>
            <p  className='block'>Start At: {elementValues?.start_at}</p> 
            </div>
            <div className='w-full'>
            <p  className='block'>Ends At: {elementValues?.end_at}</p> 
            </div>
            <div className='w-full'>
            <p  className='block'>Updated At: {elementValues?.updated_at}</p> 
            </div>
            <div className='w-full'>
            <p  className='block'>Created At: {elementValues?.created_at}</p> 
            </div>
            <div className='w-full'>
            <p  className='block'>Initial budget: {elementValues.initialbudget}</p> 
            </div>
            <div className='w-full'>
            <p  className='block'>Initial cost: {elementValues.initialcost}</p> 
            </div>
            <div className='w-full'>
            <p  className='block'>Description: {elementValues.pdesc}</p> 
            </div>
          </div>
          <div className="navigation">
            <button className='bg-sky-700  rounded border-0 text-white py-1 px-5 mx-10' onClick={prev}>Prev</button>
            <button className='bg-sky-700  rounded border-0 text-white py-1 px-5 mx-10' onClick={handleSubmit}>Submit</button>
          </div>
      </div>
    </div>
  );
}
