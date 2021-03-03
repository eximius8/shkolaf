import React, { useEffect, useState } from "react";
import { Container, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import TabsWithElems from "../components/legal";

import TrainerList from "../components/people/trainerlist";


const useStyles = makeStyles((theme) => ({ 
    heroContent: {      
      padding: theme.spacing(10, 0, 0),      
    },
    divImg: {
      paddingTop: theme.spacing(1),
      display: "inline-block",
      overflowY: "hidden",     
      width: "100%",
  },   
  })); 




export default function Employees(){
  const classes = useStyles();
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [bgimage, setBgimage] = useState(null);

  useEffect(() => {
    let tabs = [];
    let i =0;
    axios.get(`/pages/975`)
    .then((res) => {      
      setTitle(res.data.title.rendered)
    })
    axios.get(`/pages?parent=975`)
    .then((res) => {      
      res.data.forEach(tabel => {
        tabs.push({ 
        content: <TrainerList pageId={tabel.id} />,
        label: tabel.title.rendered,
        num: i
        });
        i++;
      });
      setTabs(tabs);
      setLoading(false); 
    })
    axios.get(`/media?parent=975`)
    .then((res) => {      
      setBgimage(res.data[0]);
    })
  }, [])


  return(
    <>
      {bgimage && 
                <div className={classes.divImg}> 
                    <img width="100%" alt={bgimage.alt} src={bgimage.source_url} />
                </div>
        }  
      <div >        
          <Container maxWidth="md">
            <h2>{title}</h2>       
            <TabsWithElems tabs={tabs} />
            {loading && <CircularProgress />}
          
          </Container>
      </div>
    </>
  )
}