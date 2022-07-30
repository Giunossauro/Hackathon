import React from "react";
import { Link } from "react-router-dom"
import "../styles/Profile.css";


const CaracteristicasPerfil = (props) => {
    return (
        <>
            <img src={props.img}
                style={{ height: "140px", width: "140px" }}
                alt="Imagem perfil" />

            <div style={{ fontSize: "30px" }}>
                <b>{props.nome}</b>
            </div>

            <ul style={{ listStyleType: "none", padding: "0", textAlign: "left" }}>
                <li style={{ marginBottom: "3vh" }}>Email: {props.email}</li>
                <li style={{ marginBottom: "3vh" }}>Contato: {props.contato}</li>
            </ul>

        </>
    )
}


export default CaracteristicasPerfil