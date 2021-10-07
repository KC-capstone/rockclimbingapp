import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios  from 'axios';
import './LogActivity.css';
import ActivityForm from '../../ActivityForm/ActivityForm.js'

import { fromStringWithSourceMap } from 'source-list-map';


// LogActivity function, we appear to define the state variables and some constants.
// The state variables comprise each possible form entry for an activity log.
// The other variables defined are to DRY some of the form entries.

function LogActivity() {

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
  
    const [loggedIn, setloggedIn] = useState(false);

    function onFormChange (ev) {
    	const {name, value} = ev.target;
    	setActivityData({
    		...activityData,
    		[name]: value,
    	});
    }

    
    function logActivity() {
        console.log('function: logActivity')
        
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        }
        
        let activityPost = JSON.stringify({
            "title": activityData['title'],
            "rating": activityData['rating'],
            "routeType": activityData['routeType'],
            "description": activityData['description'],
            "date": activityData['date'],
            "location": activityData['location'],
            "climbsCompleted": activityData['climbsCompleted'],
            "toughestRouteCompleted": activityData['toughestRouteCompleted'],
            "imageLink": activityData['imageLink'],
            "youtubeLink": activityData['youtubeLink'],
        });

        console.log('activity post:', activityPost);
        let config = {
            url: '/logactivity',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        axios.post('/logactivity', activityPost, config)
        .then(function (response) {
            console.log(response);
            setloggedIn(true);
          })
          .catch(function (error) {
            console.log('Here\s the error:', error);
          });
    }


    return ( 
        <div>
            {
                loggedIn ? (
                    <Redirect to="/profile"/>
                ) : null
            }
            <h1>Log your Activity</h1>
            <ActivityForm 
            activityData={activityData}
            onFormChange={onFormChange}
            onLogActivity={logActivity}
            />
        </div>
    );
}

export default LogActivity;