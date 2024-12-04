import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// initialState 
const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []

}
export const GlobalContext = createContext(initialState);
//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //   actions
    function deleteTransactions(id) {
        dispatch({
            type: 'Delete_transaction',
            payload: id
        });
    }
    function addTransactions(transaction) {
        dispatch({
            type: 'add',
            payload: transaction
        });
    }
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransactions,
            addTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    );
}