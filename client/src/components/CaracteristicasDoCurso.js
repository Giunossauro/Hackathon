import React from "react";
import { Link } from "react-scroll"
import "../styles/Profile.css";


const CaracteristicasDoCurso = (props) => {

    return (
        <>
            <h1 name={props.name}>
                {props.name}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "1vh 0" }}>
            <p>{props.avaliacao} ⭐ | N° de  alunos: {props.nAlunos}</p>
                <p>{props.ementa}</p>
            </div>


        </>
    )
}


export default CaracteristicasDoCurso