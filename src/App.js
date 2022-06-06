import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
