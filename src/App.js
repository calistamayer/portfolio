import React, { useState } from "react";
import './App.css';
import './index.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
