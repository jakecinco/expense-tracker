import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


function Copyright() {
  return (
    <Typography variant="caption" color="textSecondary" align="center">
      {'Copyright ©'}
      <br/>
      <Link color="inherit" href="https://material-ui.com/">
        Expense Tracker App created using Material-UI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;