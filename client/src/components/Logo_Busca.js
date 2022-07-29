import "../styles/LandingPageCSS.css";
import ImgEdu from '../assets/Edu.png'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CarroselLandingPage from '../components/CarroselLandingPage.js'
import { Link } from "react-router-dom";

// import { useState, createContext } from 'React'

// const [option, setOption] = useState('')
// const optionContext = createContext({option, setOption})

const Logo = () => {


  return (
    <>
      <div className="LogoComImg" >
        <img src={ImgEdu} alt="Edu cação"
          style={{ width: "15vh" }}
        ></img>
        <b>Code Ocean</b>

      </div>
      <h2 style={{ textAlign: "center" }}>Mergulhe no mundo da programação</h2>
      <CarroselLandingPage />


      <div style={{ textAlign: "center", color: "rgb(4, 61, 92)" }} className="classeAleatoria">
        Escolha o seu curso e começa já!
      </div>

      <div style={{ textAlign: "center", margin: "1vw", color: "#006064" }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button variant="contained">
             <Link activeClass="active" to="/search" state="javascript" spy={true} style={{textDecoration:"none", color:"white"}}>
            JavaScript
          </Link></Button>
          <Button variant="contained">      
              <Link activeClass="active" to="/search" state="html" spy={true} style={{textDecoration:"none", color:"white"}}>
            Html+CSS
          </Link></Button>
          <Button variant="contained">        
            <Link activeClass="active" to="/search" state="react" spy={true} style={{textDecoration:"none", color:"white"}}>
            React
          </Link></Button>
          <Button variant="contained">    
                <Link activeClass="active" to="/search" state="node" spy={true} style={{textDecoration:"none", color:"white"}}>
            Node.js
          </Link></Button>
          <Button variant="contained">      
              <Link activeClass="active" to="/search" state="programacao" spy={true} style={{textDecoration:"none", color:"white"}}>
            Iniciante? Comece aqui
          </Link></Button>
        </ButtonGroup>


      </div>

      <div style={{ textAlign: "center", marginTop: "15vh" }}>
        <Button variant="contained" style={{ margin: "0 1vw" }} >
          <Link to="/login" style={{textDecoration:"none", color:"white"}}> Login </Link></Button>
        <Button variant="contained" style={{ margin: "0 1vw" }} >
          <Link to="/registration" style={{textDecoration:"none", color:"white"}}> Registre-se </Link></Button>


      </div>





    </>
  )
}


export default Logo