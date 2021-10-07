import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons/faPlusSquare.js'
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav">
        <Link className="nav__link" to="/profile">
          <div>Profile</div>
        </Link>
        <Link  className="nav__link" to="#">
          <div>Stats</div>
        </Link>
        <Link  className="nav__link" to="/climbs">
          <div>Climbs</div>
        </Link>
        <Link  className="nav__link nav__link--logActivity" to="/logActivity">
            <div className="nav__link--centerContainer">
                <div className="nav__link--center">
                    <FontAwesomeIcon icon={faPlusSquare} />
                </div>
            </div>
        </Link>
    </div>
  );
}

export default Nav;
