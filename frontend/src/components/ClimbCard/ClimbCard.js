import React from 'react';
import './ClimbCard.css';
import { Link } from 'react-router-dom';
import exampleClimb from '../../assets/exampleClimb.jpg';

function ClimbCard(props) {
/*
  const card = document.querySelector(".climbCard")
  const cardLink = document.querySelector(".cardLink")
  
  card.addEventListener("click", handleClick)
  
  function handleClick(event) {
  
    const isTextSelected = window.getSelection().toString();
    if (!isTextSelected) {
      cardLink.click();
    }
  }
*/


  return (
    <Link to="/climbDetail" className="climbCard--defaultStyling">
    <div className="climbCard climbCard--shadow profileBlock--center">
      <div className="climbCard--positionOne">
          <div className=".climbCard--smallOne">
              <p className="climbCard__title">Brooklyn Boulders, Partner Climb</p>
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
          <img className="climbCard__pictureBox--pic" src={exampleClimb} />       
      </div>
    </div>
    </Link>
  );
}

export default ClimbCard;
