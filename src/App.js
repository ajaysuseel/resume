import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from './components/Homepage/HomePage';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Goals from './components/Goals/Goals';
import Login from './components/Login/Login';



function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/goals" element={<Goals/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default App;
