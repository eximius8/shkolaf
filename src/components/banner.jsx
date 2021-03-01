import React from "react";
import { Container, Grid, Button, Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({ 
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(10, 0, 6),
      
    },
    heroButtons: {
      marginTop: theme.spacing(4),      
    },
    mainCTA: {
        backgroundColor: "#0093cb",
        color: "#ffffff",
        "&:hover": {
            backgroundColor: '#0c57a6'
          }
    },
    logo: {
      width: '100%',
    },
    
  }));
  



export default function MainBanner (){
    
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <div>
                <Grid container justify="center" align="center" >
                    <Grid item xs={12} >
                        <Box display={{ xs: 'none', sm: 'block' }}>
                            <img className={classes.logo} alt="logo" src="/react/longlogo.svg"/>
                        </Box>   
                        <Box display={{ xs: 'block', sm: 'none' }}>
                            <img className={classes.logo} alt="logo" src="/react/shortlogo.svg"/>
                        </Box>                        
                    </Grid>
                </Grid>                    
            </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button 
                    href="https://forms.yandex.ru/u/603d0d7c6c3baaca7fd5b959/" 
                    target="_blank"
                    variant="contained" 
                    className={classes.mainCTA}
                  >
                    Записаться к нам
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Стать партнером
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    )
}