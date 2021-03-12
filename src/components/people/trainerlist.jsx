import React, { useEffect, useState } from "react";
import TrainerCard from "./trainercard";
import {Box, Grid} from "@material-ui/core";
import axios from "axios";


export default function TrainerList({pageId}){

    const [trainers, setTrainers] = useState([]);
  
    useEffect(() => {
      axios.get(`/media?parent=${pageId}&per_page=100`)
      .then((res) => {
        let sorted = res.data.sort((a, b) => a.title.rendered > b.title.rendered ? 1 : -1)
        setTrainers(sorted);
      })
    }, [pageId])
      
      
      return (
      <Box pt={3}>
        <Grid container spacing={3}>
          {
            trainers.map((trainer) => 
              <Grid key={trainer.id} item sm={4} xs={12}>
                <TrainerCard trainer={trainer} />
              </Grid>
            )
          }              
        </Grid>
      </Box>
      )
  }