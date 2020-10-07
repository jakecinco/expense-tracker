import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing(1)
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
})
);

export default function SimpleCard(props) {
  const classes = useStyles();
  const currency = '₱'

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography className={classes.header} variant="subtitle1" >
          {props.header}
        </Typography>
        <Typography variant="h5" style={{ color: props.color, textAlign: 'left' }} >
          {currency}{props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
