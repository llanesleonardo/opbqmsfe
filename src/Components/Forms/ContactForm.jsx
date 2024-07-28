import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'


export default function ContactForm() {
  return (
    <div className='w-1/3 flex flex-col flex-wrap gap-10 justify-center items-center'>
        <h1 className='text-4xl'>¡Contáctanos!</h1>
        <p>¿Necesitas ayuda o quieres dejarnos
        comentarios?</p>
        <form onSubmit={()=>null} className='flex flex-col flex-wrap gap-3 justify-center items-center'>
            <input
                type='text'
                value={''}
                onChange={()=>null}
                className='rounded  bg-slate-200 px-3 py-1 w-60'
                placeholder='Full Name'
            />
             <input
                type='text'
                value={''}
                onChange={()=>null}
                className='rounded  bg-slate-200 px-3 py-1 w-60'
                placeholder='Company'
            />
             <input
                type='email'
                value={''}
                onChange={()=>null}
                className='rounded  bg-slate-200 px-3 py-1 w-60'
                placeholder='Email'
            />
             <textarea
                name='textarea1'
                value={''}
                onChange={()=>null}
                className='rounded  bg-slate-200 px-3 py-1 w-60'
                rows={10}
                placeholder='Description'
            />

         <input type="submit" className='bg-sky-900 px-3 py-1 w-60 rounded text-white' value="Submit" />
        </form>
    </div>
  )
}
