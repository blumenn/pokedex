import React from 'react';
import Pokedex from './modules/Pokedex';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import About from './modules/About';

 function App() {
    return (
        <BrowserRouter>
        <header>
          <nav>
            <div style={{display:'flex', justifyContent: 'space-evenly'}} class='links'>
            <Link to="/"> Pokedex</Link>
            <Link to="about"> About</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Pokedex/>} />
            <Route path="about" element={<About/>} />
          </Routes>
        </main>
        </BrowserRouter>
    )
}
export default App;
