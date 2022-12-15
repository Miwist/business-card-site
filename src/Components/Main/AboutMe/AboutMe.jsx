import React, { useState } from "react";
import cl from "./AboutMe.module.scss";
import misha from "../../../img/Michail.jpeg";
const AboutMe = () => {
  const [skillOne, setSkillOne] = useState(0);
  const [skillTwo, setSkillTwo] = useState(0);
  const [skillThree, setSkillThree] = useState(0);
  const [skillFour, setSkillFour] = useState(0);
  const [skillFive, setSkillFive] = useState(0);
  const [skillSix, setSkillSix] = useState(0);
  const [width, setWidth] = useState(50);
  function showSkills() {
    setSkillOne(1);

    function showTwo() {
      setSkillTwo(1);
    }
    function showThree() {
      setSkillThree(1);
    }
    function showFour() {
      setSkillFour(1);
    }
    function showFive() {
      setSkillFive(1);
    }
    function showSix() {
      setSkillSix(1);
    }

    setTimeout(showTwo, 1000);
    setTimeout(showThree, 2000);
    setTimeout(showFour, 3000);
    setTimeout(showFive, 4000);
    setTimeout(showSix, 5000);
  }

  function skillUp() {
    setWidth(width + 10);
    if (width >= 100) {
      setWidth(0);
    }
  }

  setTimeout(showSkills, 1500);

  return (
    <div className={cl.AboutMe}>
      <div className={cl.title}>
        <h1>Обо мне</h1>
      </div>
      <div className={cl.AboutMe_About}>
        <div className={cl.description}>
          <h2>Привет, я Михаил</h2>
          <img src={misha} alt="misha" />
          <p>
            Мне 24 года, живу в Екатеринбурге, уже около года занимаюсь
            веб-разработкой. Использую HTML, CSS, JAVASCRIPT, Нацелен на
            красивый и качественный результат работы
          </p>
        </div>
        <div className={cl.skills}>
          <div className={cl.skills__hard}>
            <div className={cl.title}>
              <i className="ri-flask-line"></i>
              <h2>Знания</h2>
            </div>

            <div className={cl.skills__box} style={{ opacity: `${skillOne}` }}>
              <p>HTML</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className={cl.skills__box} style={{ opacity: `${skillTwo}` }}>
              <p>CSS/SCSS</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "80%" }}></div>
              </div>
            </div>
            <div
              className={cl.skills__box}
              style={{ opacity: `${skillThree}` }}
            >
              <p>JavaScript</p>
              <div className={cl.progress}>
                <div
                  className={cl.inProgress}
                  style={{ width: `${width}%` }}
                ></div>
              </div>
              <button type="button" onClick={skillUp}>
                Прокачать
              </button>
            </div>
            <div className={cl.skills__box} style={{ opacity: `${skillFour}` }}>
              <p>React</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className={cl.skills__box} style={{ opacity: `${skillFive}` }}>
              <p>СУБД</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "50%" }}></div>
              </div>
            </div>
           
          </div>
          <div className={cl.skills__soft}>
            <div className={cl.title}>
              <i className="ri-plant-line"></i> <h2>Увлечения</h2>
            </div>

            <div className={cl.skills__box} style={{ opacity: `${skillOne}` }}>
              <p>Музыка</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className={cl.skills__box} style={{ opacity: `${skillTwo}` }}>
              <p>Фильмы</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "101%" }}></div>
              </div>
            </div>
            <div
              className={cl.skills__box}
              style={{ opacity: `${skillThree}` }}
            >
              <p>Книги</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className={cl.skills__box} style={{ opacity: `${skillFour}` }}>
              <p>Прогулки</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className={cl.skills__box} style={{ opacity: `${skillFive}` }}>
              <p>Общение</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className={cl.skills__box} style={{ opacity: `${skillSix}` }}>
              <p>Реализация идей</p>
              <div className={cl.progress}>
                <div className={cl.inProgress} style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
