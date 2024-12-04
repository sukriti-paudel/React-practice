import React, { useContext, useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Divider } from '@mui/material';
import { AttachMoneyOutlined } from '@mui/icons-material';
import IncomeExpenses from './IncomeExpenses';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/Global';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('0');
    const { transactions, addTransactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        };

        addTransactions(newTransaction);
        setText('');
        setAmount('');
    };

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Box
                        width={'80%'}
                        maxWidth={500}
                        marginX={'auto'}
                        marginY={2}
                        bgcolor={'#f5f4f9'}
                        paddingX={4}
                        paddingY={2}
                        boxShadow={3}
                        sx={{

                            borderRadius: '12px'
                        }}
                    >
                        <Typography variant='h4' marginBottom={2} textAlign={'Left'} sx={{ fontFamily: 'Times New Roman', fontStyle: 'oblique' }}>
                            Expense Tracker
                        </Typography>
                        <Box
                            textAlign={'left'}
                            bgcolor={'#fcfcfa'} // 
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
                        <Divider sx={{ marginY: 1 }} />
                        <IncomeExpenses />
                        
                        <Box bgcolor={'#fff'} sx={{ padding: 1, textAlign: 'left',borderRadius:'5px', margin:1}}>
                            <Typography variant="h6" gutterBottom>
                                Add New Transaction
                            </Typography>
                            <form id="form" onSubmit={handleSubmit}>
                                <Box className="form-control" sx={{ marginBottom: 1 }}>
                                    <label htmlFor="text">Text</label>
                                    <TextField
                                        type="text"
                                        placeholder="Enter text..."
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        fullWidth
                                        required
                                    />
                                </Box>
                                                          <Box
                                    className="form-control" sx={{ marginBottom: 1 }}>
                                    <label htmlFor="amount">
                                        Amount
                                        (negative - expense, positive - income)
                                    </label>
                                    <TextField
                                        type="number"
                                        id="amount"
                                        placeholder="Enter amount..."
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        fullWidth
                                        required
                                        />
                                </Box>
                                    <Button
                                        variant="contained"
                                        color="secondary" // Change the color to your preferred one
                                        type="submit"
                                        sx={{
                                            backgroundColor: 'grey', width: '50px',
                                            fontSize: '0.8rem',
                                            '&:hover': { backgroundColor: 'darkgrey' }
                                        }}
                                        >
                                        Add
                                    </Button>
                            </form>
                        </Box>
                                     
                    <Divider sx={{ marginY: 1 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant='contained'> Home </Button>
                        </Link>
                    </Box>
                </Box>



            </Grid>
        </Grid >
        </>
    );
}

export default AddTransaction;
