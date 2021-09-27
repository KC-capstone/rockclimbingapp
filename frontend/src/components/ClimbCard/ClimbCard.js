import React from 'react';
import './ClimbCard.css';
import { Link } from 'react-router-dom';
import exampleClimb from '../../assets/exampleClimb.jpg';

function ClimbCard(props) {

  return (
    <Link to={"/climbDetail/" + props.activityData.climbID} className="climbCard--defaultStyling">
    <div className="climbCard climbCard--shadow profileBlock--center">
      <div className="climbCard--positionOne">
          <div className=".climbCard--smallOne">
              <p className="climbCard__title">{props.activityData.title}</p>
          </div>
          <div className="climbCard--smallThree">
              <p className="climbCard__detail">Date: {props.activityData.date}</p>
              <p className="climbCard__detail">Climbs: {props.activityData.climbsCompleted}</p>
              <p className="climbCard__detail">Toughest climb: {props.activityData.toughestRouteCompleted}</p>
              <div className="climbCard__desc">
                  <p className="climbCard__desc--overflow">{props.activityData.description}</p>
              </div>
          </div>
      </div>
      <div className="climbCard__pictureBox climbCard--smallTwo">
          <img className="climbCard__pictureBox--pic" alt="rock-climbing-wall" src={exampleClimb} />       
      </div>
    </div>
    </Link>
  );
}

export default ClimbCard;
