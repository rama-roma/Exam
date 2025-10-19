import React from 'react'
import '../index.css'
import img1 from '../assets/IMAGEN.svg'
import Button from './Button'

export default function Header() {
  return (
    <header className='max-w-[1980px] m-auto'>
      <section className='sea hidden md:block'>
        <nav className='max-w-[1300px] m-auto flex justify-between items-center p-4'>
          <button>Ramziya</button>
          <div className='bg-[white] p-4 rounded-[20px] relative top-[-30px]'>
            <p className='font-bold text-[30px]'>Старт 20 января</p>
          </div>
          <button className='text-[#00FFFF] p-[10px] border border-[#00FFFF] w-30 text-center rounded-[5px]'>
            Поддержка
          </button>
        </nav>

        <div className='max-w-[1300px] m-auto flex flex-col items-center gap-[20px]'>
          <h1 className='z-0 text-[100px] text-[white] font-bold shadow-lg text-center'>
            ПОГРУЖЕНИЕ 1.0
          </h1>
          <img className='absolute' src={img1} alt='' />
          <div className='bg-[#ffffff20] p-[30px] border border-[#ffffff64] relative top-[300px] rounded-[30px] flex justify-between items-center gap-[30px]'>
            <div className='flex flex-col items-start gap-[10px]'>
              <h1 className='text-[white] text-[50px] font-bold'>
                Как зарабатывать от 2000 $ в месяц
              </h1>
              <p className='text-[white]'>
                на арбитраже трафика в соц сетях из любой точки мира.
              </p>
            </div>
            <Button text='ПРИНЯТЬ УЧАСТИЕ' />
          </div>
        </div>
      </section>


      <section className='sea block md:hidden px-4 py-6'>
        <nav className='flex justify-between items-center'>
          <button className='text-[#ffffff00] text-[18px] font-semibold'>Ramziya</button>
          <button className='text-[#00FFFF] border border-[#00FFFF] px-3 py-1 rounded-[5px] text-[12px]'>
            Поддержка
          </button>
        </nav>

        <div className='flex flex-col items-center mt-[50px] gap-[25px] text-center relative'>
          <h1 className='text-[36px] text-[white] font-bold leading-tight'>
            ПОГРУЖЕНИЕ 1.0
          </h1>
          <img
            className='w-300'
            src={img1}
            alt=''
          />
          <p className='text-[white] text-[14px] leading-[20px] px-2'>
            Как зарабатывать от 2000 $ в месяц <br />
            на арбитраже трафика из любой точки мира.
          </p>
          <Button text='ПРИНЯТЬ УЧАСТИЕ' />
          <div className='bg-[white] mt-[20px] rounded-[10px] px-4 py-2 inline-block'>
            <p className='font-bold text-[16px] text-[#000]'>Старт 20 января</p>
          </div>
        </div>
      </section>
    </header>
  )
}
