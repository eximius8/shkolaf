import React, {useEffect, useState } from 'react';
import NewsItem from "../components/newspage/newsitem";
import { useParams } from "react-router-dom";
import axios from "axios";



export default function NewsPage() {
    const {id} = useParams();
    const [ post, setPost ] = useState(null);    


    useEffect(() => {
        axios.get(`http://www.sport-school-2.ru/wp-json/wp/v2/posts/${id}`)
        .then((res) => {   
          setPost(res.data);
          console.log(res.data);
        })
      },[id])

  return (
    <React.Fragment>
        {post && <NewsItem post={post} />}
    </React.Fragment>
  );
}
