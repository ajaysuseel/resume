import React from "react";
import Navbar from './navbar';
import './home.css';
function HomePage(){
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="main-content"></div>
                <div className="sidebar-right"></div>
            </div>
            
        </div>
    );
}

export default HomePage;


