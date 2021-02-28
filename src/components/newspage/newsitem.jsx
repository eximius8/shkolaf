import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,  
    Typography, Box, Paper } from '@material-ui/core/';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({ 
    itemGrid: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(8),
    },
    itemGridImg: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
      },
    divImg: {
        paddingTop: theme.spacing(8),
        display: "inline-block",
        overflowY: "hidden",
        height: 300,
        width: "100%",
    },
  }));


function NewsItem({post}){

    const classes = useStyles();
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get(`http://www.sport-school-2.ru/wp-json/wp/v2/media?parent=${post.id}`)
        .then((res) => {
          if (res.data.length > 0){
            if (res.data[0].media_type === "image"){
              setImage(res.data[0].source_url)
            }
          }
        })
      },[post]); 
    

    return (
        <>            
            {image && 
                <div className={classes.divImg}> 
                    <img width="100%" alt={post.id} src={image} />
                </div>
            }            
            <Container className={image ? classes.itemGridImg : classes.itemGrid} maxWidth="md" >
                
                <Box p={3} component={Paper}>
                    <Typography 
                        variant="h4" 
                        component="h1" 
                        dangerouslySetInnerHTML={{ __html: post.title.rendered}} 
                    />
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
                    <Typography align="right">
                        <i>Опубликовано: {(new Date(post.date)).toLocaleDateString()}</i>
                    </Typography>
                </Box>
                
            </Container>
        </>
    )
}

export default NewsItem