import React from "react";
import { Link } from "react-router-dom"
import "../styles/Profile.css";
import Navbar from "../components/Navbar.js"
import ItensNavbarPerfil from "../components/ItensNavbarPerfil"
import CaracteristicasPerfil from "../components/CaracteristicasPerfil"
import CursosOferecidos from "../components/CursosOferecidosPerfil"
import ImgEdu from '../assets/Edu.png'

const SearchTeachers = () => {
    return (
        <>

            <Navbar />

            <div style={{ display: "flex" }}>
                <ItensNavbarPerfil
                    name="Cursos"
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
                        nome="Edu Cação Professor"
                        idade="Até 35 anos"
                        email="Educacao@CodeOcean.com"
                    />

                </div>

                <div className="InfoPerfil" >

                    <h1 name='Cursos'>
                        Cursos
                    </h1>

                    <CursosOferecidos
                        curso="Como comer humanos"
                        avaliacao="5"
                        alunosFormados="50"
                    />
                    <CursosOferecidos
                        curso="Web Full Stack"
                        avaliacao="4"
                        alunosFormados="30"
                    />
                    <CursosOferecidos
                        curso="Forme sua cabeça: uma visão ampla"
                        avaliacao="3"
                        alunosFormados="5"
                    />

                </div>


            </div>

        </>
    );
}

export default SearchTeachers;