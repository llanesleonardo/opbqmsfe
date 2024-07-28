import React from 'react'
import RoundedButton from "../Buttons/RoundedButton"

export default function Hero(props) {
    const {
        title,
        subtitle,
        content,
        link,
        linkContent,
        side,
        bgcolor,
        size,
        color,
        isButtonShown
     } = props;

    

    return (
    <div className={`${size} ${bgcolor} ${side} flex flex-row items-center py-5 px-5`}>
        <div className='container mx-auto' >
            <h1 className={`${color} text-3xl lg:text-8xl`}> 
               {title} 
            </h1>
            <h4 className={`${color} text-2xl lg:text-5xl`} >{subtitle}</h4>
            {isButtonShown === true ? (
            <RoundedButton 
                buttonColor="bg-white"
                buttonTextColor="text-blue"
                linkContent={linkContent}
                link={link}
                />
            ):(null)}
        </div>
    </div>
  )
}
