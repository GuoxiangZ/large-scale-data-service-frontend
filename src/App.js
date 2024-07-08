import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './filter';
import Table from './table';
import Intro from './intro';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Intro/>

    
        <Table />
      </header>
    </div>
  );
}

export default App;