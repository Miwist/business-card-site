import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Components/Main/AboutMe/AboutMe";
import Portfolio from "./Components/Main/Portfolio/Portfolio";
import Services from "./Components/Main/Services/Services";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="works" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
