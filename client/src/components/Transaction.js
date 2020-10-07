import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    deleteBtn: {
        cursor: "pointer",
        backgroundColor: "#e74c3c",
        border: 0,
        color: "#fff",
        fontSize: "20px",
        lineHeight: "15px",
        padding: "5px",
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translate(-100%, -50%)",
        opacity: 0,
        transition: "opacity 0.3s ease",
        "&:focus": {
            outline: 0,
        }
      
      }, 

    trans: { 
        backgroundColor: "#fff",
        color: "#333",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        padding: theme.spacing(1),
        "&:hover": {
            "& $deleteBtn": {
                opacity: 1,
          }
        },
        borderRight: "5px solid #c0392b"
    },

}));

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const classes = useStyles();

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <Grid  item xs={12} 
        // className={transaction.amount < 0 ? 'minus' : 'plus'} 
        >
            <Paper className={ classes.trans } 
                style={ transaction.amount < 0 ? 
                    { borderRight: "5px solid #c0392b" } : { borderRight: "5px solid #2ecc71"}}
                elevation={2} 
                key={transaction._id} >
            {transaction.text} 
            <span>
                {sign}₱{numberWithCommas(Math.abs(transaction.amount))}
            </span>
            <button className={ classes.deleteBtn }
                onClick={() => deleteTransaction(transaction._id)} >
                    x
            </button>
            </Paper>
        </Grid>
    );
}

