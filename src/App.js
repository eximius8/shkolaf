
import React from "react";

import Header from "./components/header";
import Footer from "./components/footer"; 
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router";


import Home from "./views/homepage";
import NewsPage from "./views/newsitempage";
import NewsMain from "./views/newspage";
import Employees from "./views/trainerspage";
import AboutPage from "./views/aboutpage";

import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({ 
  mainContent: {    
    minHeight: "90vh",
  },
}));  


function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />     
      <Header />
      <main className={classes.mainContent}>
        <Switch>
          <Route exact path="/react">
            <Home />
          </Route>
          <Route path="/react/news/:id">
            <NewsPage />
          </Route>
          <Route exact path="/react/news">
            <NewsMain />
          </Route>
          <Route exact path="/react/trainers">
            <Employees />
          </Route> 
          <Route exact path="/react/about">
            <AboutPage />
          </Route>               
        </Switch>
      </main>    
      <Footer />     
    </React.Fragment>
  );
}

export default App;
