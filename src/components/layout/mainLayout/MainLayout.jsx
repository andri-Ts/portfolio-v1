import React from 'react';
import Hero from '../../../sections/Hero/Hero';
import About from '../../../sections/about/About';
import Experience from '../../../sections/experience/Experience';
import Projects from '../../../sections/projects/Projects';
import Skills from '../../../sections/skills/Skills';
import Navbar from '../navbar/Navbar';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}

export default MainLayout;
