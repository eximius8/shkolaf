import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import TabsWithElems from "../components/legal";
import FlexContent from "../components/flexcontent";


const useStyles = makeStyles((theme) => ({ 
    noImage: {      
      padding: theme.spacing(10, 0, 0),      
    },
    withImage:{
        padding: theme.spacing(2, 0, 0),
    },
    divImg: {
      paddingTop: theme.spacing(7),
      display: "inline-block",
      overflowY: "hidden",     
      width: "100%",
  },   
  })); 




export default function ForSportsmenPage(){
  const classes = useStyles();
  const [tabs, setTabs] = useState([]);
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [bgimage, setBgimage] = useState(null);

  useEffect(() => {
    let tabs = [];
    let i =0;
    axios.get(`/pages/2180`)
    .then((res) => {      
      setTitle(res.data.title.rendered);
      setContent(res.data.content.rendered);
    })
    axios.get(`/pages?parent=2180`)
    .then((res) => {      
        res.data.forEach(tabel => {        
          tabs.push({ 
          content: <FlexContent pageId={tabel.id} />,
          label: tabel.title.rendered,
          num: i
          });
          i++;
        });
        setTabs(tabs);
      })
    axios.get(`/media?parent=2180`)
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
          <Container maxWidth="md" className={bgimage ? classes.withImage : classes.noImage}>
            <Box component={Paper} mx={3} mb={2}  p={2}>
                <Typography variant="h4">{title}</Typography>
                <Typography component="div" dangerouslySetInnerHTML={{ __html: content}} />
            </Box>
            <TabsWithElems tabs={tabs} />
          </Container>
      </div>
    </>
  )
}