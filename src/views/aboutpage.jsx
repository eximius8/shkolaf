import React, { useEffect, useState } from "react";
import { Container, Paper, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import axios from "axios";
import TabsWithElems from "../components/legal";
import FlexContent from "../components/flexcontent";


const useStyles = makeStyles((theme) => ({ 
    heroContent: {      
      padding: theme.spacing(10, 0, 3),      
    },
    divImg: {
      paddingTop: theme.spacing(1),
      display: "inline-block",
      overflowY: "hidden",     
      width: "100%",
  },   
  })); 



export default function AboutPage(){
  const [postdata, setPostData] = useState(null);
  const classes = useStyles();
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    let i = 0;
    let tabs = [];    
    axios.get(`/pages/121`)
    .then((res) => {
      setPostData(res.data);
    })
    axios.get(`/pages?parent=121`)
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
  }, [])


  return(
      <div className={classes.heroContent} >        
          <Container maxWidth="md">
              <Box p={2} mb={2} component={Paper}>
                {postdata && <div dangerouslySetInnerHTML={{ __html: postdata.content.rendered}} />}
              </Box>
              
            {/* <h2>{title}</h2>     */}   
            <TabsWithElems tabs={tabs} />
           
          
          </Container>
      </div>  
  )
}