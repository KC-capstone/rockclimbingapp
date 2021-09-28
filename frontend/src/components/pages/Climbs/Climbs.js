import React, { useState, useEffect } from 'react';
import ClimbCard from '../../ClimbCard/ClimbCard.js';
import './Climbs.css';

function Climbs() {

    const [activityData, setActivityData] = useState([]);


    useEffect(getClimbDetailData, []);

    function getClimbDetailData() {
        console.log('getClimbDetailData');
        fetch('/climb_detail_all_climbs')
        .then(response => response.json())
        .then(data => {
        console.log('Got data from Django!');
        console.log(data);
        let activityIDArray = data['activityIDs'];
        let activityRenderData = [];
        for (let activity of activityIDArray) {
            console.log('activity:', activity)
            activityRenderData.push({
                "title": data['activities'][activity]['title'],
                "rating": data['activities'][activity]['rating'],
                "routeType": data['activities'][activity]['routeType'],
                "description": data['activities'][activity]['description'],
                "date": data['activities'][activity]['date'],
                "location": data['activities'][activity]['location'],
                "climbsCompleted": data['activities'][activity]['climbsCompleted'],
                "toughestRouteCompleted": data['activities'][activity]['toughestRouteCompleted'],
                "imageLink": data['activities'][activity]['imageLink'],
                "youtubeLink": data['activities'][activity]['youtubeLink'],
                "climbID": data['activities'][activity]['climbID'],
            })
        } 
        setActivityData(activityRenderData);
        });
    }


  
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
            {activityData.map(activity => (
                <ClimbCard 
                activityData={activity}/>
            ))}
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
