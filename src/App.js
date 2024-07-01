import React from 'react';
import './App.css';
import DataDisplay from './dataDisplay';
import Intro from './intro';
import Filter from './filter'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Intro/>
            <Filter/>
            <DataDisplay />
            
        </header>
    </div>
  );
}

export default App;
