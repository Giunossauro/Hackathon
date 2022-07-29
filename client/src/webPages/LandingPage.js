import React from "react";
import NavbarLandingPage from "../components/NavbarLandingPage.js"
import BackToTopBtn from "../components/BackToTopBtn.js"
import SobreNosProjeto from "../components/SobreNosProjeto"
import SobreNosAlunos from "../components/SobreNosAlunos"
import Logo_Busca from "../components/Logo_Busca"

const LandingPage = () => {
    return (
        <>
            <NavbarLandingPage />

            <Logo_Busca />

            <h2 name='SobreNos' style={{ textAlign: "center", marginTop: "30vh" }}>
                Sobre Nós
                <hr style={{ width: "50%", color: "rgb(0, 94, 28)" }} />
            </h2>

            <SobreNosProjeto />
            <SobreNosAlunos />


            <BackToTopBtn />

        </>



    );
}

export default LandingPage;