import { useEffect, useState } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.scss'
import Skills from './components/Skills'
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import ScrollToTopButton from './components/Scroll';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (

    <div>


      
      <ScrollToTopButton />
      <Header />
      <Home />
      <Project />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
