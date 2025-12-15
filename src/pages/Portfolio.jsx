import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import Accomplishments from '../components/Accomplishments';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Skills />
      <Accomplishments />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;