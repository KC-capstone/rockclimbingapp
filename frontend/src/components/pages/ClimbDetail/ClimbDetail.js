import React from 'react';
import defaultProfile from '../../../assets/profileDefault.png';
import starFilled from '../../../assets/starFilled.png';
import Nav from '../../Nav/Nav.js';

function ClimbDetail() {
  return (
    <div className="pageCenter">
    <Nav />
        <div className="profileBlock profileBlock--spaceBetween">
            <div className="climbDetailOverview__img">
                <img src={defaultProfile} />
            </div>
            <div className="climbDetailOverview__title">
                <h1>Brooklyn Boulders, Partner Climb</h1>
            </div>
            <div className="climbDetailOverview__rating">
                <img className="climbDetailOverview__rating--icon" src={starFilled} />
                <img className="climbDetailOverview__rating--icon" src={starFilled} />
                <img className="climbDetailOverview__rating--icon" src={starFilled} />
                <img className="climbDetailOverview__rating--icon" src={starFilled} />
                <img className="climbDetailOverview__rating--icon" src={starFilled} />
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">Rating: V2</p>
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">Primary Route type: Bouldering</p>
            </div>
            <div className="climbDetailOverview__date">
                <p>Feb 14, 2019</p>
            </div>
        </div>
    <div class='pageCenter'>
        <div className="profileBlock profileBlock--spaceBetween">
            <p className="climbDetailOverview__desc">Absolutely loved this! I'd never heard of this before, but they set up a climd that could only be completed with two people! The first pat of the climb wasn't unusual, but then you reach a point where you can't continue without one partner helping the other. We finished it by having one person grab the other's leg and lifting themselves up. Both partners have to top out to complete the climb. Hope they do this again next year!</p>
        </div>
        <div className="climbDetailOverview__youTube">
            <iframe width="420" height="315"
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
