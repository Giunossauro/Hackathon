import React from "react";
import { Link, useLocation } from "react-router-dom"
import "../styles/Profile.css";
import Navbar from "../components/Navbar.js"
import ItensNavbarPerfil from "../components/ItensNavbarPerfil"
import CaracteristicasPerfilCurso from "../components/CaracteristicasPerfilCurso"
import CaracteristicasDoCurso from "../components/CaracteristicasDoCurso"
import CursosOferecidos from "../components/CursosOferecidosPerfil"
import ImgEdu from '../assets/Edu.png'
import axios from 'axios'

const SearchCursos = () => {
    const location = useLocation()
    const curso = location.state

    return (
        <>

            <Navbar />

            <div style={{ display: "flex" }}>

                <ItensNavbarPerfil
                    name="Ementa"
                />
                <ItensNavbarPerfil
                    name="Avaliacao"
                />

            </div>

            <div className="cointeinerSearch" >

                <div className="perfil"
                    style={{ color: "white" }}
                >
                    <CaracteristicasPerfilCurso
                        img={ImgEdu}
                        nome={curso.nome}
                        horario={`${curso.horastotais} horas`}
                        linguagem={curso.linguagem}
                        categoria={curso.categoria}
                        professor="Edu cação"
                    />

                </div>

                <div className="InfoPerfil" >



                    <CaracteristicasDoCurso
                        name="Ementa"
                        ementa="Acordar tarde | Apurando seu olfato | Treinando a visão ampla | A chave é a natação | Delicie-se com o seu humano"
                        avaliacao="5"
                        nAlunos="50"
                    />



                </div>


            </div>

        </>
    );
}

export default SearchCursos;