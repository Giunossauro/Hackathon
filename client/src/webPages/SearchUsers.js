import React from "react";
import { Link, useLocation } from "react-router-dom"
import "../styles/Profile.css";
import Navbar from "../components/Navbar.js"
import ItensNavbarPerfil from "../components/ItensNavbarPerfil"
import CaracteristicasPerfil from "../components/CaracteristicasPerfil"
import CertificadosPerfil from "../components/CertificadosPerfil"
import ImgEdu from '../assets/Edu.png'

const SearchModules = () => {
    const location = useLocation();
    const user = location.state;
    console.log(user)
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
                        nome={user.username}
                        email={user.email}
                        contato={user.telefone}
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