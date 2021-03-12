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
    vidcontainer: {
      position: 'relative',
       width: '100%',
       height: 0,
       paddingBottom: '56.25%'
   },
   video: {
       position: 'absolute',
       top: 0,
       left: 0,
       width: '100%',
       height: '100%'
   }   
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
    <React.Fragment> 
      <div className={classes.heroContent} >
               
        <Container maxWidth="md">
            
            <Box p={0} mb={2} component={Paper}>
              <div className={classes.vidcontainer}>
                <iframe 
                  className={classes.video}
                  src="https://vk.com/video_ext.php?oid=-22957464&id=456239121&hash=c70ae86c37f111f9&hd=2"                   
                  frameBorder="0" 
                  allowFullScreen
                  title="videoaboutus"
                >
                </iframe>
              </div>              
              {false && postdata && <div dangerouslySetInnerHTML={{ __html: postdata.content.rendered}} />}
            </Box>
        </Container>
      </div> 

      
      <TabsWithElems tabs={tabs} />      
               
    </React.Fragment> 
  )
}