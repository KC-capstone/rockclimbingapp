import React from 'react';
import Nav from '../../Nav/Nav.js';
import ClimbCard from '../../ClimbCard/ClimbCard.js';
import './Climbs.css';

function Climbs() {
  return (
      <div>
    <div className="pageCenter">
    <Nav />
    <div className="searchContainer">
        <div className="searchBar">   

            <div className="searchCity">
                <input type="text" className="searchCityin" placeholder="Gym Name" />
            </div>
            <div className="searchDivider">
            </div>
            <div className="searchRestaurant">
                <input type="text" className="searchRestaurantIn" placeholder="Date Range" />
            </div>
            <div className="searchDivider">
            </div>
            <div className="searchRestaurant">
                <input type="text" className="searchRestaurantIn" placeholder="Difficulty" />
            </div>
        </div>

    </div>
    <div className="pageCenter">
        <ClimbCard />
        <ClimbCard />
        <ClimbCard />
        <div className="center">
            <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" className="active">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
        </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="./js/cardClick.js"></script>
    </div>
  );
}

export default Climbs;
