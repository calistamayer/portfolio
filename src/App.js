import React, { useState } from "react";
import './App.css';
import './index.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  const [sections] = useState([
    {
      title: 'About',
    },
    {
      title: 'Portfolio',
    },
    {
      title: 'Contact',
    },
    {
      title: 'Resume',
    },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Navigation
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Navigation>
      <main>
        <Project></Project>
        <About></About>
      </main>
    </div>
  );
}

export default App;
