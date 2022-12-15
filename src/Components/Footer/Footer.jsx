import React from "react";
import cl from "./Footer.module.scss";
import coding from "../../img/coding.png";
import telegram from "../../img/telegram.png";
import whatsapp from "../../img/whatsapp.png";
import vk from "../../img/vk.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={cl.Footer} id="footer">
      <div className={cl.Footer_portfolio}>
        <div className={cl.Footer__logo}>
          <img src={coding} alt="coding" />
          <p>Портфолио Липовки Михаила</p>
        </div>
      </div>

      <div className={cl.Footer_description}>
        <nav className={cl.Footer__nav}>
          <a href="/">Главная</a>
          <Link to="about">Обо мне</Link>
          <Link to="works">Работы</Link>
          <Link to="services">Мои услуги</Link>
        </nav>

        <p>Все права защищены</p>

        <p>Developer - Michail Lipovka</p>
      </div>

      <div className={cl.Footer_contacts}>
        <div>
          <div className={cl.Footer_contacts__item}>
            <i className="ri-phone-line"></i>
            <p>+79963988513</p>
          </div>
          <div className={cl.Footer_contacts__item}>
            <i className="ri-mail-line"></i>
            <p>miwist@mail.ru</p>
          </div>
        </div>

        <div className={cl.Footer__icons}>
          <a href="https://t.me/miwist">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="https://vk.com/miwist">
      
            <img src={vk} alt="vk" />
          </a>
          <img src={whatsapp} alt="whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
