import React from 'react';
import About from '../../../sections/about/About';
import Experience from '../../../sections/experience/Experience';
import Projects from '../../../sections/projects/Projects';
import Skills from '../../../sections/skills/Skills';
import Navbar from '../navbar/Navbar';
import Contact from '../../../sections/contact/Contact';
import HeroSection from '../../../sections/heroSection/HeroSection';

function MainLayout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default MainLayout;
