import React from "react";
import { FaRegCopy, FaRegCalendarAlt } from "react-icons/fa";

import { PlusCircleFilled } from "@ant-design/icons";
import { MdDelete } from "react-icons/md";

import style from "./style.module.css";
import { Tag, Tooltip } from "antd";

export const CardsBooks = ({ data, addBookToList, list, deleteBookList }) => {
  return (
    <div className={`grid grid-cols-2 gap-1 ${style.card}`}>
      <div className={style.containerImage}>
        <img src={data?.book["cover"]} className="h-full" />
      </div>

      <div className=" w-full py-3 px-1">
        <h3 className="font-bold">{data?.book["title"]}</h3>
        <span className={style.nameAuthor}>{data?.book["author"]["name"]}</span>
        <p className="mt-2">{data?.book["synopsis"]}</p>

        <div className="flex justify-around">
          <p className="flex items-center gap-2 font-semibold mt-3">
            <FaRegCopy color="#99A3A4" /> {data?.book["pages"]}
          </p>
          <p className="flex items-center gap-2 font-semibold mt-2">
            <FaRegCalendarAlt color="#99A3A4" /> {data?.book["year"]}
          </p>
        </div>

        <Tag className="mt-4" color="#2db7f5">
          Genero: {data?.book["genre"]}
        </Tag>

        <div className="flex justify-end">
          {list ? (
            <Tooltip title="Eliminar de la lista">
              <MdDelete
                className={style.iconDelete}
                onClick={() => deleteBookList(data?.book["ISBN"])}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Agregar a la lista">
              <PlusCircleFilled
                className={style.icon}
                onClick={() => addBookToList(data?.book["ISBN"])}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};
