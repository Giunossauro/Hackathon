import "../styles/LandingPageCSS.css";
import ImgEdu from '../assets/Edu.png'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { color } from "@mui/system";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";

const Logo= ()=>{
    return(
<>
<div className="LogoComImg">
  <img src={ImgEdu} alt="Edu cação" 
    style={{width:"15vh"}}
  ></img>
<b>Code Ocean</b> 


</div>

<div style={{textAlign:"center"}}>
<OutlinedInput
            id="outlined-adornment-weight"
           // value={values.weight}
           // onChange={handleChange('weight')}
            //endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            endAdornment={<InputAdornment position="end">
              <Link activeClass="active" to="/search" spy={true} smooth={true} duration={500} >
              <Button variant="text">🔍</Button>
                </Link>
              
              </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            variant="filled" 
            inputProps={{
              'aria-label': 'weight',
            }}
            style={{backgroundColor:"white", width:"50vw"}}
            size="small"
          />
</div>

<div style={{textAlign:"center", margin:"1vw", color:"#006064"}}>
<ButtonGroup variant="outlined" aria-label="outlined button group">
<Button variant="contained" >JavaScript</Button>
<Button variant="contained">Html</Button>
<Button variant="contained">CSS</Button>
<Button variant="contained">React</Button>
<Button variant="contained" >Python</Button>
<Button variant="contained" >Node.js</Button>
</ButtonGroup>

</div>

<div style={{textAlign:"center", marginTop:"20vh", color:"#006064"}}>
<Button variant="contained" style={{margin:"0 1vw"}} >
<Link to="/login" style={{textDecoration:"none"}}> Login </Link></Button>
<Button variant="contained" style={{margin:"0 1vw"}} >
<Link to="/registration" style={{textDecoration:"none"}}> Registre-se </Link></Button>


</div>



    

</>             
)
}


export default Logo