import React from 'react';
import ClimbCard from '../../ClimbCard/ClimbCard.js';
import './Climbs.css';

function Climbs() {
  return (
    <div>
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

        <div id="climbCardContainer">
            <ClimbCard />
            <ClimbCard />
            <ClimbCard />
        </div>

        <div id="paginationBar" className="center">
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

        <script type="text/javascript" src="./js/cardClick.js"></script>
    </div>
  );
}

export default Climbs;
