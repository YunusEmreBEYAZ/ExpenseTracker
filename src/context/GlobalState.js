import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer.js'

//Initial State
const initialState = {
    transactions: []
}

//Create Context
export const GlobalContext = createContext(initialState);




//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function createTransaction(transaction) {
        dispatch({
            type: 'CREATE_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        createTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}