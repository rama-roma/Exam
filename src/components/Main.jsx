import React from 'react'
import Text from '../components/text'
import Section from './section'
import '../fontawesome-free-6.7.2-web/css/all.css'
import Btn from '../components/btn'
import img1 from '../assets/Frame 48096548.svg'
import Card from './card'
import img2 from '../assets/Rectangle 34624945 (1).svg'
import img3 from '../assets/Rectangle 34624945.svg'
import img4 from '../assets/Rectangle 34624946.svg'
import Product from './product'
import Button from '@mui/material/Button'
import img5 from '../assets/01.svg'
import img6 from '../assets/02.svg'
import img7 from '../assets/03.svg'
import img8 from '../assets/04.svg'
import img9 from '../assets/5.svg'
import img10 from '../assets/6.svg'
import Card2 from './card2'
import img11 from '../assets/Sign_+.svg'
import Card3 from './card3'
import img12 from '../assets/Mask group.svg'
import img13 from '../assets/Mask group (1).svg'
import img14 from '../assets/Mask group (2).svg'
import img15 from '../assets/Mask group (3).svg'
import img16 from '../assets/Mask group (4).svg'
import img17 from '../assets/Mask group (5).svg'
import img18 from '../assets/Speaker_01.svg'
import img19 from '../assets/Speaker_02.svg'
import AccordionUsage from './accordion'



