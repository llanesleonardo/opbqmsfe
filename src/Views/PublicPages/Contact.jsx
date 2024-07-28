import React from 'react'
import ContactForm from "../../Components/Forms/ContactForm"
import { MapPinIcon, PhoneIcon ,AtSymbolIcon } from '@heroicons/react/24/solid'


export default function Contact() {
  return (
    <div className='flex flex-row flex-wrap justify-around items-center gap-10 py-10'>
      <ContactForm />
            <div className='w-1/3 flex flex-row flex-wrap justify-start items-start'>
                <img src="https://valenteweb.azureedge.net/$web/assets/cadamovimiento/cm05.png" className='' />
                <div className='flex flex-row flex-nowrap justify-left items-center'><MapPinIcon className='w-4 mr-2'/><p> Phoenix, Arizona</p></div>
                <div className='flex flex-row flex-nowrap justify-left items-center'><PhoneIcon className='w-4 mr-2'/><p>Phone 520 369-0755</p></div>
                <div className='flex flex-row flex-nowrap justify-left items-center'><AtSymbolIcon className='w-4 mr-2'/><p>email@gmail.com</p></div>
            </div>
    </div>
  )
}
