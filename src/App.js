import React from 'react';
import './App.css'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> }/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
