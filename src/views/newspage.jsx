import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NewsItems from "../components/news";


const useStyles = makeStyles((theme) => ({ 
    itemGrid: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(8),
    },   
  }));



export default function NewsMain() {
    const classes = useStyles();

  return (
    <React.Fragment> 
        <div className={classes.itemGrid} />          
        <NewsItems numitems={6}/>  
    </React.Fragment>
  );
}
