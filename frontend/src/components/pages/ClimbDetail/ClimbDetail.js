 import React, { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons/faPenSquare.js'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt.js'
import defaultProfilePicture from '../../../assets/profileDefault.png';
import starFilled from '../../../assets/starFilled.png';
import './ClimbDetail.css';

function ClimbDetail(props) {

    const parm = useParams()['id'];
    const [activityDeletedYN, setActivityDeletedYN] = useState(false);
    useEffect(() => props.onGetSpecificActivity(parm), [])

    function getCookie(name) {
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
        return cookieValue;
    };

    function deleteActivity(parm) {
        console.log('function: deleteActivity', parm)
        const csrftoken = getCookie('csrftoken');
        fetch('/climbdetail/' + parm, {
            method: "DELETE",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'X-CSRFToken': csrftoken,
                "Content-Type": "application/json",
            },
            referrerPolicy: 'no-referrer',
            body: null,
            })
        .then(function (response) {
            console.log('deleteActivity response:', response);
            if (response['status'] == 200) {setActivityDeletedYN(true);}
          })
          .catch(function (error) {
            console.log('Here\s the error:', error);
          });
    }

  return (
    <div>
        {
                activityDeletedYN ? (
                    <Redirect to="/profile"/>
                ) : null
            }
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
            {props.showEditYN ? 
            
                <div className="climbDetailOverview__Icon">
                    <Link to={"/climbDetail/" + parm + "/edit/"}>
                        <div className="climbDetailOverview__Icon-spacing" >
                            <FontAwesomeIcon icon={faPenSquare} />
                        </div>
                    </Link>
                    <div onClick={() => deleteActivity(parm)} className="climbDetailOverview__Icon-spacing" >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </div>

                </div>
           
            
            : null}
            
                
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
