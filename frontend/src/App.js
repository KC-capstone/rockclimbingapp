import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Index from './components/pages/Index/Index.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/pages/Profile/Profile.js';
import Climbs from './components/pages/Climbs/Climbs.js';
import ClimbDetail from './components/pages/ClimbDetail/ClimbDetail.js';
import LogActivity from './components/pages/LogActivity/LogActivity.js';

function App() {

  return (
    <div>
        <Switch>
          <Route exact path='/' component={Index} />
          <div className="pageCenter">
            <Nav />
            <Route exact path='/profile/' component={Profile} />
            <Route exact path='/climbs/' component={Climbs} />
            <Route exact path='/climbDetail/' component={ClimbDetail} />
            <Route exact path='/logActivity/' component={LogActivity} />
          </div>
        </Switch>
        </div>
  );
}

export default App;
