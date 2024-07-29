import React from 'react'


export default function PasswordResetForm(props) {

  const { passwordResetForm,generalSettings } = props;
  const { 
    formPosition,
    buttonBackground,
    buttonColor,
    inputBackground,
    shapeButton
  } =passwordResetForm;

  const { title, subtitle} =generalSettings;

  return (
    <div className='w-1/3 flex flex-col flex-wrap gap-10 justify-center items-center '>
    <h1 className='text-4xl'>{title}</h1>
    <form onSubmit={()=>null} className={`flex flex-col flex-wrap gap-3 ${formPosition} items-center`}>
        <input
            type='text'
            value={''}
            onChange={()=>null}
            className={` ${shapeButton}  ${inputBackground}  px-3 py-1 w-60`}
            placeholder='Email'
        />
     <input type="submit" className={`${buttonBackground} px-3 py-1 w-60 rounded ${buttonColor}`} value="Reset password" />
    </form>
</div>
  )
}
