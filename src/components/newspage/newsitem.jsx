import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,  
    Typography, Box, Paper } from '@material-ui/core/';


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

    return (
        <>          
            <Container className={classes.itemGrid} maxWidth="md" >
                
                <Box p={3} component={Paper}>
                    <Typography 
                        variant="h4" 
                        component="h1" 
                        dangerouslySetInnerHTML={{ __html: post.title.rendered}} 
                    />
                    <Typography component='div' dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
                    <Typography align="right">
                        <i>Опубликовано: {(new Date(post.date)).toLocaleDateString()}</i>
                    </Typography>
                </Box>
                
            </Container>
        </>
    )
}

export default NewsItem