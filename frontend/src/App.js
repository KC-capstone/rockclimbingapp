import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Index from './components/pages/Index/Index.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/pages/Profile/Profile.js';
import Climbs from './components/pages/Climbs/Climbs.js';
import ClimbDetail from './components/pages/ClimbDetail/ClimbDetail.js';
import LogActivity from './components/pages/LogActivity/LogActivity.js';

function App() {
  const [title, setTitle] = useState('Rock Climb');
  const data = 'abcdefg';

  return (
    <div>
        <Switch>
          <Route exact path='/' component={Index} />
          <div className="pageCenter">
            <Nav /> 
            <Route exact path='/profile/' component={Profile} />
            <Route exact path='/climbs/' component={Climbs} />
            <Route exact path='/climbDetail/:id' 
              render={(props) => (
                <ClimbDetail {...props}
                DATAVARIABLE1={data}
                DATAVARIABLE2={data} />
              )}
            />
            <Route exact path='/logActivity/' 
              render={(props) => (
                <LogActivity {...props}
                DATAVARIABLE1={title}
                DATAVARIABLE2={data} />
              )}
            />
          </div>
    </Switch>
    </div>

  );
}

export default App;
