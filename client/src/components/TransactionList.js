import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        // display: 'block',
        '& > *': {
            // padding: theme.spacing(2),
            // width: theme.spacing(16),
            // height: theme.spacing(6),
        },
    },
}));

export const TransactionList = () => {
    const classes = useStyles();
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h3>History</h3>
            <Grid className={classes.root} container spacing={1} >
                {transactions.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
            </Grid>
        </>
    )
}

// .list {
//     list-style-type: none;
//     padding: 0;
//     margin-bottom: 40px;
//   }

