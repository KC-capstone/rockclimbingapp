import React from 'react';
import './styles.css';
import defaultProfile from '../../../assets/profileDefault.png';
import profileBackground from '../../../assets/profileBackground.jpg';
import exampleClimb from '../../../assets/exampleClimb.jpg';
import Nav from '../../Nav/Nav.js';

function Profile() {
  return (
    <div className="pageCenter">
    <Nav />
    

    <div className="profileBlock profileBlock--center">
        <div className="profileBlock__user">
            <div className="profileBlock__picture">
                <img className="profileBlock__picture--img" src={defaultProfile}/>
            </div>
            <h4 className="profileBlock__user--name">Greg P</h4>
        </div>
        
        <div className="profileBlock__imgLarge">
            <img className="profileBlock__imgLarge--pic" src={profileBackground}/>
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

    <div className="climbCard climbCard--shadow profileBlock--center">
        <div className="climbCard--positionOne">
            <div className=".climbCard--smallOne">
                <p className="climbCard__title"><a className="cardLink" href="./climbDetail.html">Brooklyn Boulders, Partner Climb</a></p>
            </div>
            <div className="climbCard--smallThree">
                <p className="climbCard__detail">Date: Feb 14, 2019</p>
                <p className="climbCard__detail">Climbs: 6</p>
                <p className="climbCard__detail">Toughest climb: V3</p>
                <div className="climbCard__desc">
                    <p className="climbCard__desc--overflow">Absolutely loved this! I'd never heard of this before, but they set up a climd that could only be completed with two people! The first pat of the climb wasn't unusual, but then you reach a point where you can't continue without one partner helping the other. We finished it by having one person grab the other's leg and lifting themselves up. Both partners have to top out to complete the climb. Hope they do this again next year!</p>
                </div>
            </div>
        </div>
        <div className="climbCard__pictureBox climbCard--smallTwo">
            <img className="climbCard__pictureBox--pic" src={exampleClimb}/>       
        </div>
    </div>
</div>
  );
}

export default Profile;
