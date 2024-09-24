import React,{useEffect,useRef} from "react";
import Typed from 'typed.js';
import Navbar from './navbar';
import './home.css';

import homepage from '../../assets/home.jpg';

function HomePage(){
    const typedElement=useRef(null);
    const typedInstance=useRef(null);

    useEffect(()=>{
        typedInstance.current=new Typed(typedElement.current,{
            strings:["Hello Everyone I am Ajay Suseel!"],
            typespeed:100000,
            backspeed:90000,
            loop:true
        });

        return ()=>{
            typedInstance.current.destroy();
        };
    },[]);
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="main-content">

                    <h1>
                        <span ref={typedElement}></span>
                    </h1>
                    
                    <p>I am an AI/ML enthusiast and is also interested in Web development.</p>
                    <p>My area of interest involves Time Series analysis for disaster prediction and Natural LAnguage Processing</p>
                    <img src={homepage} alt="homepage"/>
                </div>
                <div className="sidebar-right"></div>
            </div>
            
        </div>
    );
}

export default HomePage;


