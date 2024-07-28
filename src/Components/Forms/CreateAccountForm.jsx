import React from 'react'

export default function CreateAccountForm() {
  return (
    <div className='w-1/3 flex flex-col flex-wrap gap-10 justify-center items-center '>
    <h1 className='text-4xl'>Start with your free account today. </h1>
    <form onSubmit={()=>null} className='flex flex-col flex-wrap gap-3 justify-center items-center'>
        <input
            type='text'
            value={''}
            onChange={()=>null}
            className='rounded  bg-slate-200 px-3 py-1 w-60'
            placeholder='Full Name'
        />
         <input
            type='email'
            value={''}
            onChange={()=>null}
            className='rounded  bg-slate-200 px-3 py-1 w-60'
            placeholder='Email'
        />
     <input type="submit" className='bg-sky-900 px-3 py-1 w-60 rounded text-white' value="Create account" />
    </form>
</div>
   
  )
}
