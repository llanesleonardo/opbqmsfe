import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'


export default function ContactForm(props) {
const {ContactForms,title,subtitle,content } = props;
  const { 
    buttonBackground,
    buttonColor,
    inputBackground,
    shapeButton
   } =ContactForms;

console.log(props);


  return (
    <div className='w-1/3 flex flex-col flex-wrap gap-10 justify-center items-center'>
        <h1 className='text-4xl'>{title}</h1>
        <p>{subtitle}</p>
        <form onSubmit={()=>null} className='flex flex-col flex-wrap gap-3 justify-center items-center'>
            <input
                type='text'
                value={''}
                onChange={()=>null}
                className={`${shapeButton} ${inputBackground} px-3 py-1 w-60`}
                placeholder='Full Name'
            />
             <input
                type='text'
                value={''}
                onChange={()=>null}
                className={`${shapeButton} ${inputBackground} px-3 py-1 w-60`}
                placeholder='Company'
            />
             <input
                type='email'
                value={''}
                onChange={()=>null}
                className={`${shapeButton} ${inputBackground} px-3 py-1 w-60`}
                placeholder='Email'
            />
             <textarea
                name='textarea1'
                value={''}
                onChange={()=>null}
                className={`${shapeButton} ${inputBackground} px-3 py-1 w-60`}
                rows={10}
                placeholder='Description'
            />

         <input type="submit" className={`${buttonBackground} px-3 py-1 w-60 rounded ${buttonColor}`} value="Send" />
        </form>
    </div>
  )
}
