import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
export default function LoginForm(props) {

  const { LoginForms } = props;
  const { 
    formPosition,
    buttonBackground,
    buttonColor,
    inputBackground,
    shapeButton
  } =LoginForms;

  const navigate = useNavigate();

  const handleSubmit = () =>{
    navigate('/app/main-dashboard');
  };

  return (
    <div className='w-1/3 flex flex-col flex-wrap gap-10 justify-center items-center '>
    <h1 className='text-4xl'>Login</h1>
    <form onSubmit={()=>null} className={`flex flex-col flex-wrap gap-3 ${formPosition} items-center`}>
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
     <input type="button" onClick={handleSubmit} className='bg-sky-900 px-3 py-1 w-60 rounded text-white' value="Submit" />
     <div className='text-center py-5'>
     <p><Link to="/passwordreset" className='underline'>Forgot you password?</Link></p>
     </div>
     <div className='border-t-2 border-slate-400 py-2'>
     <button type="button" className={`${buttonBackground} px-3 py-1 w-60 rounded ${buttonColor}`}><Link to="/createaccount">Create an account</Link></button>
    </div>
    </form>
</div>
  )
}
