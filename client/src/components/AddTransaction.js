import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            // width: '25ch',
        },
    },
}));

export const AddTransaction = () => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            text,
            amount: +amount
        }

        addTransaction(newTransaction);

        setTimeout(() => {
            setText('');
            setAmount('');
        }, 500)

    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form className={classes.root} onSubmit={onSubmit}>
                <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-textarea"
                        label="Amount"
                        type="number"
                        placeholder="negative - expense, positive - income"
                        variant="outlined"
                        fullWidth
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Grid>
                    <br />
                    <Grid item xs={12}>
                            <TextField
                                id="outlined-textarea"
                                label="Text"
                                type="text"
                                placeholder="Enter description"
                                variant="outlined"
                                fullWidth
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth color="primary">
                            Add transaction
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
