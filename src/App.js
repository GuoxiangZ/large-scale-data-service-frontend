import React from 'react';
import './App.css';
import DataDisplay from './dataDisplay';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Welcome to My React App</h1>
            <DataDisplay />
        </header>
    </div>
  );
}

export default App;
