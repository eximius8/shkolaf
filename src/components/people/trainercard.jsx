import React from "react";
import { 
  Card,
  CardContent,
  Typography, 
  CardActionArea,
  CardMedia } from "@material-ui/core";
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({   
    root: {
      maxWidth: 345,
    },
    media: {
      height: 380,
    }    
  })); 

export default function TrainerCard({trainer}){
  const classes = useStyles();  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={trainer.source_url}
          title={trainer.title.rendered}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {trainer.title.rendered}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: trainer.caption.rendered}} />
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
