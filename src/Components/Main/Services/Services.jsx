import React from "react";
import cl from "./Services.module.scss";

const Services = () => {
  return (
    <div className={cl.services} >
      <h2>Мои услуги</h2>
      <div className={cl.services_container}>
        <div className={cl.services_box}>
          <div className={cl.services_box__item}>
            <h3>Услуги</h3> <h4>Вёрстка макета сайта</h4>
            <p>
              Красивый дизайн и интерактивность, это моя личная цель для каждого
              проекта
            </p>
          </div>
          <div className={cl.contacts_box__item}>
            <h3>Контакты</h3>
            <div className={cl.phone}>
              <i className="ri-phone-line"></i>
              <p>+79963988513</p>
            </div>
            <div className={cl.mail}>
              <i className="ri-mail-line"></i>
              <p>miwist@mail.ru</p>
            </div>
          </div>
        </div>
        <div className={cl.services_form}>
          <h3>Оставить заявку</h3>
          <input type="text" placeholder="Введите ваше имя..." />
          <input type="text" placeholder="Введите ваш email..." />
          <textarea name="text" id="" cols="30" rows="10" placeholder="Напишите сообщение..."></textarea>
          <button type="submit">отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
