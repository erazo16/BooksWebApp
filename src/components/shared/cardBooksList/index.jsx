import React from 'react'
import style from "./style.module.css"
import { Tag } from 'antd'

import { FaRegCopy, FaRegCalendarAlt } from "react-icons/fa";

const CardBooksList = ({ data }) => {
  return (
    <div className={style.cardList}>
        <div className={style.containerImage}>
            <img src={data?.book["cover"]} />
        </div>

        <div className={style.containerInfo}>
        <Tag className="mt-4" color="#2db7f5">
          {data?.book["genre"]}
        </Tag>

        <h4 className='font-bold mt-3'>{data?.book["title"]}</h4>
        <small>{data?.book["author"]["name"]}</small>

        <div className="flex justify-around">
          <small className="flex items-center gap-2 mt-3 font-bold">
            Paginas: {data?.book["pages"]}
          </small>
          <small className="flex items-center gap-2 font-semibold mt-2">
            Año: {data?.book["year"]}
          </small>
        </div>

        </div>

    </div>
  )
}

export default CardBooksList