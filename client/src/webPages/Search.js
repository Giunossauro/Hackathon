import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import "../styles/Search.css";
// import ProcuraSearch from "../components/ProcuraSearch.js"
// import ResultadoSearch from "../components/ResultadoSearch.js"
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput'
import Navbar from "../components/Navbar.js"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const linguagem = location.state;
    const [option, setOption] = useState(linguagem)
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [lang, setLang] = useState([]);
    const [tipo, setTipo] = useState("alunos")

    const [divProcuraBarra, setDivProcuraBarra] = useState(true);
    const [divProcuraBtn, setDivProcuraBtn] = useState(false);

    const [nameSearch, setNameSearch] = useState("");

    const handleSearch = async () => {
        if (tipo === "cursos") {
            return;
        }

        if (nameSearch !== "") {
            await fetch(`http://localhost:3001/busca/${tipo}/nome?query=${nameSearch}`)
                .then(async (success) => {
                    let responseData = await success.json();

                    const userName = await fetch(`/${tipo}/${responseData.result[0].id}`);
                    let responseUser = await userName.json();

                    if (userName) {
                        const teacherCourses = data.filter(curso => curso.professorid === responseData.result.id)

                        const userObj = { ...responseData.result[0], userName: responseUser.result[0].nome, cursos: teacherCourses }
                        console.log(userObj)

                        navigate(`/search/${tipo === "alunos" ? "users" : "teachers"}`, {
                            state: userObj
                        });
                    }
                }).catch((err) => {
                    console.log(err)
                })
        }
    }

    const BootstrapButton = styled(Button)({
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#41FF2F'
        }
    })

    useEffect(() => {
        (async () => {
            try {
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

                const langResponse = await fetch("http://localhost:3001/linguagens");

                if (!langResponse.ok) {
                    setLang("")
                }

                let langData = await langResponse.json();

                setLang(langData.result);

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
                            onChange={(e) => setTipo(e.target.value)}
                            defaultValue="alunos"
                        >
                            <FormControlLabel value="alunos" control={<Radio style={{ color: "white" }} />} label="Alunos" onClick={() => BarraProcura(true)} />
                            <FormControlLabel value="professores" control={<Radio style={{ color: "white" }} />} label="Professores" onClick={() => BarraProcura(true)} />
                            <FormControlLabel value="cursos" control={<Radio style={{ color: "white" }} />} label="Cursos" onClick={() => BarraProcura(false)} />
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
                            endAdornment={<InputAdornment position="end"><Button variant="text" onClick={handleSearch}>🔍</Button></InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            variant="filled"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            style={{ backgroundColor: "white" }}
                            size="small"
                            onChange={(e) => setNameSearch(e.target.value)}
                        />
                    </div>

                    <div style={{ display: divProcuraBtn ? "grid" : "none", gridTemplateColumns: "repeat(auto-fill, 45%)", gap: "15px", justifyItems: "stretch" }}>
                        <BootstrapButton variant="contained" onClick={() => setOption("")}>Todos</BootstrapButton>
                        {lang.map(language => {
                            return (
                                <div>
                                    <BootstrapButton variant="contained" key={language.id} onClick={() => setOption(language.nome)}>{language.nome}</BootstrapButton>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="resultado">

                    {filter.map(curso => {
                        return (
                            <div key={curso.id} className="caixa">
                                <Link to="/search/cursos" state={curso} style={{ textDecoration: "none", color: "white", display: "flex", width: "95%", justifyContent: "space-between" }}>
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
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Search;