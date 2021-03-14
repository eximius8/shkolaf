import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Paper, Box, Typography, Grid, Link } from "@material-ui/core";

import axios from "axios";




const useStyles = makeStyles((theme: Theme) =>
  createStyles({    
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  }),
);

function Winner({winner}){   

    const classes = useStyles();    


    return(
        <Box align="center" component={Paper} p={1}>
            <Avatar alt={winner.title.rendered} src={winner.source_url} className={classes.large} />
            <Typography align="center" variant='h5'>
                {winner.alt_text ?
                    <Link target="_blank" 
                        href={winner.alt_text}>
                        {winner.title.rendered}
                    </Link>
                    : 
                    <>{winner.title.rendered}</>
                }
            </Typography>
            <Typography>
                {winner.caption.rendered.replace(/(<([^>]+)>)/gi, "")}
            </Typography>
        </Box>
    )
}



export default function WinnerList({content}){
    
    const [winners, setWinners] = useState([]);

    useEffect(() =>{
        axios.get(`/media?parent=${208}&per_page=10`)
        .then((res) => {
            let sorted = res.data.sort((a, b) => a.title.rendered > b.title.rendered ? 1 : -1)
            setWinners(sorted)
        })
    }, [])


    return(
        <Box my={2}>
            <Grid container spacing={3} justify='center'>
                {winners.map((winner) => {
                    return(                        
                            <Grid key={winner.id}  item sm={4} >
                                <Winner winner={winner}/>
                            </Grid>
                    )
                })}
            </Grid>
            <Box component={Paper} mt={2} p={1}>
                <Typography component="div" dangerouslySetInnerHTML={{ __html: content}}  />                  
            </Box>            
        </Box>
    )
}