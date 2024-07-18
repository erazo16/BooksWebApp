import React from 'react'
import Banner from "../../assets/banner.png"
import style from "./style.module.css"

const Header = () => {
  return (
    <div className={`grid p-10 lg:grid-cols-2 md:text-center lg:text-start ${style.background} `}>
        <div className='flex items-center'>
            <div>
                <h1 className={style.title}>Encuentra tú</h1>
                <h1 className={style.titleTwo}>Proximo Libro</h1>
                <label className={style.subtitulo}>
                  Busca en una gran variedad de libros el que te llama mas la atención, agregalo a tu lista de lectura
                </label>
            </div>
        

        </div>
        <div className='flex justify-center'>
            <img src={Banner} alt='banner' />
        </div>
    </div>
  )
}

export default Header