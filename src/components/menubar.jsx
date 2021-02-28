import React, { useState } from 'react';
import { IconButton, 
    AppBar, 
    Toolbar, 
    Typography,
    Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SettingsModal } from '@n3/react-vision-panel';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(() => ({

    bar:{
        backgroundColor: "#de2f1e",
        zIndex: 1039             
    },
    logo:{
      height: 80,      
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },
    visbut: {
      color: "#ffffff",
    }   
  }));

function MenuBar(){
    
    const [vispanel, setVisPanel] = useState(false);
    const classes = useStyles();
    

    return (     
        <AppBar className={classes.bar} position="fixed">
          <Toolbar>          
            <Typography variant="h6" color="inherit" noWrap>
              <Button                 
                onClick={() => setVisPanel(!vispanel)}                
                size="large"
                className={classes.visbut}
              >               
                <VisibilityIcon fontSize="large" />                
              </Button>
              <SettingsModal
                show={vispanel}
                onHide={() => setVisPanel(false)}
              />
            </Typography>
           
                   
            <IconButton className={classes.toolbarButtons}>
              <img className={classes.logo} alt="logo" src={process.env.PUBLIC_URL + "logo.png"}/>
            </IconButton>          
          </Toolbar>
        </AppBar>  
    )
}

export default MenuBar