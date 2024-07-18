import { Button } from "antd";
import React from "react";
import style from "./style.module.css";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const linkToPage = () => navigate("/list-books");

  return (
    <div className="flex justify-between px-8 py-4">
      <h2 onClick={()=> navigate("/")} className="font-bold cursor-pointer">Libros</h2>

            <Button onClick={linkToPage} className={style.button}>
                Lista de lectura
            </Button>
    </div>
  );
};

export default Nav;
