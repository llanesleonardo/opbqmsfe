import React from 'react'
import { MapPinIcon, PhoneIcon ,AtSymbolIcon } from '@heroicons/react/24/solid'

export default function DisplayInfo(props) {

    const { DisplayInfos, content } =props;
    const { side } =DisplayInfos;
  return (
    <div className={`w-1/3 flex flex-col flex-wrap ${side} items-center`}>
    <img src="https://valenteweb.azureedge.net/$web/assets/cadamovimiento/cm05.png" className='' />
   
    <div className='flex flex-col justify-start items-center'>
    <div className='flex flex-row justify-start items-center'><div className=''><MapPinIcon className='w-4 mr-2'/></div><p className='text-center'>{content.address}</p></div>
     <div className='flex flex-row justify-start items-center'><div className=''><PhoneIcon className='w-4 mr-2'/></div><p className='text-center'>{content.phone}</p></div>
     <div className='flex flex-row justify-start items-center'><div className=''><AtSymbolIcon className='w-4 mr-2'/></div><p className='text-center'>{content.email}</p>  </div>        
    </div>
</div>
  )
}
