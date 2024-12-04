import { AttachMoneyOutlined } from '@mui/icons-material';
import { Box, Grid, Typography, Divider } from '@mui/material';
import React, { useContext } from 'react';
import IncomeExpenses from './IncomeExpenses';
import MultiActionAreaCard from './Cards';
import { GlobalContext } from '../context/Global';

const Expensebox = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction=> transaction.amount)
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} md={8} lg={6}>
                <Box
                    width={'80%'}
                    maxWidth={500} 
                    marginX={'auto'}
                    marginY={6}
                    bgcolor={'#f5f4f9'} 
                    padding={4}
                    boxShadow={3}
                    sx={{ 
                    
                        borderRadius: '12px' }}
                >
                    <Typography variant='h4' marginBottom={2}  textAlign={'Left'}sx={{fontFamily:'Times New Roman',fontStyle:'oblique'}}>
                        Expense Tracker
                    </Typography>
                    <Box
                        textAlign={'left'}
                        bgcolor={'#fff'} // 
                        padding={2}
                        sx={{ borderRadius: '8px' }}
                    >
                        <Typography variant='h5' color="#7f98c2">
                            Your Balance:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 1,
                            }}
                        >
                            <AttachMoneyOutlined sx={{ marginRight: 1 }} />
                            <Typography variant='h6'>
                                {total}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ marginY: 3 }} /> 
                    <IncomeExpenses />
                    <Divider sx={{ marginY: 3 }} />
                    <MultiActionAreaCard/>
                    
                </Box>
            </Grid>
        </Grid>
    );
};

export default Expensebox;
