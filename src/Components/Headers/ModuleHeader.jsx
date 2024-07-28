import React from 'react'
import RoundedButton from "../Buttons/RoundedButton";

export default function ModuleHeader(props) {
  const {titles,pathId,handleClick,modStr,actionButtons, moduleLink} = props;

  const setActionButtons = (button) =>{
    switch (button) {
      case 'New': 
      return <RoundedButton
       key={`${button}button`}
       buttonColor="bg-white"
       buttonTextColor="text-blue"
       linkContent={button}
       link={`/app/${moduleLink}/${titles[0]}/create`}
       action={`navigate`}
       pathId={pathId}
       handleClick={handleClick}
     />
        case 'Edit':
         return  <RoundedButton
         key={`${button}button`} 
         buttonColor="bg-white"
          buttonTextColor="text-blue"
          linkContent={button}
          link={`/app/${moduleLink}/${titles[0]}/${pathId}/edit`}
          action={`navigate`}
          pathId={pathId}
          handleClick={handleClick}
        />

  
        case 'Delete':
        
     return   <RoundedButton
     key={`${button}button`}   
     buttonColor="bg-red-700"
        buttonTextColor="text-white"
        linkContent={button}
        link={`/app/${moduleLink}/${titles[0]}/${pathId}/delete`}
        action={`navigate`}
        pathId={pathId}
        handleClick={handleClick}
      />
      case 'View':
        
      return   <RoundedButton
      key={`${button}button`}  
      buttonColor="bg-sky-700"
         buttonTextColor="text-white"
         linkContent={button}
         link={`/app/${moduleLink}/${titles[0]}/${pathId}`}
         action={`navigate`}
         pathId={pathId}
         handleClick={handleClick}
       />
       case 'Cancel':
        
       return   <RoundedButton
       key={`${button}button`}   
       buttonColor="bg-sky-700"
          buttonTextColor="text-white"
          linkContent={button}
          link={pathId === undefined || pathId === 'create' ? `/app/${moduleLink}` :`/app/${moduleLink}/${titles[0]}/${pathId}`}
          action={`navigate`}
          pathId={pathId}
          handleClick={handleClick}
        />
      default:
        break;
    }
  };

  
  return (
    <div className=" w-full flex flex-row flex-nowrap gap-5 items-center justify-between my-5">
    <div className="w-1/4">
    <p className='text-sky-700 font-bold mb-3 mt-3 text-lg'> {modStr} </p> 
    </div>
    <div className="w-3/4 flex flex-row justify-end items-center gap-5">
    
    {actionButtons.map((button)=> setActionButtons(button))}
    </div>
  </div>
  )
}
