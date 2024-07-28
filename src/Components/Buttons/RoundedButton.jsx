import React from 'react'

export default function RoundedButton(props) {

    const {buttonColor,buttonTextColor, linkContent,link , action, pathId, handleClick} = props;
  //console.log(handleClick);
    
   
  
  return (
    <>
        <button className={`${buttonColor} ${buttonTextColor} rounded py-2 px-5 cursor-pointer`} onClick={()=> handleClick(link,action)}>{linkContent}</button>
    </>
  )
}
