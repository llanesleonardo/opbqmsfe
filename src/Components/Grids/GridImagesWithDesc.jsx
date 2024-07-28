import React from 'react'

export default function GridImagesWithDesc(props) {

  const {ValueContentList,numberBlocks} = props;
  console.log('numberBlocks',numberBlocks);
  return (
    <div className='flex flex-row justify-around flex-wrap items-center gap-10 py-10'>
      {ValueContentList.slice(0,numberBlocks).map((element,index) => 
            <div key={index} className='flex flex-col justify-around items-center max-w-60'>
              <img src={element.imgUrl} className='rounded'/>
              <h1 className='text-black py-2'>{element.title}</h1>
              <p className='text-black py-2'>{element.description}</p>
            </div>
      )
    }
    </div>
  )
}
