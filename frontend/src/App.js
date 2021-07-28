import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Index from './components/pages/Index/Index.js';
import Profile from './components/pages/Profile/Profile.js';
import Climbs from './components/pages/Climbs/Climbs.js';
import ClimbDetail from './components/pages/ClimbDetail/ClimbDetail.js';

function App() {
  const [page, setPage] = useState("profile");

  function onProfileClick() {
    setPage('profile');
  }

  return (
    <div>

    <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/profile/' component={Profile} />
          <Route exact path='/climbs/' component={Climbs} />
    </Switch>
    </div>
  );
}

export default App;
