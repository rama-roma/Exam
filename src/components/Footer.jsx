import React from 'react'
import img1 from '../assets/Frame 773.svg'
export default function Footer() {
  return (
    <div className='max-w-[1980px] m-auto bg-[#070B21] p-[20px]'>
    <footer className='max-w-[1300px] m-auto flex flex-col'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[white] text-[30px]'>ПОГРУЖЕНИЕ 1.0</h1>
        <img src={img1} alt="" />
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[white] w-80'>Политика конфиденциальности
© 2014 - 2022. Все права защищены</p>
       <ul className='flex items-center gap-[20px] text-[white]'>
        <li>о нас</li>
        <li>связаться с нами</li>
        <li>зарегистрироваться</li>
        <li>рекламодателям</li>
       </ul>
      </div>
    </footer>
    </div>
  )
}
