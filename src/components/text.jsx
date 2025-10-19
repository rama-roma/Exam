import React from 'react'

const Text = ({text}) => {
  return (
          <h1 className="text-[80px] w-[600px] text-center font-bold text-white 
  bg-gradient-to-r from-[#03FFFF] via-[#03FFFFE0] to-[#03FFFF99] 
  bg-clip-text text-transparent 
  animate-pulse 
  drop-shadow-[0_0_10px_#03FFFF] text-base/15">
  {text}
</h1>

  )
}

export default Text