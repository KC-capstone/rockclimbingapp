import React from 'react';
import defaultProfile from '../../../assets/profileDefault.png';
import starFilled from '../../../assets/starFilled.png';
import Nav from '../../Nav/Nav.js';
import './ClimbDetail.css';

function ClimbDetail() {

    

    let postDetails = {
        "title": 'Partner Climbing at Brooklyn Boulders',
        "rating": 3,
        "routeType": 'Bouldering',
        "description": 'Placeholder',
        "date": '2/14/19',
        "location": 'Placeholder',
        "climbsCompleted": 'Placeholder',
        "toughestRouteCompleted": 'Placeholder',
        "imageLink": 'Placeholder',
        "youtubeLink": 'Placeholder',
    }
    
  return (
    <div className="pageCenter">
    <Nav />
        <div className="profileBlock profileBlock--spaceBetween">
            <div className="climbDetailOverview__img">
                <img src={defaultProfile} alt="climber-stick-figure"/>
            </div>
            <div className="climbDetailOverview__title">
                <h1>{postDetails['title']}</h1>
            </div>
            <div className="climbDetailOverview__rating">
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">{postDetails['toughestRouteCompleted']}</p>
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">Primary Route type: {postDetails['routeType']}</p>
            </div>
            <div className="climbDetailOverview__date">
                <p>{postDetails['date']}</p>
            </div>
        </div>
    <div className='pageCenter'>
        <div className="profileBlock profileBlock--spaceBetween">
            <p className="climbDetailOverview__desc">{postDetails['description']}</p>
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
</div>
  );
}

export default ClimbDetail;
