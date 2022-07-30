import React from "react";
import { Link } from "react-router-dom"
import "../styles/Profile.css";


const CaracteristicasPerfilCurso = (props) => {
    return (
        <>
            <img src={props.img}
                style={{ height: "140px", width: "140px" }}
                alt="Imagem perfil" />

            <div style={{ fontSize: "30px" }}>
                <b>{props.nome}</b>
            </div>

            <ul style={{ listStyleType: "none", padding: "0", textAlign: "left" }}>
                <li style={{ marginBottom: "3vh" }}>Professor(a): {props.professor}</li>
                <li style={{ marginBottom: "3vh" }}>Horário: {props.horario}</li>
                <li style={{ marginBottom: "3vh" }}>Linguagem: {(props.linguagem).toUpperCase()}</li>
                <li style={{ marginBottom: "3vh" }}>Categoria: {(props.categoria).toUpperCase()}</li>
            </ul>

        </>
    )
}


export default CaracteristicasPerfilCurso