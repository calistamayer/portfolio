import React, { useState } from "react";
import './App.css';
import './index.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';

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
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
