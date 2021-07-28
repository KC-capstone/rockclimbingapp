import React from 'react';
import exampleClimb from '../../../assets/exampleClimb.jpg';
import Nav from '../../Nav/Nav.js';
import ClimbCard from '../../ClimbCard/ClimbCard.js';

function Climbs() {
  return (
      <div>
    <div class="pageCenter">
    <Nav />
    <div class="searchContainer">
        <div class="searchBar">   

            <div class="searchCity">
                <input type="text" class="searchCityin" placeholder="Gym Name" />
            </div>
            <div class="searchDivider">
            </div>
            <div class="searchRestaurant">
                <input type="text" class="searchRestaurantIn" placeholder="Date Range" />
            </div>
            <div class="searchDivider">
            </div>
            <div class="searchRestaurant">
                <input type="text" class="searchRestaurantIn" placeholder="Difficulty" />
            </div>
        </div>

    </div>
    <div class='pageCenter'>
        <ClimbCard />
        <ClimbCard />
        <ClimbCard />
        <div class="center">
            <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" class="active">2</a>
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
