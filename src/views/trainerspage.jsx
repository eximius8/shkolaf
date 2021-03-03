import React, { useEffect, useState } from "react";
import { Container, 
  Grid,
  Button,  
  Card,
  CardContent,
  Typography, 
  CardActionArea,
  CardMedia,
  CardActions} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";



const useStyles = makeStyles((theme) => ({ 
    heroContent: {      
      padding: theme.spacing(10, 0, 6),      
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 350,
    },
  })); 





function TrainerCard({trainer}){
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={trainer.source_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {trainer.title.rendered}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: trainer.caption.rendered}} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}


export default function TrainerList (){

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get(`http://sport-school-2.ru/wp-json/wp/v2/media?parent=975`)
    .then((res) => {
      console.log(res.data);
      setTrainers(res.data);
    })
  }, [])
    
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <h2>Тренерский состав</h2>            
            <Grid container spacing={3}>
              {
                trainers.map((trainer) => 
                  <Grid key={trainer.id} item sm={4} xs={12}>
                    <TrainerCard trainer={trainer} />
                  </Grid>
                )
              }              
            </Grid>
          
          </Container>
        </div>
    )
}