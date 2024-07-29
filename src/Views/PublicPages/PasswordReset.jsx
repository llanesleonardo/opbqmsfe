import React from 'react'
import PasswordResetForm from '../../Components/Forms/PasswordResetForm'

export default function PasswordReset(props) {

  const {cssObject, generalSettings} = props; 

  console.log(props);

const { passwordResetForm } = cssObject;


  return (
    <div className='py-1 h-screen flex flex-row flex-nowrap justify-center items-center'>
      <PasswordResetForm generalSettings={generalSettings} passwordResetForm={passwordResetForm}/>
    </div>
  )
}
