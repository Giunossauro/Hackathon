import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import "../styles/Registration.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Registration = () => {
    const [alignment, setAlignment] = useState('aluno');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
            <body className="teste">
                <nav>
                    <div class="navbar">

                        <Link to="/home"> CODE OCEAN </Link>

                        <Link to="/home"> Sobre nós </Link>

                    </div>
                </nav>
                <div className="container">
                    <h1 className="Title">Cadastre-se</h1>
                    <hr style={{ color: "white" }}></hr>
                    <br />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <ToggleButtonGroup
                                    color="primary"
                                    style={{ backgroundColor: "white" }}
                                    className="teste-flex"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="aluno">Aluno</ToggleButton>
                                    <ToggleButton value="professor">Professor</ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item xs={0} md={12}>
                                <Item> <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Nome completo"
                                    placeholder="Nome completo"
                                /></Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item><TextField

                                    required
                                    id="outlined-required1"
                                    label="CPF"
                                    placeholder="CPF"
                                /></Item>
                            </Grid>
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

                                    required
                                    id="outlined-required3"
                                    label="Telefone"
                                    placeholder="Telefone"
                                /></Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item><TextField

                                    required
                                    id="outlined-required3"
                                    label="Data de nascimento"
                                    placeholder="xx/xx/xxxx"
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
                            <Grid item xs={6}>
                                <Item><TextField
                                    type={"password"}
                                    required
                                    id="outlined-required3"
                                    label="Confirmar senha"
                                    placeholder=""
                                /></Item>
                            </Grid>
                            <Button className="cadastro" variant="contained">Cadastrar</Button>

                        </Grid>

                    </Box>

                </div>
            </body>
        </>
    );
}

export default Registration;