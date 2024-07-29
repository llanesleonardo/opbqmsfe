import React from 'react'
import RoundedButton from "../Buttons/RoundedButton"
import { useNavigate } from "react-router-dom";
export default function Hero(props) {
    const {
        title,
        subtitle,
        content,
        link,
        linkContent,
        cssObject,
        isButtonShown
     } = props;

    const navigate = useNavigate();
     const handleClick = async (link, action) => {
        navigate(`${link}`);
      };
    
    

    return (
    <div className={`${cssObject.size} ${cssObject.bgcolor} ${cssObject.side} flex flex-row items-center py-5 px-5`}>
        <div className='container mx-auto' >
            <h1 className={`${cssObject.color} text-3xl lg:text-8xl`}> 
               {title} 
            </h1>
            <h4 className={`${cssObject.color} text-2xl lg:text-5xl`} >{subtitle}</h4>
            {isButtonShown === true ? (
            <RoundedButton 
                key={title}
                buttonColor={cssObject.buttonColor}
                buttonTextColor={cssObject.buttonTextColor}
                linkContent={linkContent}
                link={link}
                action={`navigate`}
                handleClick={handleClick}
                />
            ):(null)}
        </div>
    </div>
  )
}