export default function Main() {
  return (
    <main className='max-w-[1980px] m-auto bg-[#070B21] p-[20px]'>
      <section className='mt-30 max-w-[1300px] m-auto flex flex-col gap-[40px] items-center'>
        <Text text="это для тебя, если ты:"/>
        <div className='flex justify-center'>
          <Section/>
        </div>
      </section>

      <section className='mt-30 max-w-[1400px] m-auto flex flex-col items-center gap-[40px]'>
        <Text text="по итогу курса ты научишься:"/>
        <Product/>
      </section>


      <section className='mt-30 max-w-[1300px] m-auto flex flex-col items-center gap-[40px]'>
        <Text text="программа курса:"/>
        <div className='w-[1200px] m-auto h-auto p-[20px] bg-[#D9D9D91C] rounded-[20px] flex flex-col items-center gap-[20px]'>
          <article className='w-[1200px] flex justify-between items-center'>
            <div className='w-[50%] bg-[#378FA4] p-[10px] rounded-[20px] flex items-baseline gap-[20px] justify-between'>
              <h1 className='text-[60px] font-bold text-[#00FFFF]'>01</h1>
              <div className='flex flex-col items-start gap-[20px]'>
                <h1 className='text-[40px] text-[#00FFFF] font-bold'>Что такое арбитраж трафика?</h1>
                <p className='text-[#B2FF51] font-bold'>В этом уроке вы узнаете:</p>
              </div>
            </div>
            <div className='w-[50%] h-52 bg-[#5069D8] p-[10px] rounded-[20px] flex items-baseline gap-[20px] justify-between'>
              <h1 className='text-[60px] font-bold text-[#00FFFF]'>02</h1>
              <div className='flex flex-col items-start gap-[20px] text-[white]'>
                <h1 className='text-[40px]  font-bold'>Результат</h1>
                <p className=' font-bold'>Узнаешь что такое арбитраж трафика и сможешь выбрать страны, с которыми будешь работать исходя из своего бюджета.</p>
              </div>
            </div>
          </article>
          <article className='w-[1200px] m-auto flex flex-col justify-center items-start gap-[10px]'>
            <h1 className='text-[30px] text-[#B2FF51] font-bold'>Продолжительность: <span className='text-[white]'>40 мин</span></h1>
            <div className='border border-[#B2FF51] h-10 ml-[9px]'></div><br />
            <div className='flex items-center gap-[10px] ml-[2px] mt-[-10px] text-[20px]'>
              <i className='fa-solid fa-circle text-[white]'></i>
              <p className='font-bold text-[#B2FF51]'>Что такое арбитраж трафика в социальных сетях;</p>
            </div>
            <div className='flex items-center gap-[10px] ml-[2px] text-[20px]'>
              <i className='fa-solid fa-circle text-[white]'></i>
              <p className='font-bold text-[white]'>Механика работы простыми словам;</p>
            </div>
            <div className='flex items-center gap-[10px] ml-[2px] text-[20px]'>
              <i className='fa-solid fa-circle text-[white]'></i>
              <p className='font-bold text-[white]'>Участники рынка;</p>
            </div>
            <div className='flex items-center gap-[10px] ml-[2px] text-[20px]'>
              <i className='fa-solid fa-circle text-[white]'></i>
              <p className='font-bold text-[white]'>Модели продаж <span className='text-[#B2FF51]'> (CPL, CPA, CPS, Revshare);</span></p>
            </div>
            <div className='flex items-center gap-[10px] ml-[2px] text-[20px]'>
              <i className='fa-solid fa-circle text-[white]'></i>
              <p className='font-bold text-[white]'>Навыки и принципы мышления нужные для получения результата;</p>
            </div>
            <div className='flex items-center gap-[10px] ml-[2px] text-[20px]'>
              <i className='fa-solid fa-circle text-[white]'></i>
              <p className='font-bold text-[white]'>Актуальный бюджет для рекламы в разных странах.</p>
            </div>
          </article>
        </div>
        <Btn text="Открыть всю программу курса"/>
      </section>

      <section className='mt-20 max-w-[1300px] m-auto flex flex-col items-center justify-center'>
        <div className='w-[1200px] m-auto flex items-center'>
          <article className='w-[50%] h-50  rounded-[20px] justify-between bg-gradient-to-l from-[#BAA6FF] to-[#BAA6FF00] p-[20px] flex flex-col items-start gap-[20px]'>
            <div className='flex items-center justify-between gap-[30px]'>
              <img src={img1} alt="" />
              <p className='text-[#BAA6FF] text-[40px] font-bold'>Бонусный блок</p>
            </div>
          <div className='flex items-center gap-[10px]'>
            <p className='text-[20px] font-bold text-[#B2FF51]'>Уроки</p>
            <i className='fa-solid fa-arrow-right text-[#B2FF51]'></i>
          </div>
          </article>
          <article className='w-[50%] h-50 rounded-[20px] justify-between bg-gradient-to-b from-[#00FFFF] to-[#6141D4] p-[20px] flex flex-col items-start gap-[20px]'>
            <h1 className='text-[white] text-[40px] font-bold'>Результат</h1>
            <p className='text-[white]  w-60'>Научишься искать чужие связки и зарабатывать вместе с китами рынка</p>
          </article>
        </div><br /><br />
        <Btn text="подробнее о бонусном  блоке"/>
      </section>

      <section className='mt-30 max-w-[1300px] m-auto flex flex-col items-center gap-[20px] p-[20px]'>
        <Text text="тарифы:"/> <br />
        <button className='text-[70px] flex justify-center text-[white] font-bold w-90 border border-[#ffffff67] shadow-2xl bg-[#ffffff1f] p-[20px] rounded-[20px]'>00 <span className='text-[#00FFFF]'>:</span> 00 <span className='text-[#00FFFF]'>:</span> 25</button>
        <div className='max-w-[1300px] m-auto flex items-start gap-[30px] justify-between'>
           <Card image={img2} text1="Батискаф для погружения"/>
           <Card image={img3} text1="Батискаф для погружения"/>
           <Card image={img4} text1="Байкал на минималках"/>
        </div>
      </section>

      <section className='sea1'>
      <section className='mt-30 max-w-[1300px] m-auto flex flex-col items-center gap-[20px] p-[20px]'>
        <h1 className='text-[white] font-bold text-[60px] text-center w-190'><span className='text-[#00FFFF]'> Возникли проблемы </span>с оплатой?напиши в чат поддержки погружения.</h1>
        <button className='bg-[#28C7CF] p-[10px] w-120 text-center text-[40px] font-bold rounded-[20px] h-30'>поддержка</button>
      </section>
      </section>

      <section className='relative top-[-300px] bg-[#254E65] w-[1200px] m-auto h-auto  rounded-[30px] flex justify-between'>
        <div className='w-[70%] p-[20px] flex flex-col items-start gap-[20px]'>
          <h1 className='text-[white] font-bold text-[90px]'>можно платить частями</h1>
          <Btn text="Оформить рассрочку"/>
        </div>
        <div className='w-[30%] bg-[#1E5B70] p-[20px] rounded-[20px] flex flex-col items-start gap-[10px]'>
          <div className='flex items-baseline gap-[10px]'>
            <i className='fa-solid fa-circle text-[white]'></i>
            <p className='text-[white] text-[20px] font-bold'>Без процентов на 3,6 и 12 месяцев</p>
          </div>
          <div className='flex items-baseline gap-[10px]'>
            <i className='fa-solid fa-circle text-[white]'></i>
            <p className='text-[white] text-[20px] font-bold'>Первый взнос только через месяц сейчас не чего не платите</p>
          </div>
          <div className='flex items-baseline gap-[10px]'>
            <i className='fa-solid fa-circle text-[white]'></i>
            <p className='text-[white] text-[20px] font-bold'>Возможно только для граждан России</p>
          </div>
          <div className='flex items-baseline gap-[10px]'>
            <i className='fa-solid fa-circle text-[white]'></i>
            <p className='text-[white] text-[20px] font-bold'>По паспорту, 18+ с Снг и Крымом Банк не работает</p>
          </div>
        </div>
      </section>

      <section className='relative top-[-100px] max-w-[1300px] m-auto flex flex-col items-center'>
        <Text text="Как проходит обучение:"/><br /><br />
        <div className='flex flex-wrap items-center justify-center gap-[40px]'>
            <Card2 image={img5} text="Получаете обучающий материал"/>
            <Card2 image={img6} text="Регистрируетесь на нужных для работы ресурсах"/>
            <Card2 image={img7} text="Получаете все платные инструменты для работы (1-2 месяца )"/>
            <Card2 image={img8} text="Начинаете тестировать свои первые офферы"/>
            <Card2 image={img9} text="Задаете вопросы нашим специалистам"/>
            <Card2 image={img10} text="Зарабатываете деньги"/>
        </div>
      </section>
    
      <section className=' max-w-[1300px] m-auto flex flex-col items-center gap-[20px]'>
        <Text text="Какие плюсы быть на обученние:"/>
        <article className='flex flex-col items-start gap-[20px]'>
        <div className='flex items-center gap-[20px]'>
          <img src={img11} alt="" />
          <h1 className='text-[white] text-[30px]'>Лучший на рынке обучающий материал по арбитражу от экспертов</h1>
        </div>
        <div className='flex items-center gap-[20px]'>
          <img src={img11} alt="" />
          <h1 className='text-[white] text-[30px]'>Доступ в нашу партнерскую программу где ставки на товары выше на 100%. Ставка если вы не были на обучение Италия-20$ Ставка если вы были на обучение и имеете куколд Италия-40$</h1>
        </div>
        <div className='flex items-center gap-[20px]'>
          <img src={img11} alt="" />
          <h1 className='text-[white] text-[30px]'>Доступ ко всем платным инстурментам на 1-2 месяца (Трекер, Автозалив, Антидетект браузер) (Стоимость 500$ в месяц) Стоимость для участников курса 0$ (1-2 месяца)</h1>
        </div>
        <div className='flex items-center gap-[20px]'>
          <img src={img11} alt="" />
          <h1 className='text-[white] text-[30px]'>Возможность попасть в нашу команду, так как по этому материалу мы обучаем своих сотрудников</h1>
        </div>
        </article>
        <article className='flex justify-center'>
          <button className='p-[20px] text-[30px] rounded-[20px] bg-[#00FFFF] font-bold w-[400px]'>принять участие</button>
        </article>
      </section>

      <section className='mt-30 max-w-[1300px] m-auto flex flex-col justify-center gap-[20px] items-center'>
        <Text text="Истории наших учеников"/><br />
        <div className='flex flex-wrap justify-center items-center gap-[20px]'>
          <Card3 image={img12} text="Семкив"/>
          <Card3 image={img13} text="Юсупов"/>
          <Card3 image={img14} text="Арсений"/>
          <Card3 image={img15} text="Лерка"/>
          <Card3 image={img16} text="Серега"/>
          <Card3 image={img17} text="Саня Тай"/>
        </div>
      </section>


      <section className='mt-30 max-w-[1300px] m-auto flex flex-col items-center gap-[20px]'>
        <Text text="Спикеры курса:"/>
        <div className='flex justify-between items-baseline'>
          <article className='flex flex-col items-center'>
            <img className='w-200' src={img18} alt="" />
            <div className='w-100 h-60 border border-[#ffffff30] rounded-[20px] flex flex-col items-center'>
              <h1 className='text-[white] text-[40px] font-bold rounded-t-[20px] bg-[#203257] p-[10px] w-100 text-center'>Евгений</h1>
              <div className='bg-[#084A53] rounded-b-[20px] p-[10px] flex flex-col items-start gap-[20px]'>
                <p className="text-[white]">В арбитраже с 2019 года,  был тимлидом в 2-х крупных командах </p>
                <p className="text-[white]">Cовладелец Crazy Profits Agency</p>
                <p className='text-[white]'>Создатель паблика  «Жёлтый веб»</p>
              </div>
            </div> 
          </article>

        <article className='flex flex-col items-center'>
            <img className='w-120' src={img19} alt="" />
            <div className='w-100 h-60 border border-[#ffffff30] rounded-[20px] flex flex-col items-center'>
              <h1 className='text-[white] text-[40px] font-bold rounded-t-[20px] bg-[#203257] p-[10px] w-100 text-center'>Даниил</h1>
              <div className='bg-[#084A53] rounded-b-[20px] p-[10px] flex flex-col items-start gap-[20px]'>
                <p className="text-[white]">В арбитраже с 2019 года,  был тимлидом в 2-х крупных командах </p>
                <p className="text-[white]">Cовладелец Crazy Profits Agency</p>
                <p className='text-[white]'>Создатель паблика  «Жёлтый веб»</p>
              </div>
            </div> 
          </article>
        </div>
      </section>


      <section className='mt-30 max-w-[1300px] m-auto flex flex-col items-center gap-[20px]'>
        <Text text="Ответы на вопросы"/>
        <AccordionUsage/>

        <Button variant='contained' sx={{padding:'20px', width:"400px"}}>принять участие</Button>
      </section>
    </main>
  )
}
  