import React from "react";
import { Link } from "react-scroll"
import "../styles/Profile.css";


const CertificadosPerfil= (props)=>{
    return(
<>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", margin:"1vh 0"}}>
        <div>{props.curso}</div>
        <div>Emissão: {props.date}</div>

    </div>
        
</>     
)
}


export default CertificadosPerfil