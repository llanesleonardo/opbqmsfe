import React from 'react'
import ContactForm from "../../Components/Forms/ContactForm"
import DisplayInfo from "../../Components/MainContent/DisplayInfo";

export default function Contact(props) {

  const {cssObject,generalSettings } = props;
  const { title, subtitle,url,content,phone,email,address } = generalSettings;
  const {DisplayInfos, ContactForms} = cssObject;

  const info = {
    phone:phone,address:address,email:email
  };

  return (
    <div className='flex flex-row flex-wrap justify-around items-center gap-10 py-10'>
      <ContactForm ContactForms={ContactForms} title={title} subtitle={subtitle} content={content}/>
      <DisplayInfo DisplayInfos={DisplayInfos} content={info}/>
    </div>
  )
}
