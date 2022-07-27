import { Link, animateScroll as scroll } from "react-scroll";
import {NavbarLandingPageCSS} from "../styles/NavbarLandingPageCSS.css";


const NavbarLandingPage= ()=>{
    return(

    <div
    style={{display:"flex", justifyContent:"flex-end"}}
    >

    <div></div>
    <div className="pointer"
    > <Link activeClass="active" to="SobreNos" spy={true} smooth={true} duration={500} >Sobre nós</Link></div>
   

    </div>



              
)
}


export default NavbarLandingPage