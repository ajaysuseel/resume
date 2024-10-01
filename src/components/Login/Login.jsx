import React from "react"
import './login.css'
function Login(){
    return(
        <div className="login">
            <form className="form">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button type="button">Login</button>
            </form>
        </div>
        
    );
}

export default Login;