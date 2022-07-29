import React from "react";
import { Link } from "react-router-dom"
import "../styles/Profile.css";
import Navbar from "../components/Navbar.js"
import ItensNavbarPerfil from "../components/ItensNavbarPerfil"
import CaracteristicasPerfil from "../components/CaracteristicasPerfil"
import CertificadosPerfil from "../components/CertificadosPerfil"
import ImgEdu from '../assets/Edu.png'

const SearchModules = () => {
    return (
        <>

            <Navbar />

            <div style={{ display: "flex" }}>
                <ItensNavbarPerfil
                    name="certificados"
                />
                <ItensNavbarPerfil
                    name="perfil"
                />

            </div>

            <div className="cointeinerSearch" >

                <div className="perfil"
                    style={{ color: "white" }}
                >
                    <CaracteristicasPerfil
                        img={ImgEdu}
                        nome="Edu Cação"
                        idade="Até 35 anos"
                        email="Educacao@CodeOcean.com"
                    />

                </div>

                <div className="InfoPerfil" >

                    <h1 name='certificados'>
                        Certificados
                    </h1>

                    <CertificadosPerfil
                        curso="Como comer humanos"
                        date="28/07/2022"
                    />

                </div>


            </div>

        </>
    );
}

export default SearchModules;