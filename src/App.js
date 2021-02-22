import React, { useState } from "react";
import './App.css';
import './index.css';
import About from './components/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;