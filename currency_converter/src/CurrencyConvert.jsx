import React from 'react';
import {
    Typography,
    Box,
    } from '@mui/material';
import CurrencySelectionForm from './CurrencySelectionForm';


const CurrencyExchange = () => {
    return (
        <>
            <Box
                className='container'
                width={'60%'}
                maxWidth={600}
                margin="auto"
                marginY={5}
                padding={5}
                textAlign={'center'}
                borderRadius={6}
                boxShadow={'0 8px 30px rgba(0, 0, 0, 0.2)'}
                display="flex"
                flexDirection="column"
                alignItems="center"

            >
                <Typography 
                    variant="h4" 
                    sx={{
                        textAlign:'left',
                        padding: 2,
                        color: '#565c5e',
                        fontWeight:'bold'
                    }}
                >
                    Currency Exchange
                </Typography>
             <CurrencySelectionForm/>
            </Box>
        </>
    );
};

export default CurrencyExchange;
