import React from 'react'

export default function Button({text}) {
  return (
       <button class="px-6 py-3 font-bold text-[black] rounded-lg 
               bg-gradient-to-r from-[#03FFFF] via-[#03FFFFE0] via-[#03FFFF99] to-[#FFFFFF]
               shadow-[0_0_10px_#03FFFF,0_0_20px_#03FFFF,0_0_30px_#03FFFF]
               hover:shadow-[0_0_15px_#03FFFF,0_0_25px_#03FFFF,0_0_35px_#03FFFF]
               transition-all duration-300">
  {text}</button>
  )
}
