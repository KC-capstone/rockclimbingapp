import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Index from './components/pages/Index/Index.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/pages/Profile/Profile.js';
import Climbs from './components/pages/Climbs/Climbs.js';
import ClimbDetail from './components/pages/ClimbDetail/ClimbDetail.js';
import LogActivity from './components/pages/LogActivity/LogActivity.js';
import EditActivity from './components/pages/EditActivity/EditActivity.js';

function App() {
  const [activityData, setActivityData] = useState({
    "title": '',
    "rating": '',
    "routeType": '',
    "description": '',
    "date": '',
    "location": '',
    "climbsCompleted": '',
    "toughestRouteCompleted": '',
    "imageLink": '',
    "youtubeLink": '',
    "climbID": '',
});
const [showEditYN, setShowEditYN] = useState(false);
function onFormChange (ev) {
  const {name, value} = ev.target;
  setActivityData({
    ...activityData,
    [name]: value,
  });
}
function getSpecificActivity(parm) {
  console.log('function: getSpecificActivity', parm)
  console.log('Checkpoint A')
  fetch('/climbdetail/' + parm)
  .then((r) => r.json())
  .then((result) => {
      const data = result['data']
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
                activityData={activityData}
                onSetActivityData={setActivityData}
                onGetSpecificActivity={getSpecificActivity}
                showEditYN={showEditYN} />
                
              )}
            />
            <Route exact path='/logActivity/' 
              render={(props) => (
                <LogActivity {...props}
                activityData={activityData}
                onFormChange={onFormChange}
                onSetActivityData={setActivityData} />
              )}
            />
            <Route exact path='/climbDetail/:id/edit/'  
              render={(props) => (
                <EditActivity {...props}
                activityData={activityData}
                onFormChange={onFormChange} />
              )}
            />
          </div>
    </Switch>
    </div>

  );
}

export default App;
