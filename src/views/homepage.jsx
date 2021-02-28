import React from 'react';

import MainBanner from "../components/banner";
import NewsItems from "../components/news";


export default function Home() {
  return (
    <React.Fragment> 
        <MainBanner />        
        <NewsItems numitems={3} />  
    </React.Fragment>
  );
}
