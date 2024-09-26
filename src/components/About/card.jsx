import React from "react"
import './card.css'
function Card(props)
{
    return(
        <div className="cards">
            <img src={props.image} alt={props.alt}/>
            <h2>{props.footer}</h2>
            <a href={props.link}>{props.user}</a>
        </div>
    );
}
export default Card;