import { HistoryEdu, PlaylistAdd } from '@mui/icons-material'

import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
        <>
            <div className='history' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Link to="/history" style={{ textDecoration: 'none',color:'black' }}>
                    <div 
                    style={{
                        backgroundColor:'white',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', border: '1px solid #000',
                        padding: '20px',
                        borderRadius: '5px'
                    }} >
                        <HistoryEdu style={{ fontSize: '40px' }} />
                        <p style={{ marginTop: '10px' }}>History</p>
                    </div>
                </Link>
                <Link to="/add-transaction" style={{ textDecoration: 'none',color:'black',}}>

                    <div style={{
                        backgroundColor:'white',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', border: '1px solid #000',
                        padding: '10px',
                        borderRadius: '5px'
                    }}>
                        <PlaylistAdd style={{ fontSize: '40px' }} />
                        <p style={{ marginTop: '10px' }}>Add </p>
                        <p>Transaction</p>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default Cards