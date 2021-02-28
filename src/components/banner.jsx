import React from "react";
import { Container, Typography, Grid, Button, Box} from "@material-ui/core";
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
    }
  }));
  



export default function MainBanner (){
    
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div>
                <Grid container justify="center" align="center" >
                    <Grid item xs={12} md={4} >
                        <Box display={{ xs: 'none', sm: 'block' }}>
                            <img className={classes.logo} alt="logo" height="200" src={process.env.PUBLIC_URL + "logo.png"}/>
                        </Box>   
                        <Box display={{ xs: 'block', sm: 'none' }}>
                            <img className={classes.logo} alt="logo" height="70" src={process.env.PUBLIC_URL + "logo.png"}/>
                        </Box>                        
                    </Grid>
                    <Grid item xs={12} md={8}>                        
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Государственное автономное учреждение Волгоградской области ″Спортивная школа олимпийского резерва № 2″
                        </Typography>
                        <Typography align="center" color="textPrimary">
                            Мы готовим чемпионов по направлениям "Спортивная гимнастика" и "Тхэквондо". 
                            {/* В стенах школы подготовлено два серебрянных призера Олимпийских игр, два победителя Первенства Европы. 
                            Более 100 выпускникам школы присвоенно звание Мастер спорта СССР и России. */}
                        </Typography>
                    </Grid>
                </Grid>                    
            </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" className={classes.mainCTA}>
                    Стать чемпионом
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