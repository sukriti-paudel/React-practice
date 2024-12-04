import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <>

<Box 
            sx={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor:'#907fc5',
                color:'white',
                padding: '10px 0', 
                 
                width: '100%', 
                textAlign: 'center'
            }}
        >
            <Typography variant='h4'>
                Expense Tracker
            </Typography>
        </Box>



        </>
    )
}

export default Header