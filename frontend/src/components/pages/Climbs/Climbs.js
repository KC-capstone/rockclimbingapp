import React, { useState, useEffect } from 'react';
import ClimbCard from '../../ClimbCard/ClimbCard.js';
import './Climbs.css';

function Climbs() {

    const [activityData, setActivityData] = useState([]);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i)
    //console.log('Here\s that range example!', range(0,2));

    useEffect(getClimbDetailData, []);

    function getClimbDetailData(startPage=1) {
        console.log('getClimbDetailData', startPage);
        const startPos = startPage*3 - 3;
        fetch('/climb_detail_all_climbs?startPos=' + startPos)
        .then(response => response.json())
        .then(data => {
        console.log('Got data from Django!');
        console.log(data);
        let activityIDArray = data['activityIDs'];
        let activityRenderData = [];
        for (let activity of activityIDArray) {
            //console.log('activity:', activity)
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
        console.log('number of results:', data['details']['total_number_of_activities'], Math.ceil((data['details']['total_number_of_activities'])/3))
        setActivityData(activityRenderData);
        setPages(Math.ceil((data['details']['total_number_of_activities']/3)));
        //console.log('pages:', pages)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        })
        //.then();
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
            
                <span href="#">&laquo;</span>
                {range(1,pages).map(page => (
                {...page === currentPage ? <span className="active" onClick={() => getClimbDetailData(page)}>{page}</span> : <span onClick={() => getClimbDetailData(page)}>{page}</span>}
            ))}
                <span href="#">&raquo;</span>
            </div>
        </div>

        <script type="text/javascript" src="./js/cardClick.js"></script>
    </div>
  );
}

export default Climbs;
