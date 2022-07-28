import { Link} from "react-scroll";
import React from "react";
import "../styles/LandingPageCSS.css";


const NavbarLandingPage= ()=>{
    return(

    <div className="navbar">

    <div className="itensNavbar" >
    <Link to="/home"> CODE OCEAN </Link>
    </div>
    
    <div className="itensNavbar"
    > <Link activeClass="active" to="SobreNos" spy={true} smooth={true} duration={500} >Sobre nós</Link></div>
    
   

    </div>



              
)
}


export default NavbarLandingPage