import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';

import Index from './components/pages/Index/Index.js';
import Profile from './components/pages/Profile/Profile.js';
import ClimbDetail from './components/pages/ClimbDetail/ClimbDetail.js';

function App() {
  return (
    <Router>
    <div className="App">
      <h3 className="App-title">Cool Animals</h3>

      <Link to="/">Index</Link>
      <Link to="/profile/">Stuff about profiles</Link>
      <Link to="climb-detail/">Also stuff on climb details</Link>

      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/profile/' component={Profile} />
        <Route exact path='/climb-detail/' component={ClimbDetail} />
      </Switch>

      <p>Copyright 1997 - All Rights Reserved</p>
    </div>
    </Router>
  );
}

export default App;
