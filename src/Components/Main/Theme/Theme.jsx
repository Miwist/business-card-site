import React, { useState } from "react";
import cl from "./Theme.module.scss";
import telegram from "../../../img/telegram.png";
import whatsapp from "../../../img/whatsapp.png";
import vk from "../../../img/vk.png";
import code1 from "../../../img/code1.jpg";

const Theme = () => {
  const [turn, setTurn] = useState(45);

  function turnLeft() {
    setTurn(turn - 45);
  }

  function turnRight() {
    setTurn(turn + 45);
  }

  return (
    <div className={cl.theme}>
      <i className="ri-arrow-left-s-line" onClick={turnLeft}></i>
      <div className={cl.theme_box}>
        <div className={cl.theme_item}>
          <div
            className={cl.theme_item__square}
            style={{ transform: `rotate(${turn}deg)` }}
          >
            <img
              src={code1}
              alt="code1"
              style={{ transform: `rotate(-${turn}deg)` }}
            />
          </div>
        </div>

        <div className={cl.theme_item__icons}>
          <a href="https://t.me/miwist">
            <img src={telegram} alt="telegram" />
          </a>
          <img src={whatsapp} alt="whatsapp" />
          <a href="https://vk.com/miwist">
            <img src={vk} alt="vk" />
          </a>
        </div>
      </div>
      <i className="ri-arrow-right-s-line" onClick={turnRight}></i>
    </div>
  );
};

export default Theme;
