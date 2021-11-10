import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './LogActivity.css';
import ActivityForm from '../../ActivityForm/ActivityForm.js'

function LogActivity(props) {
 
    const [loggedIn, setloggedIn] = useState(false);

    useEffect(() => props.onSetActivityData({
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
    }), [])

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
            "title": props.activityData['title'],
            "rating": props.activityData['rating'],
            "routeType": props.activityData['routeType'],
            "description": props.activityData['description'],
            "date": props.activityData['date'],
            "location": props.activityData['location'],
            "climbsCompleted": props.activityData['climbsCompleted'],
            "toughestRouteCompleted": props.activityData['toughestRouteCompleted'],
            "imageLink": props.activityData['imageLink'],
            "youtubeLink": props.activityData['youtubeLink'],
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
            activityData={props.activityData}
            onFormChange={props.onFormChange}
            onSaveActivity={logActivity}
            />
        </div>
    );
}

export default LogActivity;