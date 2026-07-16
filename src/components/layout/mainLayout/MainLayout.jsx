import React from 'react';
import About from '../../../sections/about/About';
import Projects from '../../../sections/projects/Projects';
import Skills from '../../../sections/skills/Skills';
import Navbar from '../navbar/Navbar';
import Contact from '../../../sections/contact/Contact';
import HeroSection from '../../../sections/heroSection/HeroSection';
import Parcours from '../../../sections/parcours/Parcours';
import Footer from '../../../sections/footer/Footer';

function MainLayout() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Parcours />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default MainLayout;
