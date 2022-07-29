import React from "react";
import { Link } from "react-router-dom"
import "../styles/Search.css";
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput'
import Navbar from "../components/Navbar.js"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Search = () => {
    return (
        <>

            <Navbar />

            <div className="cointeinerSearch">

                <div className="pesquisa">
                <FormControl style={{marginBottom:"5vh", color:"white"}} autocomplete="on">
                        <FormLabel id="demo-row-radio-buttons-group-label" style={{color:"white"}}>O quê deseja procurar?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="aluno" control={<Radio style={{color:"white"}}/>} label="Alunos" />
                            <FormControlLabel value="professor" control={<Radio style={{color:"white"}}/>} label="Professores" />
                            <FormControlLabel value="curso" control={<Radio style={{color:"white"}}/>} label="Cursos" />

                        </RadioGroup>
                    </FormControl>

                    <OutlinedInput
                          sx={{
                            width: "20vw",
                            maxWidth: '100%',
                          }}
                        id="outlined-adornment-weight"
                        // value={values.weight}
                        // onChange={handleChange('weight')}
                        placeholder="Search field"
                        endAdornment={<InputAdornment position="end"><Button variant="text">🔍</Button></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        variant="filled"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        style={{ backgroundColor: "white" }}
                        size="small"
                    />




                </div>

                <div className="resultado">

                    {/*                     <h2 className="Title">Resultados</h2> */}
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <p > info aqui </p>
                    </div>

                </div>


            </div>

        </>
    );
}

export default Search;