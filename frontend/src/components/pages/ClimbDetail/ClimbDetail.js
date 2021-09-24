import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import defaultProfile from '../../../assets/profileDefault.png';
import starFilled from '../../../assets/starFilled.png';
import './ClimbDetail.css';

function ClimbDetail() {
    
    const [activityData, setActivityData] = useState({
        "title": 'Title not found',
        "rating": 3,
        "routeType": 'Bouldering',
        "description": 'Placeholder',
        "date": '2/14/19',
        "location": 'Placeholder',
        "climbsCompleted": 'Placeholder',
        "toughestRouteCompleted": 'Placeholder',
        "imageLink": 'Placeholder',
        "youtubeLink": 'Placeholder',
    });

    
    useEffect(getActivity, [])

    function getActivity() {
        console.log('function: getActivity')
        
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        }
        /*
        let activityPost = JSON.stringify({
            "title": title,
            "rating": rating,
            "routeType": routeType,
            "description": description,
            "date": date,
            "location": location,
            "climbsCompleted": climbsCompleted,
            "toughestRouteCompleted": toughestRouteCompleted,
            "imageLink": imageLink,
            "youtubeLink": youtubeLink,
        });
        */
        //console.log('activity get:', activityPost);
        let config = {
            url: '/climbDetail',
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        fetch('/climbdetail')
        .then((r) => r.json())
        //.then((data) => console.log(data))
        .then((data) => 
            setActivityData({
                "title": data['title'],
                "rating": data['rating'],
                "routeType": data['routeType'],
                "description": data['description'],
                "date": data['date'],
                "location": data['location'],
                "climbsCompleted": 'climbsCompleted',
                "toughestRouteCompleted": data['toughestRouteCompleted'],
                "imageLink": data['imageLink'],
                "youtubeLink": data['youtubeLink'],
            })
            
            )
        
        
        
        .catch((e) => console.log('Boo! Something went wrong.'));
    }

    
    





  return (
    <div>
        <div className="profileBlock profileBlock--spaceBetween">
            <div className="climbDetailOverview__img">
                <img src={defaultProfile} alt="climber-stick-figure"/>
            </div>
            <div className="climbDetailOverview__title">
                <h1>{activityData['title']}</h1>
            </div>
            <div className="climbDetailOverview__rating">
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">{activityData['toughestRouteCompleted']}</p>
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">Primary Route type: {activityData['routeType']}</p>
            </div>
            <div className="climbDetailOverview__date">
                <p>{activityData['date']}</p>
            </div>
        </div>

        <div className="profileBlock profileBlock--spaceBetween">
            <p className="climbDetailOverview__desc">{activityData['description']}</p>
        </div>
        <div className="climbDetailOverview__youTube">
            <iframe width="420" height="315" title="muppets=bohemian-rhapsody-youtube"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
        <div className="climbDetailOverview__imageCarousel">
            <p>TBD: i'll add a React-powered image carousel.</p>
        </div>
    </div>
  );
}

export default ClimbDetail;
