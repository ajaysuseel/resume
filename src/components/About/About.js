import React from "react"
import Navbar from '../Homepage/navbar';
import Card from "./card" 
import "./about.css"
import cards from './cards.js'

function createAbout(card){
    return(
        <Card
        key={card.id}
        image={card.image}
        alt={card.alt}
        footer={card.footer}
        link={card.link}
        user={card.user}
        />
    );
}
function About(){
    return(
        <div className="abouts">
            <Navbar/>
            <div className="card">
            {cards.map(createAbout)}
            </div>
        </div>
    );
}
export default About;