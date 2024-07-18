import { Button } from 'antd'
import React from 'react'
import style from "./style.module.css"

import imageEmpty from "../../../assets/empty.png"

export const EmptyComponent = ({text, show, textButton, redirect}) => {
  return (
    <div className={style.container}>
        <img src={imageEmpty} /> 
        <span>{text}</span>

        {show && (
            <button className={style.button} onClick={()=> redirect()}>{textButton}</button>
        )

        }
    </div>
  )
}
