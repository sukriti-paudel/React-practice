import { AttachMoneyOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/Global'

const Transactions = ({transaction}) => {
    const {deleteTransactions} = useContext(GlobalContext)
    const sign = transaction.amount<0?'-':'+'
    return (
        <>
            <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={()=> deleteTransactions(transaction.id)}>x</button>
        </li>
        </>
    )
}

export default Transactions