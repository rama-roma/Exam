const Card = ({image, text1}) => {
  return (
    <div className="flex flex-col  gap-[10px] justify-center w-100 bg-[#ffffff0c] p-[10px] rounded-[30px]">
        <div className="flex flex-col items-center">
            <img className="rounded-[20px]" src={image} alt="" />
            <h1 className="text-[#03FFFF] text-center relative top-[-150px] text-[40px] font-bold">{text1}</h1>
        </div>
        <div className="flex items-center gap-[20px] mt-[-100px]">
            <h1 className="text-[white] font-bold text-[30px] ">16 блоков обучения</h1>
            <i className="fa-solid fa-arrow-right text-[white]"></i>
        </div>
        <div className="flex items-baseline gap-[20px]">
            <h1 className="bg-[#00FFFF] p-[10px] rounded-[100%]">1</h1>
            <p className="text-[white] text-[20px]">Подборка <span className="text-[#00FFFF]">самых полезных</span> статей за последние 4 года что бы все ваши пазлы в голове сложились полностью</p>
        </div>
        <div className="flex items-baseline gap-[20px]">
            <h1 className="bg-[#00FFFF] p-[10px] rounded-[100%]">2</h1>
            <p className="text-[white] text-[20px]"><span className="text-[#00FFFF]">Табличка с ценами</span> рекламодателей в разных гео</p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[#00FFFF] text-[20px]">Нет лимита</p>
            <h1 className="text-[60px] text-[white] line-through font-bold">35.000</h1>
            <h1 className="text-[80px] text-[white] font-bold">19.000</h1>
            <button className="text-[black] bg-[#00FFFF] p-[20px] w-80 text-[40px] rounded-[20px] font-bold">оплатить</button>
            <button className="text-[white] bg-[#ffffff1b] border border-[#ffffff73] p-[20px] w-80 text-[40px] rounded-[20px] font-bold">В расрочку</button>
        </div>
    </div>
  )
}

export default Card
