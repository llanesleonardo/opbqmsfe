import React from 'react'
import LoginForm from '../../Components/Forms/LoginForm'

export default function Login(props) {

  const {cssObject}= props;
  const { LoginForms } = cssObject;
  return (
    <div className='py-1 h-svh flex flex-row flex-nowrap justify-center items-center'>
      <LoginForm LoginForms={LoginForms}/>
    </div>
  )
}
