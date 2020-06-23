import React from "react";
import NavBar from "./components/NavBar/NavBar";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <BurgerMenu />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
