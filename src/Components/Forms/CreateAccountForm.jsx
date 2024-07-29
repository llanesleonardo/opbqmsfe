import React from 'react'

export default function CreateAccountForm(props) {


  const { createAccountForms,generalSettings } = props;
  const { 
    formPosition,
    buttonBackground,
    buttonColor,
    inputBackground,
    shapeButton
  } =createAccountForms;

  const { title, subtitle} =generalSettings;


  return (
    <div className='w-1/3 flex flex-col flex-wrap gap-10 justify-center items-center '>
    <h1 className='text-4xl'>{title}</h1>
    <p className='text-1xl'>{subtitle}</p>
    <form onSubmit={()=>null} className={`flex flex-col flex-wrap gap-3 ${formPosition}items-center`}>
        <input
            type='text'
            value={''}
            onChange={()=>null}
            className={` ${shapeButton}  ${inputBackground}  px-3 py-1 w-60`}
            placeholder='Full Name'
        />
         <input
            type='email'
            value={''}
            onChange={()=>null}
            className={` ${shapeButton}  ${inputBackground}  px-3 py-1 w-60`}
            placeholder='Email'
        />
     <input type="submit" className={`${buttonBackground} px-3 py-1 w-60 rounded ${buttonColor}`} value="Create account" />
    </form>
</div>
   
  )
}
