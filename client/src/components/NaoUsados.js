<OutlinedInput
          id="outlined-adornment-weight"
          // value={values.weight}
          // onChange={handleChange('weight')}
          //endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          endAdornment={<InputAdornment position="end">
            
            <Link activeClass="active" to="/search" spy={true} smooth={true} duration={500} >
<Button variant="text">🔍</Button>
            </Link>
          </InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          variant="filled"
          inputProps={{
            'aria-label': 'weight',
          }}
          style={{ backgroundColor: "white", width: "50vw" }}
          size="small"
        />