import React from 'react';
import {useEffect} from 'react';
import './styles.css';
import './profile.css';
import defaultProfile from '../../../assets/profileDefault.png';
import profileBackground from '../../../assets/profileBackground.jpg';
import ClimbCard from '../../ClimbCard/ClimbCard.js';
import Nav from '../../Nav/Nav.js';

function Profile() {
  
    function getData() {
        console.log('get data function called')
        fetch('/api/just/testing/')
          .then(response => response.json())
          .then(data => {
            console.log('Got data from Django!');
            console.log(data);
          });
      }
      useEffect(getData, []);
  
  return (
    <div className="pageCenter">
    <Nav />
    

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
            <p className="profileBlock__statOverview--num">9</p>
            <p className="profileBlock__statOverview--text">Activities in the last month</p>
        </div>
        <div className="profileBlock__statOverview">
            <p className="profileBlock__statOverview--num">52</p>
            <p className="profileBlock__statOverview--text">Routes Completed</p>
        </div>
        <div className="profileBlock__statOverview">
            <p className="profileBlock__statOverview--num">V4</p>
            <p className="profileBlock__statOverview--text">Toughest Route</p>
        </div>
    </div>

    <ClimbCard />
</div>
  );
}

export default Profile;
