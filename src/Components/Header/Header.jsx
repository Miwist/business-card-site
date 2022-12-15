import React from "react";
import cl from "./Header.module.scss";
import coding from "../../img/coding.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={cl.Header}>
      <div className={cl.Header_contacts}>
        <img src={coding} alt="coding" />
        <i className="ri-phone-line"></i>
        <p>+79963988513</p>
        <i className="ri-mail-line"></i>
        <p>miwist@mail.ru</p>
      </div>
      <nav className={cl.Header_nav}>
        <a href="/">Главная</a>
        <Link to="about">Обо мне</Link>
        <Link to="works">Работы</Link>
        <Link to="services">Мои услуги</Link>
      </nav>
    </div>
  );
};

export default Header;
