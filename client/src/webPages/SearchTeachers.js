import React from "react";
import { Link, useLocation } from "react-router-dom"
import "../styles/Profile.css";
import Navbar from "../components/Navbar.js"
import ItensNavbarPerfil from "../components/ItensNavbarPerfil"
import CaracteristicasPerfil from "../components/CaracteristicasPerfil"
import CursosOferecidos from "../components/CursosOferecidosPerfil"
import ImgEdu from '../assets/Edu.png'

const SearchTeachers = () => {
    const location = useLocation();
    const user = location.state;
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
                        nome={user.username}
                        email={user.email}
                        contato={user.telefone}
                    />

                </div>

                <div className="InfoPerfil" >

                    <h1 name='Cursos'>
                        Cursos
                    </h1>

                    {user.cursos.map(curso => {
                        return (
                            <CursosOferecidos
                                curso={curso.nome}
                                avaliacao="5"
                                alunosFormados="50"
                                key={curso.id}
                            />
                        )
                    })}

                </div>


            </div>

        </>
    );
}

export default SearchTeachers;