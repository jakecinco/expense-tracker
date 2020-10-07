import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            // width: theme.spacing(16),
            // height: theme.spacing(2),
        },
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
})
);

export const IncomeExpenses = () => {
    const classes = useStyles();
    const { transactions } = useContext(GlobalContext);
    const currency = '₱'

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (


        <Paper className={classes.root}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={5} >
                    <Typography className={classes.header} variant="subtitle1" >
                        INCOME
                    </Typography>
                    <Typography variant="h5"
                        style={{ color: "#12B709", textAlign: 'center' }} >
                        {currency}{numberWithCommas(income)}
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <Divider orientation='vertical' variant='middle'  />
                </Grid>
                <Grid item xs={5} >
                    <Typography className={classes.header} variant="subtitle1" >
                        EXPENSE
                    </Typography>
                    <Typography variant="h5"
                        style={{ textAlign: 'center' }} >
                        {currency}{numberWithCommas(expense)}
                    </Typography>
                </Grid>
            </Grid>
         </Paper>
         
            
    )
}