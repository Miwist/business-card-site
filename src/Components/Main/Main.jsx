import React from "react";
import Slider from "./Theme/Theme";
import cl from "./Main.module.scss";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";


const Main = () => {
  return (
    <div className={cl.Main}>
      <Slider />
      <AboutMe />
      <Portfolio />
      <Services />
    </div>
  );
};

export default Main;
