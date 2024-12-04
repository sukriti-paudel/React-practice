
import { AppBar, Box, Button, createTheme, Grid, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React from 'react'
import './Style.css'

const Userdetail = ({ nextstep, values, handlechange,prevstep}) => {
  const theme = createTheme({

    palette: {
      primary: {
        main: '#ababab',
      },
    },
  });
  const continueStep = e => {
    e.preventDefault();
    nextstep();
  }

  return (
    <ThemeProvider theme={theme} >
      <>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography variant="h6" textAlign={'center'} >Enter User Details</Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={11} sm={10} md={8} lg={6} marginX={'auto'}>
            <Box width={'80%'} marginX={'auto'} marginY={2} bgcolor={'#f5f5f5'} padding={3} className='text-2xl' textAlign={'center'} >

              <TextField label="First name" placeholder='Enter your first name' required fullWidth
                margin="normal" onChange={handlechange('firstname')}
                defaultValue={values.firstname}
              />
              <br />
              <TextField label="Last name" placeholder='Enter your last name' required  fullWidth
                margin="normal"
                onChange={handlechange('lastname')}
                defaultValue={values.lastname}
              />

              <TextField label="Email" placeholder='Enter your email' required
               fullWidth
                margin="normal"
                onChange={handlechange('email')}
                defaultValue={values.email}
              />
         

        <Button 
        onClick={continueStep}
        sx={{
          borderRadius: '10px',
          height: '40px',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: '500',
          backgroundColor: '#69bcde',
          color: '#fff',
          border: '1px solid transparent',
          transition: 'border-color 0.25s',
          marginTop: '20px',
          '&:hover': {
            borderColor: '#a1b2c3',
            backgroundColor: '#7e7b7b',
          },
        }}
        className="custom-button"
        >
          Continue
        </Button>
        
            </Box>

          </Grid>
        </Grid>
      </>

    </ThemeProvider>
  )
}

export default Userdetail