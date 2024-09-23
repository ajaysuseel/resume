import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from './components/Homepage/HomePage';
import About from './components/About/About';


function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}
export default App;
