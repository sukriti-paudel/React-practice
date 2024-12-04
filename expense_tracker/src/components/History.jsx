import { AttachMoneyOutlined } from '@mui/icons-material'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import IncomeExpenses from './IncomeExpenses'
import { GlobalContext } from '../context/Global'
import Transactions from './Transactions'

const History = () => {
  const { transactions } = useContext(GlobalContext)
  
    const amounts = transactions.map(transaction=> transaction.amount)
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    
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
            padding={4}
            boxShadow={3} // Add some shadow for depth
            // textAlign={'center'}
            sx={{ borderRadius: '12px' }}
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
              <Typography variant='h5' color="textSecondary">
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
              <Divider sx={{ marginY: 2 }} />
              <IncomeExpenses />
              <Box marginY={3}>

                <h4 style={{ textAlign: 'left', fontSize: '18px' }}>History:</h4>
                <ul className="list">
                  {transactions && transactions.length > 0 ? (
                    transactions.map(transaction => (
                      <Transactions key={ transaction.id} transaction={transaction}/> 
                    ))
                  ) : (
                    <li>No transactions found</li>
                  )}
                </ul>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button variant="contained"> Home </Button>
                </Link>
              </Box>
            </Box>
          

        </Grid>
      </Grid>
    </>
  )
}

export default History