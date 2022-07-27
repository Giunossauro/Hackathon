import React from "react";
import { Link } from "react-router-dom";
import NavbarLandingPage from "../components/NavbarLandingPage.js"
import BackToTopBtn from "../components/BackToTopBtn.js"
import SobreNosProjeto from "../components/SobreNosProjeto"
import SobreNosAlunos from "../components/SobreNosAlunos"

const Login = () => {
    return (
 <>
 <NavbarLandingPage /> 

        <div>Home</div>

        <Link to="/registration"> Registre-se </Link>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div name='SobreNos'>
            um monte de coisa sobre nós
        </div>

        <SobreNosProjeto />
        <SobreNosAlunos />


        <BackToTopBtn /> 


</>



    );
}

export default Login;