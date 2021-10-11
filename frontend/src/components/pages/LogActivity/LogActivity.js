import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './LogActivity.css';
import ActivityForm from '../../ActivityForm/ActivityForm.js'

import { fromStringWithSourceMap } from 'source-list-map';

function LogActivity() {

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
  
    const [loggedIn, setloggedIn] = useState(false);

    function onFormChange (ev) {
    	const {name, value} = ev.target;
    	setActivityData({
    		...activityData,
    		[name]: value,
    	});
    }

    function getCookie(name) {
        console.log('function: getcookie')
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        console.log('cookieValue:', cookieValue);
        return cookieValue;
    }
    
    function logActivity() {
        console.log('function: logActivity')
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
        const csrftoken = getCookie('csrftoken');
        fetch('/logactivity', {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'X-CSRFToken': csrftoken,
                "Content-Type": "application/json",
            },
            referrerPolicy: 'no-referrer',
            body: activityPost,
            })
        .then(function (response) {
            console.log(response);
            if (response['status'] == 200) {setloggedIn(true);}
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