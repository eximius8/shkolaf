import React, {useState, useEffect} from "react";
import {Paper, Box} from "@material-ui/core";
import axios from "axios";


export default function FlexContent({pageId}){
    const [postdata, setPostData] = useState(null);    
  
    useEffect(() => {      
      axios.get(`/pages/${pageId}`)
      .then((res) => {      
        console.log(res.data);
        setPostData(res.data);
      })   
  
    }, [pageId])
  
  
    return(        
        <Box my={2} component={Paper} p={2}>
            {postdata && <div dangerouslySetInnerHTML={{ __html: postdata.content.rendered}} />}
        </Box>      
    )
  }