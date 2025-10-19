import React from 'react'
const Card2 = ({image, text}) => {
  return (
    <div className='w-80 h-80 p-[20px] bg-[#ffffff24] border border-[#ffffff5a] rounded-[30px] flex flex-col items-center justify-center'>
        <img src={image} alt="" />
        <h1 className='text-center text-[white] text-[20px]'>{text}</h1>
    </div>
  )
}

export default Card2