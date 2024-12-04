import { AppBar, Toolbar, Typography, createTheme } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles'; // Use Material-UI's ThemeProvider

const Success = () => {
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
            <Typography variant="h6" textAlign={'center'}>
              Successful
            </Typography>
          </Toolbar>
        </AppBar>
        <h1 style={{ textAlign: 'center' }}>Thank you for filling out the form!</h1>
      </>
    </ThemeProvider>
  );
};

export default Success;
