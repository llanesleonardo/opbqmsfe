import React from 'react'

export const Select = (props) => {

const { arrayValues,title,handleChange, project,defaultV,loading } = props;

    return (
    <div>
        <label className='block'>
        <span className='text-red-500 text-lg font-bold'>*</span> {`Select a ${title}:`}</label>
        {loading ? (<p>loading</p>):(
        <select name={`${title}Id`}  onChange={handleChange} value={defaultV} className='bg-slate-200 rounded px-3 py-2 w-48'  required>
        {arrayValues?.map((value,index)=>{
            return (
              <option key={index} value={value}>{value}</option>
          )
        })}
        </select>
      )}
    </div>
  )
}
