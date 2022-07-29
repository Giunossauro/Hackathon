import { useState } from "react";
import "../styles/Search.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput'


const PrucuraSearch= ()=>{
    
    const [divProcuraBarra, setDivProcuraBarra] = useState(true);
    const [divProcuraBtn, setDivProcuraBtn] = useState(false);

    const BarraProcura = (BarraDeProcura) => {
        if (!BarraDeProcura) {
            setDivProcuraBarra(false)
            setDivProcuraBtn(true)
        } else {
            setDivProcuraBarra(true)
            setDivProcuraBtn(false)
        }
    }
    
    return(
        <>
        <div className="pesquisa">
                    <FormControl style={{ marginBottom: "5vh", color: "white" }} autocomplete="on">
                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: "white" }}>O quê deseja procurar?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="aluno" control={<Radio style={{ color: "white" }} />} label="Alunos" onClick={()=>BarraProcura(true)} />
                            <FormControlLabel value="professor" control={<Radio style={{ color: "white" }}  />} label="Professores" onClick={()=>BarraProcura(true)}/>
                            <FormControlLabel value="curso" control={<Radio style={{ color: "white" }} />} label="Cursos" onClick={()=>BarraProcura(false)} />
                        </RadioGroup>
                    </FormControl>

                    <div style={{ display: divProcuraBarra ? "flex" : "none" }}>
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

                    <div style={{ display: divProcuraBtn ? "block" : "none" }}>
                        <Button variant="contained">Contained</Button><br/>                    
                        <Button variant="contained">Contained</Button><br/>
                        <Button variant="contained">Contained</Button><br/>
                    </div>



            </div>

        </>
)
}


export default PrucuraSearch