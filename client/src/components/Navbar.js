import React from "react";
import { Link } from "react-router-dom"
import "../styles/LandingPageCSS.css";


const Navbar= ()=>{
    return(

    <div className="navbar">

    <div className="itensNavbar">
    <Link to="/home" activeClass="active" 
    > CODE OCEAN </Link>
    </div>
    
{/*     <div className="itensNavbar"> 
    <Link to="/home"
    > Sobre Nós </Link>
    </div> */}

</div>

              
)
}


export default Navbar