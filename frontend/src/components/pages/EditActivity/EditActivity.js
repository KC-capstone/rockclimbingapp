import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './EditActivity.css';
import ActivityForm from '../../ActivityForm/ActivityForm.js'

function EditActivity(props) {
 
    const [loggedIn, setloggedIn] = useState(false);
    const parm = useParams()['id'];
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
    };
    
    function editActivity(parm=null) {
        console.log('function: editActivity')
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

        const csrftoken = getCookie('csrftoken');
        fetch('/editactivity' + parm, {
            method: "PUT",
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
                    <Redirect to={"/climbDetail/" + parm}/>
                ) : null
            }
            <h1>Edit Activity</h1>
            <ActivityForm 
            activityData={props.activityData}
            onFormChange={props.onFormChange}
            onSaveActivity={editActivity}
            />
        </div>
    );
}

export default EditActivity;