import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import SimpleCard from './SimpleCard';
import Grid from '@material-ui/core/Grid';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <Grid container spacing={2} style={{marginBottom: '5px'}}>
            <Grid item xs={12} sm={12}>
                <SimpleCard value={numberWithCommas(total)} 
                    color={"#0f0f0f"} 
                    header={"YOUR BALANCE"}
                    style={{ fontWeight: 'bold'}} />
            </Grid>
        </Grid> 
   );
}