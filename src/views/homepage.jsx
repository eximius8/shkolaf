import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Box, Paper} from "@material-ui/core";

import MainBanner from "../components/banner";
import NewsItems from "../components/news";
import TabsWithElems from "../components/legal";
import axios from "axios";
import FlexContent from "../components/flexcontent";





const useStyles = makeStyles((theme) => ({ 
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

function Video60(){
  const classes = useStyles();

  return(
    <Box p={0} my={2} component={Paper}>
      <div className={classes.vidcontainer}>
        <iframe 
          className={classes.video}
          src="https://vk.com/video_ext.php?oid=-22957464&id=456239121&hash=c70ae86c37f111f9&hd=2"         
          frameborder="0" 
          allowfullscreen
          title="videoaboutus"
        >
        </iframe>
      </div>
    </Box>
  )
}
  


export default function Home() {
  
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    let i = 2;
    let tabs = [{
      content: <NewsItems numitems={6} />,
      num: 0,
      label: "Новости"
    },
    {
      content: <Video60 />,
      num: 1,
      label: "О нас" 
    }
    ];
    axios.get(`/pages?parent=2044`)
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
  },[])

 

  
  return (
    <React.Fragment> 
        <MainBanner />
        <TabsWithElems tabs={tabs} />
        {/* <NewsItems numitems={6} />  */}
    </React.Fragment>
  );
}
