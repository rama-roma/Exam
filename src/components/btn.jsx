import React from 'react'

const Btn = ({text}) => {
  return (
    <button
  className="p-[20px] w-120 font-bold text-lg rounded-lg text-white"
  style={{
    background: "linear-gradient(200deg, #FFFFFF80, #00FFFF00)",
  }}
>
  {text}
</button>

  )
}

export default Btn