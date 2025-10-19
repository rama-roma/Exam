import React from 'react'

const Card3 = ({image, text}) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={image} alt="" />
      <h1 className='bg-[#00ffff58] p-[10px] w-94 rounded-b-[20px] text-center text-[white] text-[40px] font-bold'>{text}</h1>
    </div>
  )
}

export default Card3