import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar.js"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../styles/Registration.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'

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
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [tipo, setTipo] = useState("aluno");

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (nome === "" || email === "" || senha === "" || confirmSenha === "" || telefone === "") {
            window.alert("Preencha todos os campos corretamente.")
        }

        const emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

        if (!emailPattern) {
            window.alert("Email inválido.")
            return;
        }

        if (telefone.length < 11) {
            window.alert("Telefone inválido.")
            return;
        }

        if (senha !== confirmSenha) {
            window.alert("As senhas precisam ser idênticas.")
            return;
        }

        const objRegister = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha
        }

        switch (tipo) {
            case "aluno":
                await fetch("http://localhost:3001/alunos", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(objRegister)
                }).then(() => {
                    navigate("/login");
                }).catch((err) => {
                    console.log(err)
                    window.alert("Erro na requisição, verrifique todos os campos.")
                    return;
                })
                break;
            case "professor":
                await fetch("http://localhost:3001/professores", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(objRegister)
                }).then((success) => {
                    const status = success.status;
                    if (status === 200) {
                        navigate("/login");
                    } else {
                        window.alert("Erro ao fazer login.")
                        navigate("/registration")
                    }
                }).catch((err) => {
                    console.log(err)
                    window.alert("Erro na requisição, verrifique todos os campos.")
                    return;
                })
                break;
            default:
                window.alert("Erro na requisição, verrifique todos os campos.")
                break;
        }
    }


    return (
        <>
            <body className="teste">

                <Navbar />

                <div className="container">
                    <h1 className="Title">Cadastre-se</h1>
                    <hr style={{ color: "white", marginBottom: "5vh" }}></hr>

                    <Box sx={{ flexGrow: 1 }} className="teste-flex">
                        <Grid container spacing={2}>
                            <Grid item xs={12}
                            >
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="aluno"
                                        name="radio-buttons-group"
                                        style={{ color: "white" }}
                                        onChange={(e) => setTipo(e.target.value)}
                                    >
                                        <FormControlLabel value="aluno" control={<Radio style={{ color: "white" }} />} label="Aluno" />
                                        <FormControlLabel value="professor" control={<Radio style={{ color: "white" }} />} label="Professor" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={0} md={12}>
                                <Item> <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Nome completo"
                                    placeholder="Nome completo"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                /></Item>
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
                                    required
                                    id="outlined-required3"
                                    label="Telefone"
                                    placeholder="Telefone"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
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
                            <Grid item xs={6}>
                                <Item><TextField
                                    type={"password"}
                                    required
                                    id="outlined-required3"
                                    label="Confirmar senha"
                                    placeholder=""
                                    value={confirmSenha}
                                    onChange={(e) => setConfirmSenha(e.target.value)}
                                /></Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Button onClick={handleRegister} className="cadastroBtn" variant="contained">Cadastrar</Button>
                            </Grid>

                        </Grid>

                    </Box>

                </div>
            </body>
        </>
    );
}

export default Registration;