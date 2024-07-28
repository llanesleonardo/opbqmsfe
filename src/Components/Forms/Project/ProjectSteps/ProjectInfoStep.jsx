import React,{useState} from 'react'
import { Steps, useSteps } from "react-step-builder";
import { Select } from '../../InputElements/Select';
import { useEffect } from 'react';

export default function ProjectInfoStep(props) {
  const { prev, next, jump, total, current, progress  } = useSteps();
  const { elementValues, handleChange, error, setError, defaultValues ,loading} = props;

// Regular expression to match any non-digit character
const patternNonDigits = /\D/;
const patternNonDigitsButDollarSign = /[^\d$.]/;

  const handleNext = () =>{

    if (!elementValuesx.pname) {
      console.log('You need to assigned a name to the project.');
      setError({
        ...error,
        'pname':'You need to assigned a name to the project'
      });
      return;
    }
  if (!elementValuesx.statusId || elementValuesx.statusId === '') {
      console.log('You need to assigned a status to the project.');
      setError({
        ...error,
        'statusId':'You need to assigned a status to the project'
      });
      return;
    }
    if (!elementValuesx.categoryId || elementValuesx.categoryId === '') {
      console.log('You need to assigned a categoy to the project.');
      setError({
        ...error,
        'categoryId':'You need to categoy a status to the project'
      });
      return;
    }
    if (!elementValuesx.departmentId || elementValuesx.departmentId === '') {
      console.log('You need to assigned a department to the project.');
      setError({
        ...error,
        'departmentId':'You need to assigned a department to the project'
      });      
      return;
    }
    
    if (!elementValuesx.priorityId || elementValuesx.priorityId === '') {
      console.log('You need to assigned a priority to the project.');
      setError({
        ...error,
        'priorityId':'You need to assigned a priority to the project'
      });   
      return;
    }

    if (patternNonDigitsButDollarSign.test(elementValuesx.initialbudget)) {
      console.log('You $ amount has a word or a letter.');
       setError({
        ...error,
        'initialbudget':'You $ amount has a word or a letter.'
      });   
      return;
    }else{
            // CHECK IF BUDGET VALUE HAS A LETTER/WORD

      const costValue =  elementValuesx.initialbudget;
      if (costValue) {
        console.log(costValue);
        const formattedValue = formatCurrency(costValue);
        console.log('initialbudget',formattedValue);
       // setProject({ ...project, 'initialbudget':formattedValue});
        setElementValues(prev => ({ ...prev, 'initialbudget':formattedValue}));

        console.log('initialbudget project',elementValuesx);
      }
    }

    if (patternNonDigitsButDollarSign.test(elementValuesx.initialcost)) {
      console.log('You $ amount has a word or a letter.');
      setError({
        ...error,
        'initialcost':'You $ amount has a word or a letter.'
      });   
      return;
    }else{
      // CHECK IF COST VALUE HAS A LETTER/WORD
      const costValue =  elementValuesx.initialcost;
      if (costValue) {
        const formattedValue = formatCurrency(costValue);
        setProject(prev => ({ ...prev, 'initialcost':formattedValue}));
      }
    }

    


    //console.log('state',project);

    next();
  }

  const formatCurrency = (value) => {
    // Remove non-numeric characters except for dot
    const numericValue = value.replace(/[^0-9.]/g, '');
    // Format value as currency
    const formattedValue = Number(numericValue).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    return formattedValue;
  }

//console.log(progress,prev,next,jump,total,current,isFirst,isLast, hasPrev,hasNext);
  return (
    <div className="step">
     <div className="form flex flex-row gap-3 justify-between items-center mb-5 flex-wrap">
    <div className='w-full'>
      <label htmlFor="pcompanyId" className='block'>Account company: {elementValues?.companyId}</label>
      <input
        id="pcompanyId"
        name="pcompanyId"
        value={elementValues?.companyId}
        onChange={handleChange}
        className='rounded bg-slate-200 py-2 px-2'
        disabled
        hidden
      />
      </div>
      <div className='w-full'>
      <label htmlFor="puserId" className='block'>Account user: {elementValues?.userId}</label>
      <input
        id="puserId"
        name="puserId"
        value={elementValues?.userId}
        onChange={handleChange}
        className='rounded bg-slate-200 py-2 px-2'
        disabled
        hidden
      />
      </div>
      <div className='w-full'>
      <label htmlFor="pname" className='block'><span className='text-red-500 text-lg font-bold'>*</span> Project Name:</label>
      <input
        id="pname"
        name="pname"
        value={elementValues?.pname}
        onChange={handleChange}
        className='rounded bg-slate-200 py-2 px-2 w-[97%]'
        required
      />
            <div>
        {error.pname && <span className='text-red-500'>{error.pname}</span>}
      </div>
      </div>
   {loading ? (<p>laoding</p>):(
    <>
    <div className='w-52'>
    {<Select arrayValues={defaultValues?.status} title={'status'} handleChange={handleChange} project={elementValues} defaultV={elementValues?.statusId} loading={loading}/>}

     <div>
       {error.statusId && <span className='text-red-500'>{error.statusId}</span>}
       </div>
     </div>
     <div className='w-52'> 
     {<Select arrayValues={defaultValues?.category} title={'category'} handleChange={handleChange} project={elementValues} defaultV={elementValues?.categoryId} loading={loading} />}
     <div>
     {error.categoryId && <span className='text-red-500'>{error.categoryId}</span>}
     </div>
     </div>
     <div className='w-52'> 
     {<Select arrayValues={defaultValues?.department} title={'department'}  handleChange={handleChange} project={elementValues} defaultV={elementValues?.departmentId} loading={loading}/>}
     <div>
       {error.departmentId && <span className='text-red-500'>{error.departmentId}</span>}
       </div>
     </div>
     <div className='w-52'> 
     {<Select arrayValues={defaultValues?.priority} title={'priority'} handleChange={handleChange} project={elementValues} defaultV={elementValues?.priorityId} loading={loading}/>}
     <div>
       {error.priorityId && <span className='text-red-500'>{error.priorityId}</span>}
       </div>
     </div>
     </>
   )}
      
     
      <div className='w-52'>
      <label htmlFor={'start_at'} className='block'>Start At:</label>
        <input
          type="datetime-local"
          id={'start_at'}
          name={'start_at'}
          value={elementValues?.start_at}
          min=""
          max="" 
          onChange={handleChange}
          className='text-xs bg-slate-200 rounded py-2 px-2'
          />
      </div>
      <div className='w-52'>
      <label htmlFor={'end_at'} className='block'>Ends At:</label>
        <input
          type="datetime-local"
          id={'end_at'}
          name={'end_at'}
          value={elementValues?.end_at}
          min={elementValues?.start_at}
          max="" 
          onChange={handleChange}
          className='text-xs bg-slate-200 rounded py-2 px-2'
          />
      </div>
      <div className='w-52'>
      <label htmlFor={'updated_at'} className='block hidden'>Updated At:</label>
        <input
          type="datetime-local"
          id={'updated_at'}
          name={'updated_at'}
          value={elementValues?.updated_at}
          min=""
          max="" 
          onChange={handleChange}
          className='text-xs bg-slate-200 rounded py-2 px-2'
          hidden
          />
      </div>
      <div className='w-52'>
      <label htmlFor={'created_at'} className='block hidden'>Created At:</label>
        <input
          type="datetime-local"
          id={'created_at'}
          name={'created_at'}
          defaultValue={elementValues?.created_at}
          className='text-xs bg-slate-200 rounded py-2 px-2'
          disabled={true}
          hidden
          />
      </div>

      <div className='w-52'>
      <label htmlFor="pinitialbudget" className='block'>Initial budget:</label>
      <input
        id="pinitialbudget"
        name="pinitialbudget"
        value={elementValues?.initialbudget}
        onChange={handleChange}
        className='rounded bg-slate-200 rounded py-2 px-2'
        type='text'
        placeholder='$0.00'
      />
            <div>
        {error.initialbudget && <span className='text-red-500'>{error.initialbudget}</span>}
        </div>
      </div>
      <div className='w-52'>
      <label htmlFor="pinitialcost" className='block'>Initial cost:</label>
      <input
        id="pinitialcost"
        name="pinitialcost"
        value={elementValues?.initialcost}
        onChange={handleChange}
        className='rounded bg-slate-200 rounded py-2 px-2'
        type='text'
        placeholder='$0.00'
      />
            <div>
        {error.initialcost && <span className='text-red-500'>{error.initialcost}</span>}
        </div>
      </div>
     

      <div className='w-full'> 
      <label htmlFor="pdesc" className='block'>
      Description: </label> 
      <textarea 
        name="pdesc"
        id='pdesc'
        rows={5}  
        className='border  rounded py-2 px-2 w-[97%]' 
        value={elementValues?.pdesc ? elementValues?.pdesc : ''}
        onChange={handleChange}
        />
        <div>
        {error.pdesc && <span className='text-red-500'>{error.pdesc}</span>}
        </div>
      </div>

    
    </div>
    <div className="navigation">
            <button className='bg-sky-700  rounded border-0 text-white py-1 px-5 mx-10' onClick={handleNext}>Next</button>
        </div>
  </div>
  )
}
