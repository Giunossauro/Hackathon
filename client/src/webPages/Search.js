import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
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
    
    const location = useLocation()
    const linguagem = location.state
    const [option, setOption] = useState(linguagem)
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    
    useEffect(() => {
        (async () => {
            try {
              // aqui vem o axios no lugar do fetch, embora o fetch ja funciona
              const response = await fetch(
                `http://localhost:3001/cursos`
              );
              if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                );
              }
              let actualData = await response.json();
              console.log(actualData.result)
              setData(actualData.result);
            } catch(err) {
              setData('');
            } 
          })();
        }, []);

        useEffect(() => {
          const filtered = data.filter(curso => curso.linguagem == option)
          setFilter(filtered)
        }, [option])
        

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

                    {filter.map(curso => {
                        return (
                            <div key={curso.id} className="caixa">
                                <h2>{curso.nome}</h2>
                                <p>{curso.linguagem}</p>
                                <p>{curso.categoria}</p>
                                <p>{curso.horastotais}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Search;