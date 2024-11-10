import React, { useState, useRef, useEffect } from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'

const App = () => {

  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
  const offset = 96; // Padding adjustment
  const pageYOffset = window.pageYOffset + offset;
  let newActiveSection = null;

  sections.current.forEach((section, index) => {
    const sectionOffsetTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    // Check if the adjusted scroll position is within this section's boundaries
    if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
      newActiveSection = section.id;
    }
  });

  // If no section is found (e.g., in "dead zones"), default to the first section
  if (!newActiveSection && sections.current.length > 0) {
    newActiveSection = sections.current[0].id;
  }

  setActiveSection(newActiveSection);
};

useEffect(() => {
  sections.current = document.querySelectorAll('[data-section]');
  window.addEventListener('scroll', handleScroll);

  // Set initial section as active on load
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className='container'>
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <main id="content">
        <section id="about" data-section aria-label="About me">
          <About />
        </section>
        <section id="experience" data-section aria-label="Experience">
          <Experience />
        </section>
        <section id="projects" data-section aria-label="Projects">
          <Projects  />
        </section>
      </main>
    </div>
  )
}

export default App