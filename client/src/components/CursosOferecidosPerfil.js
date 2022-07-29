import React from "react";
import { Link } from "react-scroll"
import "../styles/Profile.css";


const CursosOferecidos= (props)=>{
 
    return(
<>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", margin:"1vh 0"}}>
        <div>{props.curso}</div>
        <div>Avaliação: {props.avaliacao} ⭐</div>
        <div>N° de alunos formados: {props.alunosFormados}</div>

    </div>
        
</>     
)
}


export default CursosOferecidos