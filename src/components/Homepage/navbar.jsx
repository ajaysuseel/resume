import React from "react";
import {Link} from "react-router-dom"
import './navbar.css';
import profile from '../../assets/profile.jpg';

function Navbar(){
    return(
        <nav class="navbar">
           <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/goals">Goals</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/about">About</Link></li>
           </ul> 
           <img src={profile} alt="profile"></img>
        </nav>
    );
}

export default Navbar;