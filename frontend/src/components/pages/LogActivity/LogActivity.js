import React, { useState } from 'react';
import Nav from '../../Nav/Nav.js';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import './LogActivity.css';



function LogActivity() {

    const [title, setTitle] = useState('Rock Climb');
    const [rating, setRating] = useState();
    const [routeType, setRouteType] = useState('Bouldering');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [climbsCompleted, setClimbsCompleted] = useState('');
    const [toughestRouteCompleted, setToughestRouteCompleted] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');

    const routeTypeOptions = [
        'Bouldering',
        'Top Rope',
        'Lead Climb',
        'Outdoor Bouldering',
        'Outdoor Top Rope',
        'Outdoor Lead Climb',
    ];
    const routeRatings = ['VB', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8+',];

// My gosh, I hope I can figure out this CSRF thing.



function logActivity() {
    console.log('function: logActivity')
    
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.defaults.headers.common = {
        "Content-Type": "application/json"
      }
      
    let activityPost = JSON.stringify({
        "title": title,
        "rating": rating,
        "routeType": routeType,
        "description": description,
        "date": date,
        "location": location,
        "climbsCompleted": climbsCompleted,
        "toughestRouteCompleted": toughestRouteCompleted,
        "imageLink": imageLink,
        "youtubeLink": youtubeLink,
    });
    console.log(activityPost);
    
    axios.post('/logactivity', activityPost/*, {
        headers: {
            'Content-Type': 'application/json'
        }
      } */)
        
}




  return (
      <div>
    <div className="pageCenter">
    <Nav />
    <h1>Log your Activity</h1>
    <div className="logActivityForm">
       
            
            <div className="logActivityForm__rows">
                <div className="logActivityForm__rows--spacing">
                    <legend>Title</legend>
                    <input type="text" id="title"
                        value={title}
                        onChange={ev => setTitle(ev.target.value)}
                        required/>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Rating</legend>
                    <input type="number" id="Rating" name="rating" min="0" max="5" step="1" value={rating} onChange={ev => setRating(ev.target.value)} required />    
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Route Type</legend>
                    <select id="route_type"
                        value={routeType}
                        onChange={ev => setRouteType(ev.target.value)}
                        required>
                        {routeTypeOptions.map(type =>(
                            <option key={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Description</legend>
                    <textarea rows="5" cols = "60" maxLength="1000" id="description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}></textarea>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Date</legend>
                    <input type="date" placeholder="Date" required
                    value={date}
                    onChange={ev => setDate(ev.target.value)}
                    />
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Location</legend>
                    <input type="text" id="location"required
                    value={location}
                    onChange={ev => setLocation(ev.target.value)}
                    />
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend># of Climbs Completed</legend>
                    <input type="number" id="climbsCompleted" min="0" step="1" required
                    value={climbsCompleted}
                    onChange={ev => setClimbsCompleted(ev.target.value)}
                    />
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Toughest Route Completed:</legend>
                    <select id="route_type" value={toughestRouteCompleted}
                        onChange={ev => setToughestRouteCompleted(ev.target.value)}
                        required>
                        {routeRatings.map(type =>(
                            <option key={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Image Link (optional)</legend>
                    <input type="url" placeholder="Image Upload" 
                    value={imageLink}
                    onChange={ev => setImageLink(ev.target.value)}
                    />
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>YouTube Link (optional)</legend>
                    <input type="url" placeholder="YouTube Link (optional)"
                    value={youtubeLink}
                    onChange={ev => setYoutubeLink(ev.target.value)}
                    />
                </div>
                
            </div>
            <div className="logActivityForm__rows--spacing">
                <button className="buttonSubmit buttonSubmit__green" onClick={logActivity} >Save</button>
                <Link to="./profile">
                    <button className="buttonSubmit buttonSubmit__black">Cancel</button>
                </Link>
            </div>
            

           
    </div>
    
</div>

    </div>
  );
}

export default LogActivity;
