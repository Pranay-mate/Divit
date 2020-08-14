import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Interests from './components/Interests';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Experience />
      <Skills />

      <Projects />
      <Interests />
      <ContactInfo />
    </div>
  );
}

export default App;
