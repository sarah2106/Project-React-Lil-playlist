import React from "react";
import "./App.css";
import SongOverview from "./songOverview";
import Nav from './Nav';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
            <header><img src="/images/music1.png" alt=""></img></header>
    <Nav />
      <SongOverview />
    
      <Switch>
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
}

const Home =() => (
  <div>

  </div>
);

export default App