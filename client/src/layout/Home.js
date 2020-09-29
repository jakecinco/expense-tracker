import React from 'react'
import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';

import app from '../utils/firebase';

export const Home = () => {
    const env = process.env;
    console.log(env)
    return (
        <>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
                <button onClick={() => app.auth().signOut()}>Sign out</button>
            </div>
        </>
    )
}
