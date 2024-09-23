import React from "react";
import './navbar.css';
import profile from '../../assets/profile.jpg';
function Navbar(){
    return(
        <nav class="navbar">
           <ul>
                <li><a href="#goals">Goals</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About</a></li>
           </ul> 
           <img src={profile} alt="profile"></img>
        </nav>
    );
}

export default Navbar;