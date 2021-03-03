import React from 'react';

import MainBanner from "../components/banner";
// import NewsItems from "../components/news";
import LegalInfo from "../components/legal";


export default function Home() {
  return (
    <React.Fragment> 
        <MainBanner />
        <LegalInfo />      
        {/* <NewsItems numitems={6} />  */}
    </React.Fragment>
  );
}
