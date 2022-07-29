import React from "react";
import { Link } from "react-scroll"
import "../styles/Profile.css";


const itensNavbarPerfil= (props)=>{
    return(

    <div className="profileNavbar">
        <Link 
        to="certificados" spy={true} smooth={true} duration={500} 
        > {props.name} </Link>
    </div>
    
              
)
}


export default itensNavbarPerfil