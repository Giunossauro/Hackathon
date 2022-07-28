import React from "react";
import { Link } from "react-router-dom"
import "../styles/Search.css";
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput'




const Search = () => {
    return (
        <>
            <body>

                <div class="navbar">

                    <Link to="/home"> CODE OCEAN </Link>
                    <Link to="/home"> Login </Link>
                    <Link to="/registration"> Cadastro </Link>



                </div>


                <div className="pesquisa">


                    <OutlinedInput
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
                        style={{ backgroundColor: "white", width: "90%" }}
                        size="small"
                    />
                </div>

                <div className="resultado">

                    <h2 className="Title">Resultados</h2>
                    <div className="caixa">
                        <img alt="Foto aqui" />
                        <br />
                        <p > info aqui </p>
                    </div>

                </div>

            </body>
        </>
    );
}

export default Search;