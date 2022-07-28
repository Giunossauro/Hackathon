import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar.js"
import { Link } from "react-router-dom"
import "../styles/Registration.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Login = () => {
    const [alignment, setAlignment] = useState('aluno');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
            <body className="teste">

                <Navbar />

                <div className="container">
                    <h1 className="Title">Login</h1>
                    <hr style={{ color: "white", marginBottom: "5vh" }}></hr>

                    <Box sx={{ flexGrow: 1 }} className="teste-flex">
                        <Grid container spacing={2}>

                            <Grid item xs={6} md={6}>
                                <Item><TextField
                                    required
                                    id="outlined-required2"
                                    label="Email"
                                    placeholder="Email"
                                /></Item>
                            </Grid>

                            <Grid item xs={6}>
                                <Item><TextField
                                    type={"password"}
                                    required
                                    id="outlined-required3"
                                    label="Senha"
                                    placeholder=""
                                /></Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className="cadastroBtn" variant="contained">Login</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button className="cadastroBtn" variant="contained">
                                    <Link activeClass="active" to="/registration" spy={true} smooth={true} duration={500} >
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