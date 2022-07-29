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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


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



const Registration = () => {
    const [alignment, setAlignment] = useState('aluno');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
            <body className="teste">

            <Navbar />

                <div className="container">
                    <h1 className="Title">Cadastre-se</h1>
                    <hr style={{ color: "white", marginBottom:"5vh"}}></hr>

                    <Box sx={{ flexGrow: 1 }} className="teste-flex">
                        <Grid container spacing={2}>
                            <Grid item xs={12}
                            >
                                <ToggleButtonGroup
                                    color="primary"
                                    style={{  flexWrap:"wrap", justifyContent:"center" }}
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton style={{backgroundColor: "white"}} value="aluno">Aluno</ToggleButton>
                                    <ToggleButton style={{backgroundColor: "white"}} value="professor">Professor</ToggleButton>
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
{/*                             <Grid item xs={6}>
                                <Item><TextField
                                    required
                                    id="outlined-required1"
                                    label="CPF"
                                    placeholder="CPF"
                                /></Item>
                            </Grid> */}
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
{/*                             <Grid item xs={6}>
                                <Item><TextField

                                    required
                                    id="outlined-required3"
                                    label="Data de nascimento"
                                    placeholder="xx/xx/xxxx"
                                /></Item>
                            </Grid> */}
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
                            <Grid item xs={12}>
                                <Button className="cadastroBtn" variant="contained">Cadastrar</Button>
                            </Grid>
                            
                        </Grid>

                    </Box>

                </div>
            </body>
        </>
    );
}

export default Registration;