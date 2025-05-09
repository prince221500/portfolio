import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check user preference
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPrefersDark);
    
    // Add class for grid pattern
    document.documentElement.style.setProperty(
      '--grid-pattern', 
      'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)'
    );
    document.documentElement.style.setProperty('--grid-size', '20px');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App