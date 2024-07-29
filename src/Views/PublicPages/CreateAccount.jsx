import React from 'react'
import CreateAccountForm from '../../Components/Forms/CreateAccountForm'
export default function CreateAccount(props) {

  const {cssObject , generalSettings }= props;
  const { createAccountForms } = cssObject;


  return (
    <div className='py-1 h-svh flex flex-row flex-nowrap justify-center items-center'>
      <CreateAccountForm generalSettings={generalSettings} createAccountForms={createAccountForms}/>
    </div>

  )
}
