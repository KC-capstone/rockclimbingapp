import React from 'react';
import defaultProfile from '../../../assets/profileDefault.png';
import profileBackground from '../../../assets/profileBackground.jpg';
import exampleClimb from '../../../assets/exampleClimb.jpg';
import Nav from '../../Nav/Nav.js';

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
        <div class="climbCard climbCard--shadow profileBlock--center">
            <div class="climbCard--positionOne">
                <div class=".climbCard--smallOne">
                    <p class="climbCard__title"><a class="cardLink" href="./climbDetail.html">Brooklyn Boulders, Partner Climb</a></p>
                </div>
                <div class="climbCard--smallThree">
                    <p class="climbCard__detail">Date: Feb 14, 2019</p>
                    <p class="climbCard__detail">Climbs: 6</p>
                    <p class="climbCard__detail">Toughest climb: V3</p>
                    <div class="climbCard__desc">
                        <p class="climbCard__desc--overflow">Absolutely loved this! I'd never heard of this before, but they set up a climd that could only be completed with two people! The first pat of the climb wasn't unusual, but then you reach a point where you can't continue without one partner helping the other. We finished it by having one person grab the other's leg and lifting themselves up. Both partners have to top out to complete the climb. Hope they do this again next year!</p>
                    </div>
                </div>
            </div>
                <div class="climbCard__pictureBox climbCard--smallTwo">
                    <img class="climbCard__pictureBox--pic" src="./images/exampleClimb.jpg" />       
            </div>
        </div>
        <div class="climbCard climbCard--shadow profileBlock--center">
            <div class="climbCard--positionOne">
                <div class=".climbCard--smallOne">
                    <p class="climbCard__title"><a class="cardLink" href="./climbDetail.html">Brooklyn Boulders, Partner Climb</a></p>
                </div>
                <div class="climbCard--smallThree">
                    <p class="climbCard__detail">Date: Feb 14, 2019</p>
                    <p class="climbCard__detail">Climbs: 6</p>
                    <p class="climbCard__detail">Toughest climb: V3</p>
                    <div class="climbCard__desc">
                        <p class="climbCard__desc--overflow">Absolutely loved this! I'd never heard of this before, but they set up a climd that could only be completed with two people! The first pat of the climb wasn't unusual, but then you reach a point where you can't continue without one partner helping the other. We finished it by having one person grab the other's leg and lifting themselves up. Both partners have to top out to complete the climb. Hope they do this again next year!</p>
                    </div>
                </div>
            </div>
                <div class="climbCard__pictureBox climbCard--smallTwo">
                    <img class="climbCard__pictureBox--pic" src="./images/exampleClimb.jpg" />       
            </div>
        </div>
        <div class="climbCard climbCard--shadow profileBlock--center">
            <div class="climbCard--positionOne">
                <div class=".climbCard--smallOne">
                    <p class="climbCard__title"><a class="cardLink" href="./climbDetail.html">Brooklyn Boulders, Partner Climb</a></p>
                </div>
                <div class="climbCard--smallThree">
                    <p class="climbCard__detail">Date: Feb 14, 2019</p>
                    <p class="climbCard__detail">Climbs: 6</p>
                    <p class="climbCard__detail">Toughest climb: V3</p>
                    <div class="climbCard__desc">
                        <p class="climbCard__desc--overflow">Absolutely loved this! I'd never heard of this before, but they set up a climd that could only be completed with two people! The first pat of the climb wasn't unusual, but then you reach a point where you can't continue without one partner helping the other. We finished it by having one person grab the other's leg and lifting themselves up. Both partners have to top out to complete the climb. Hope they do this again next year!</p>
                    </div>
                </div>
            </div>
                <div class="climbCard__pictureBox climbCard--smallTwo">
                    <img class="climbCard__pictureBox--pic" src="./images/exampleClimb.jpg" />       
            </div>
        </div>
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
