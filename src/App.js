import React from 'react';
import './App.css';
import BarChart from './Components/NodeGroup-BarChart';
import AnimateTextStripes from './Components/Animate-TextStripes';
import Reveal from './Components/Reveal';

function App() {
  return (
    <div className="App">
      <AnimateTextStripes />
      <BarChart />
      <Reveal />
    </div>
  );
}

export default App;
