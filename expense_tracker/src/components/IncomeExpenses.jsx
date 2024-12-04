import React, { useContext } from 'react'
import { GlobalContext } from '../context/Global'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction=> transaction.amount)
    
    const income = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense = (
        amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)* -1
    ).toFixed(2);
    
    
    return (
        <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p style={{color:'green', padding:2}}>+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  style={{color:'red', padding:2}}>-${expense}</p>
            </div>
        </div>
        </>
    )
}

export default IncomeExpenses