import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar.js"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Registration.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '& label.Mui-focused': {
        color: '#63C132',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#63C132',
        },
    },
}));





const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [tipo, setTipo] = useState("aluno");

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (email === "" || senha === "") {
            window.alert("Preencha todos os campos corretamente.")
            return;
        }

        const emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

        if (!emailPattern) {
            window.alert("Email inválido.")
            return;
        }

        const objLogin = {
            tipo: tipo,
            email: email,
            senha: senha
        }

        await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objLogin),
        }).then((success) => {
            const status = success.status;
            if (status === 200) {
                navigate("/search");
            } else {
                window.alert("Erro ao fazer login.")
                navigate("/login")
            }
        }).catch((err) => {
            console.log(err.response.data.result)
            window.alert("Erro na requisição, verrifique todos os campos.")
            navigate("/login")
            return
        })
    }

    return (
        <>
            <body className="teste">

                <Navbar />

                <div className="container">
                    <h1 className="Title">Login</h1>
                    <hr style={{ color: "white", marginBottom: "5vh" }}></hr>

                    <Box sx={{ flexGrow: 1 }} className="teste-flex">
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={12}>
                                <FormControl style={{ marginBottom: "0vh", color: "white" }} autocomplete="on">
                                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: "white" }}></FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue="aluno"
                                        onChange={(e) => setTipo(e.target.value)}
                                    >
                                        <FormControlLabel value="aluno" control={<Radio style={{ color: "white" }} />} label="Aluno" />
                                        <FormControlLabel value="professor" control={<Radio style={{ color: "white" }} />} label="Professor" />
                                    </RadioGroup>
                                </FormControl>

                            </Grid>


                            <Grid item xs={6} md={6}>
                                <Item><TextField
                                    required
                                    id="outlined-required2"
                                    label="Email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                /></Item>
                            </Grid>

                            <Grid item xs={6}>
                                <Item><TextField
                                    type={"password"}
                                    required
                                    id="outlined-required3"
                                    label="Senha"
                                    placeholder=""
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                /></Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className="cadastroBtn" variant="contained" onClick={handleLogin}>Login</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className="cadastroBtn" variant="contained">
                                    <Link activeClass="active" to="/registration" spy={true} smooth={true} duration={500}
                                        style={{ textDecoration: "none", color: "white" }}
                                    >
                                        Não possui Login? Cadastre-se
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>

                    </Box>

                </div>
            </body>
        </>
    );
}

export default Login;