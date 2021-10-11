import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare} from '@fortawesome/free-solid-svg-icons/faPenSquare.js'
import defaultProfilePicture from '../../../assets/profileDefault.png';
import starFilled from '../../../assets/starFilled.png';
import './ClimbDetail.css';

function ClimbDetail(props) {

    const parm = useParams()['id'];
    useEffect(() => props.onGetSpecificActivity(parm), [])

  return (
    <div>
        <div className="profileBlock profileBlock--spaceBetween">
            <div className="climbDetailOverview__img">
                <img src={defaultProfilePicture} alt="climber-stick-figure"/>
            </div>
            <div className="climbDetailOverview__title">
                <h1>{props.activityData['title']}</h1>
            </div>
            <div className="climbDetailOverview__rating">
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
                <img className="climbDetailOverview__rating--icon" src={starFilled} alt="star-icon-filled"/>
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">{props.activityData['toughestRouteCompleted']}</p>
            </div>
            <div>
                <p className="climbDetailOverview__difficulty">Primary Route type: {props.activityData['routeType']}</p>
            </div>
            <div className="climbDetailOverview__date">
                <p>{props.activityData['date']}</p>
            </div>
            <div>
            {props.showEditYN ? <Link to={"/climbDetail/" + parm + "/edit/"}>
                <div className="climbDetailOverview__editIcon">
                    <FontAwesomeIcon icon={faPenSquare} />
                </div>
            </Link> : null}
            
                
            </div>
        </div>

        <div className="profileBlock profileBlock--spaceBetween">
            <p className="climbDetailOverview__desc">{props.activityData['description']}</p>
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
