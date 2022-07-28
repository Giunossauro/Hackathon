import React from "react";
import { Link } from "react-router-dom";
import NavbarLandingPage from "../components/NavbarLandingPage.js"
import BackToTopBtn from "../components/BackToTopBtn.js"
import SobreNosProjeto from "../components/SobreNosProjeto"
import SobreNosAlunos from "../components/SobreNosAlunos"
import Logo from "../components/Logo"

const Login = () => {
    return (
 <>
 <NavbarLandingPage /> 

<Logo />
        

        
    <h2 name='SobreNos' style={{textAlign:"center", marginTop:"30vh"}}>
            Sobre Nós
        <hr style={{width:"50%", color:"rgb(0, 94, 28)"}}/>
            </h2>

        <SobreNosProjeto />
        <SobreNosAlunos />


        <BackToTopBtn /> 

        </>



    );
}

export default Login;