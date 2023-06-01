import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)

    return (
        <div className="inc-exp-container">
            <div className="money plus">
                <h4>Income</h4>
                <p className="money plus">+${Math.abs(income).toFixed(2)}</p>
            </div>
            <div className="money minus">
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    )
}
