import React from 'react'
import img1 from '../assets/Rectangle 1125.svg'
export default function Section() {
  return (
    <section className='w-[1200px] h-130  bg-[#D9D9D91A] p-[20px] rounded-[30px] flex justify-between items-center border  border-[#ffffff6c]'>
        <div className='flex flex-col gap-[20px]' >
            <h1 className='text-[60px] font-bold text-[#03FFFF]'>03.</h1>
            <div className='flex flex-col items-start relative left-[60px]'>
                <h1 className='text-[60px] text-base/15 w-80 font-bold text-[#03FFFF]'>Обычный человек</h1>
                <p className='text-[white] w-80 text-[40px] font-bold'>который хочет освоить онлайн профессию</p>
            </div>
        </div>
        <div>
            <img className=' w-120' src={img1} alt="" />
        </div>
    </section>
  )
}
