import React from "react";
import { Link } from "react-router-dom";
import NavbarLandingPage from "../components/NavbarLandingPage.js"
import BackToTopBtn from "../components/BackToTopBtn.js"


const Login = () => {
    return (
 <>
 <NavbarLandingPage /> 
 <BackToTopBtn /> 

        <div>Home</div>

        <Link to="/registration"> Registre-se </Link>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div name='SobreNos'>
            um monte de coisa sobre nós
        </div>

</>



    );
}

export default Login;