import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./assets/pages/About";
import Hero from "./assets/pages/Hero";
import Project from "./assets/pages/Project";
import Skills from "./assets/pages/Skills";
import Contact from "./assets/pages/Contact";



function App() {
  return (
    <>
      <About />
      <Hero />
     
      <Project />
      <Skills />
      <Contact />
      
    </>
  );
}

export default App;
