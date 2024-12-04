import {
    Grid,
    Box,
    FormControl,
    Button,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Selection from './Selection';
import { useState } from 'react';

const CurrencySelectionForm = () => {
    const [amount, setamount] = useState('1');
    const [result, setResult] = useState('');
    const [fromCurrency, setfrom] = useState('USD');
    const [toCurrency, setTo] = useState('NPR');
    const [exrate, setRate] = useState('');
    const [formsubmit, setFormsubmit] = useState(false)
    const [isloading, setloading] = useState(false)
    const handleSwap = () => {
        setfrom(toCurrency);
        setTo(fromCurrency);
    }
    const getExchangeRate = async () => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const API_URL = ` https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`
        setloading(true);
        try {
            const response = await fetch(API_URL)
            if (!response.ok) {
                throw Error('Error')
            }
            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(2)
            setRate(`Rate: ${data.conversion_rate}`)
            setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`)
            // console.log(data)

        }
        catch (error) {
            console.log(error)
        }
        finally {
            setloading(false)
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormsubmit(true);
        getExchangeRate();

    }
    return (
        <>
            <form style={{ width: '100%' }} onSubmit={handleFormSubmit}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            textAlign: 'left'
                        }}>

                            <label name='amount'>Amount:</label>
                            <input type='number' placeholder='Enter the amount' name='amount' value={amount}
                                onChange={e => setamount(e.target.value)}
                                required
                                style={{
                                    padding: 9,
                                    marginTop: 4
                                }}
                            />
                        </Box>

                    </Grid>
                    <Grid item xs={12} container spacing={2} alignItems="center" marginTop={2}>
                        <Grid item xs={5}>
                            <FormControl fullWidth variant="outlined">
                                <Selection selectedCurrency={fromCurrency} handleCurrency={e => setfrom(e.target.value)} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                onClick={handleSwap}
                                sx={{
                                    height: '100%',
                                    borderRadius: '50%',
                                    minWidth: 'auto',
                                    padding: 1,
                                    bgcolor: '#fcfcfc',
                                    border: '1px solid',
                                    color: 'black',
                                    '&:hover': {
                                        bgcolor: '#f1f1f1',
                                        opacity: '70%',
                                    },
                                }}
                            >
                                <SwapHorizIcon />
                            </Button>
                        </Grid>
                        <Grid item xs={5} >
                            <FormControl fullWidth variant="outlined">
                                <Selection selectedCurrency={toCurrency} handleCurrency={e => setTo(e.target.value)} />

                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button type='submit' className={`${isloading ? 'loading' : ''}`} style={{
                        backgroundColor: 'cornsilk',
                        color: 'black',
                        margin: '20px',
                        padding: '15px',
                        minWidth: '60%',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: '#ababab', opacity: '70%',
                        },
                    }}><p >Exchange value </p></Button>

                    {formsubmit && (
                        isloading ? ("Getting exchange rate....") : (

                            <span className='exchange-result'>
                                {exrate}
                                <br />
                                {result}
                            </span>
                        )

                    )}
                </Grid>
            </form>
        </>
    )
}

export default CurrencySelectionForm