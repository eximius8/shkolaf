
import React from "react";

import Header from "./components/header";
import Footer from "./components/footer"; 
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router";


import Home from "./views/homepage";
import NewsPage from "./views/newsitempage";
import NewsMain from "./views/newspage";

import { makeStyles } from '@material-ui/core/styles';

import '@n3/react-vision-panel/dist/vision-panel.css';
import "./App.css";


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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news/:id">
            <NewsPage />
          </Route>
          <Route exact path="/news">
            <NewsMain />
          </Route>       
        </Switch>
      </main>    
      <Footer />     
    </React.Fragment>
  );
}

export default App;
