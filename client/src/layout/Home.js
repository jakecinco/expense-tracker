import React from 'react'
import { Header } from '../components/Header';
import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import app from '../utils/firebase';

export const Home = () => {
    return (
        <>
            <Container maxWidth="sm">
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
            <br />

            <Grid item xs={12}>
                <Button onClick={() => app.auth().signOut()}
                  variant="contained" fullWidth color="secondary">
                    Sign out
                </Button>
            </Grid>

            </Container>
        </>
    )
}
