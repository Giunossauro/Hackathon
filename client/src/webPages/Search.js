import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import "../styles/Search.css";
import ProcuraSearch from "../components/ProcuraSearch.js"
import ResultadoSearch from "../components/ResultadoSearch.js"
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput'
import Navbar from "../components/Navbar.js"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button'

const Search = () => {

    const location = useLocation()
    const linguagem = location.state
    const [option, setOption] = useState(linguagem)
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)

    const [divProcuraBarra, setDivProcuraBarra] = useState(true);
    const [divProcuraBtn, setDivProcuraBtn] = useState(false);

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
            } catch (err) {
                setData('');
            }
        })();
    }, []);

    useEffect(() => {
        const filtered = data.filter(curso => curso.linguagem === option)
        if (filtered.length > 0) {
            setFilter(filtered)
        } else {
            setFilter(data)
        }
    }, [data, option])




    const BarraProcura = (BarraDeProcura) => {
        if (!BarraDeProcura) {
            setDivProcuraBarra(false)
            setDivProcuraBtn(true)
        } else {
            setDivProcuraBarra(true)
            setDivProcuraBtn(false)
        }
    }


    return (
        <>

            <Navbar />

            <div className="cointeinerSearch">

                <div className="pesquisa">
                    <FormControl style={{ marginBottom: "5vh", color: "white" }} autocomplete="on">
                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: "white" }}>O quê deseja procurar?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="aluno" control={<Radio style={{ color: "white" }} />} label="Alunos" onClick={() => BarraProcura(true)} />
                            <FormControlLabel value="professor" control={<Radio style={{ color: "white" }} />} label="Professores" onClick={() => BarraProcura(true)} />
                            <FormControlLabel value="curso" control={<Radio style={{ color: "white" }} />} label="Cursos" onClick={() => BarraProcura(false)} />
                        </RadioGroup>
                    </FormControl>

                    <div style={{ display: divProcuraBarra ? "flex" : "none" }}>
                        <OutlinedInput
                            sx={{
                                width: "20vw",
                                maxWidth: '100%',
                            }}
                            id="outlined-adornment-weight"
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

                    <div style={{ display: divProcuraBtn ? "block" : "none" }}>
                        <Button variant="contained">Contained</Button><br />
                        <Button variant="contained">Contained</Button><br />
                        <Button variant="contained">Contained</Button><br />
                    </div>
                </div>


                <div className="resultado">

                    {filter.map(curso => {
                        return (
                            <div key={curso.id} className="caixa">
                                <div>
                                    <p>Nome do Curso:</p>

                                    <h3>{curso.nome}</h3>
                                </div>
                                <div>
                                    <p>Linguagem:
                                    </p>

                                    <h4>{curso.linguagem}</h4>
                                </div>
                                <div>
                                    <p>Categoria:
                                    </p>

                                    <h4>{curso.categoria}</h4>
                                </div>
                                <div>
                                    <p>Total de Horas:
                                    </p>

                                    <h4>{curso.horastotais}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Search;