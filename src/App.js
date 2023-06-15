import {React, useEffect} from 'react';
import './App.css'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Phil's Website"
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/projects/" element={ <Projects/> }/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
