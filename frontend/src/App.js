import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios  from 'axios';
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
  const [activityData, setActivityData] = useState({
    "title": '---',
    "rating": '-',
    "routeType": '---',
    "description": '---',
    "date": '---',
    "location": '---',
    "climbsCompleted": '---',
    "toughestRouteCompleted": '---',
    "imageLink": '',
    "youtubeLink": '',
    "climbID": '',
});
const [showEditYN, setShowEditYN] = useState(false);
function getSpecificActivity(parm) {
  console.log('function: getSpecificActivity', parm)
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios.defaults.headers.common = {
      "Content-Type": "application/json"
  }
  let config = {
      url: '/climbDetail',
      method: 'get',
      headers: {
          'Content-Type': 'application/json'
      }
  };
  console.log('Checkpoint A')
  fetch('/climbdetail/' + parm)
  .then((r) => r.json())
  .then((data) => {
      //console.log('Got data from Django!');
      //console.log('Here\s data', data);
      const activityID = data['activityIDs'][0];
      setActivityData({
          "title": data['activities'][activityID]['title'],
          "rating": data['activities'][activityID]['rating'],
          "routeType": data['activities'][activityID]['routeType'],
          "description": data['activities'][activityID]['description'],
          "date": data['activities'][activityID]['date'],
          "location": data['activities'][activityID]['location'],
          "climbsCompleted": data['activities'][activityID]['climbsCompleted'],
          "toughestRouteCompleted": data['activities'][activityID]['toughestRouteCompleted'],
          "imageLink": data['activities'][activityID]['imageLink'],
          "youtubeLink": data['activities'][activityID]['youtubeLink'],
          "climbID": parm,
      });
      setShowEditYN(data['showEditYN']);
      
  } )
  .catch((e) => console.log('Boo! Something went wrong.'));
}
  
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
                DATAVARIABLE2={data}
                activityData={activityData}
                //onSetActivityData={ev => setActivityData(ev.target.value)}
                onSetActivityData={setActivityData}
                onGetSpecificActivity={getSpecificActivity}
                showEditYN={showEditYN} />
                
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
