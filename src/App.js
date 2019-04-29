import React from 'react';
import logo from './logo.svg';
import './App.css';
import NamesList from './NamesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
        <NamesList listType = {"ul"} listOfNames = {["C#", "Java", "C++"]} />
        <NamesList listType = {"ol"} listOfNames = {["Python", "Basic", "Pascal"]} />
      </div>
    </div>
  );
}

export default App;
