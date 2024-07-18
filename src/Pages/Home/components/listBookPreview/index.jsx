import React from "react";
import {useSelector } from "react-redux";
import CardBooksList from "../../../../components/shared/cardBooksList";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ListBookPreview = () => {
    const navigate = useNavigate()
  const { bookList } = useSelector((state) => state.books);

  return (
    <div className="px-8 mt-10 mb-16">
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-cyan-950 mb-4">Tú lista de lectura</h2>
            {bookList.length > 3 &&
            <span onClick={()=> navigate("/list-books")} className="flex items-center gap-2 cursor-pointer">Ver todo <FaArrowRight /></span>
            }
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {bookList.slice(0, 3).map((item, index) => (
          <CardBooksList data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListBookPreview;
