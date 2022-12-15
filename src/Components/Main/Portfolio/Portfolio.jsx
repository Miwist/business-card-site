import React, { useState } from "react";
import cl from "./Portfolio.module.scss";
import work1 from "../../../img/work1.png";
import work2 from "../../../img/work2.png";
import work3 from "../../../img/work3.png";
import work4 from "../../../img/work4.png";
import work5 from "../../../img/work5.png";
import work6 from "../../../img/work6.png";
import work7 from "../../../img/work7.png";

const Portfolio = () => {
  const [offset, setOffset] = useState(900);
  const [openModal, setOpenModal] = useState(false)

function closeModal() {
  setTimeout(setOpenModal(false), 2000)
}

  function handleRightClick() {
    if (offset > -900) {
      setOffset(offset - 900);
    }
  }
  function handleLeftClick() {
    if (offset < 900) {
      setOffset(offset + 900);
    }
  }

  return (
    <div className={cl.portfolio}>
      <h2>Портфолио</h2>
      <div className={cl.portfolio_slider}>
        <i className="ri-arrow-left-s-line" onClick={handleLeftClick}></i>
        <div
          className={cl.slider_container}
          style={{ transform: `translateX(${offset}px)` }}
        >
          <div className={cl.portfolio_slider__item}>
            <img src={work1} alt="work1" />
          </div>
          <div className={cl.portfolio_slider__item}>
            <img src={work2} alt="work2" />
          </div>
          <div className={cl.portfolio_slider__item}>
            <img src={work3} alt="work3" />
          </div>
          <div className={cl.portfolio_slider__item}>
            <img src={work4} alt="work4" />
          </div>
          <div className={cl.portfolio_slider__item}>
        
            <img src={work5} alt="work5" />
          </div>
          <div className={cl.portfolio_slider__item}>
     
            <img src={work6} alt="work6" />
          </div>
          <div className={cl.portfolio_slider__item}> <img src={work7} alt="work7" /></div>
        </div>
        <i className="ri-arrow-right-s-line" onClick={handleRightClick}></i>
      </div>
      <button type="button" onClick={() => setOpenModal(true)}>ПОКАЗАТЬ БОЛЬШЕ</button>
      {openModal && <div className={cl.modal}><h2>Хотите посмотреть профиль github?</h2>
        <button type="button" onClick={closeModal}><a href="https://github.com/Miwist">перейти</a></button>
        <button type="button"onClick={() => setOpenModal(false)}>нет</button>
      </div>}
    </div>
  );
};

export default Portfolio;
