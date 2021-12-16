import React from 'react';
import { useHistory } from "react-router-dom";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons/faPlusSquare.js'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt.js'
import { Link } from 'react-router-dom';

function Nav(props) {

  const history = useHistory();

  function logout() {
    fetch('/account/logout')
    //.then(response => response.json())
    //.then(data => history.push("/"));
    .then(data => {
      window.location="/"
    })
  };

  return (
    <div className="nav">
        <div  className="nav__link nav__link--logActivity" onClick={logout}>
            <div className="nav__link--centerContainer">
                <div className="nav__link--center">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span class="nav__link--tooltip">Log Out</span>
                </div>
            </div>
        </div>
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
