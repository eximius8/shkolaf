import React from "react";
import { Typography, Link } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="https://material-ui.com/">
          sport-school-2.ru
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({ 
    footer: {
  
      
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      left:0,
      right:0,    
      bottom: 0, 
    },
  }));  


export default function Footer (){
    const classes = useStyles();


    return (       
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            ГАУ СШОР № 2
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            404130, город Волжский, ул. Комсомольская 20
        </Typography>
        <Copyright />
    </footer>   
    )
}