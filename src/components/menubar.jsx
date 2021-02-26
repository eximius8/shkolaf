import React from 'react';
import { IconButton, 
    AppBar, 
    Toolbar, 
    Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    bar:{
          backgroundColor: "#de2f1e",
    },
    logo:{
      height: 60,      
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },
  }));

function MenuBar(){
    const classes = useStyles();

    return (
      <AppBar className={classes.bar} position="relative">          
        <Toolbar>          
          <Typography variant="h6" color="white" noWrap>
                        
          </Typography>
          <IconButton className={classes.toolbarButtons}>
            <img className={classes.logo} alt="logo" src={process.env.PUBLIC_URL + "logo.png"}/>
          </IconButton>          
        </Toolbar>
      </AppBar>
    )
}

export default MenuBar