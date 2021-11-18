import React, { useState, useEffect } from 'react';
import './styles.css';
import './profile.css';
import defaultProfile from '../../../assets/profileDefault.png';
import profileBackground from '../../../assets/profileBackground.jpg';
import ClimbCard from '../../ClimbCard/ClimbCard.js';

function Profile() {
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

    useEffect(getClimbDetailMostRecent, []);

    function getClimbDetailMostRecent() {
        console.log('getClimbDetailMostRecent');
        fetch('/climb_detail_most_recent')
        .then(response => response.json())
        .then(data => {
        console.log('Got data from Django!');
        console.log(data);
        console.log('Rating data', data['activities']['activity']['rating'], parseFloat(data['activities']['activity']['rating']));
        setActivityData({
            "title": data['activities']['activity']['title'],
            "rating": parseFloat(data['activities']['activity']['rating']),
            "routeType": data['activities']['activity']['routeType'],
            "description": data['activities']['activity']['description'],
            "date": data['activities']['activity']['date'],
            "location": data['activities']['activity']['location'],
            "climbsCompleted": data['activities']['activity']['climbsCompleted'],
            "toughestRouteCompleted": data['activities']['activity']['toughestRouteCompleted'],
            "imageLink": data['activities']['activity']['imageLink'],
            "youtubeLink": data['activities']['activity']['youtubeLink'],
            "climbID": data['activities']['activity']['climbID'],
        })
        });
    }
      
  
  return (
    <div>
        <div className="profileBlock profileBlock--center">
            <div className="profileBlock__user">
                <div className="profileBlock__picture">
                    <img className="profileBlock__picture--img" src={defaultProfile} alt="climber-stick-figure"/>
                </div>
                <h4 className="profileBlock__user--name">Greg P</h4>
            </div>
            
            <div className="profileBlock__imgLarge">
                <img className="profileBlock__imgLarge--pic" src={profileBackground} alt="mountain-range"/>
            </div>
        </div>
        <div className="profileBlock profileBlock--spaceAround">
            <div className="profileBlock__statOverview">
                <p className="profileBlock__statOverview--num">WIP</p>
                <p className="profileBlock__statOverview--text">Activities in the last month</p>
            </div>
            <div className="profileBlock__statOverview">
                <p className="profileBlock__statOverview--num">WIP</p>
                <p className="profileBlock__statOverview--text">Routes Completed</p>
            </div>
            <div className="profileBlock__statOverview">
                <p className="profileBlock__statOverview--num">WIP</p>
                <p className="profileBlock__statOverview--text">Toughest Route</p>
            </div>
        </div>

        <ClimbCard 
        activityData={activityData}
        />
    </div>
  );
}

export default Profile;
