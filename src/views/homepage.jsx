import React, { useEffect, useState } from 'react';

import MainBanner from "../components/banner";
import NewsItems from "../components/news";
import TabsWithElems from "../components/legal";
import axios from "axios";
import FlexContent from "../components/flexcontent";


export default function Home() {
  
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    let i = 1;
    let tabs = [{
      content: <NewsItems numitems={6} />,
      num: 0,
      label: "Новости"
    }];
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
