import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Container,
    Grid,  
    Typography, Button, Box } from '@material-ui/core/';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({ 
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(8),

    },
    loadMore: {
      backgroundColor: "#0093cb",
      color: "#ffffff",
      "&:hover": {
          backgroundColor: '#0c57a6'
        }
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },    
  }));

const NewsCard = ({card}) => {   
  const classes = useStyles();
  const [image, setImage] = useState("/react/shortlogo.svg");
  const history = useHistory();

 
  useEffect(() => {
    axios.get(`/media?parent=${card.id}`)
    .then((res) => {
      if (res.data.length > 0){
        if (res.data[0].media_type === "image"){
          setImage(res.data[0].source_url)
        }
      }
    })
  },[card]); 
  
  
  return (
    <Grid item xs={12} sm={6} md={4}>
      
        <Card className={classes.card}>
          <CardActionArea onClick={() => history.push(`/react/news/${card.id}`)}>
            <CardMedia
              className={classes.cardMedia}
              image={image}
              title={card.title.rendered}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2"  dangerouslySetInnerHTML={{ __html: card.title.rendered}} />         
              
              <Typography>
                Опубликовано: {(new Date(card.date)).toLocaleDateString()}
              </Typography>
            </CardContent>
          </CardActionArea>    
        </Card>
      
    </Grid>
  )
} 



function NewsItems({numitems}){
    const [ posts, setPosts ] = useState([]);
    const [offset, setPageoffset] = useState(0);    
    const classes = useStyles();



    useEffect(() => {
      axios.get(`/posts?per_page=${numitems}&offset=${offset}`)
      .then((res) => {   
        const newposts = res.data;
        setPosts(oldPosts => [...oldPosts, ...newposts])    
      })
    },[offset, setPosts, numitems])

    return (
        <Container className={classes.cardGrid} maxWidth="md" >         
            <Grid container spacing={4}>
              {posts.map((card) => (              
                  <NewsCard card={card} key={card.id} />             
              ))}           
            </Grid>
            <Grid container justify="center">
              <Box pt={3}>
                <Button 
                  size="large" 
                  variant="contained" 
                  className={classes.loadMore}
                  onClick={() => setPageoffset(numitems+offset)}
                >
                      Еще новости
                </Button>
              </Box>
            </Grid>   
        </Container>
    )
}

export default NewsItems