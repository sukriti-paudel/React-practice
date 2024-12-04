import React from 'react';
import { AppBar, Box, Button, createTheme, Grid, ThemeProvider, Toolbar, Typography } from '@mui/material';

const Confirm = ({ nextstep, prevstep, values }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ababab',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography variant="h6" textAlign={'center'}>Confirm User Details</Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={11} sm={10} md={8} lg={6} marginX={'auto'}>
            <Box width={'80%'} marginX={'auto'} marginY={2} bgcolor={'#f5f5f5'} padding={3} textAlign={'center'}>
              <Typography variant="body1" gutterBottom>
                <strong>First Name:</strong> {values.firstname}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Last Name:</strong> {values.lastname}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> {values.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Occupation:</strong> {values.occupation}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>City:</strong> {values.city}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Bio:</strong> {values.bio}
              </Typography>

              <Button 
        onClick={nextstep}
        sx={{
          borderRadius: '10px',
          height: '40px',
          padding: '0.6em 0.6em',
          margin: '5px 10px',
          fontSize: '1em',
          fontWeight: '500',
          backgroundColor: '#69bcde',
          color:'white',
          border: '1px solid transparent',
          transition: 'border-color 0.25s',
          marginTop: '20px',
          '&:hover': {
            borderColor: '#a1b2c3',
            backgroundColor: '#e0e0e0',
          },
        }}
        className="custom-button"
        >
          Continue
        </Button>
        <Button 
        onClick={prevstep}
        sx={{
          borderRadius: '10px',
          color:'white',
          height: '40px',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: '500',
          backgroundColor: '#f6e911',
          border: '1px solid transparent',
          transition: 'border-color 0.25s',
          padding: '0.6em 0.6em',
          margin: '5px 10px',
          marginTop: '20px',
          '&:hover': {
            borderColor: '#d8d5a1',
            backgroundColor: '#817e40',
          },
        }}
        className="custom-button"
        >
          Back
        </Button>
            </Box>
          </Grid>
        </Grid>
      </>
    </ThemeProvider>
  );
};

export default Confirm;
