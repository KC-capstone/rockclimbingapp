import React from 'react';
import './ActivityForm.css';
import { Link } from 'react-router-dom';

function ActivityForm(props) {
  const routeTypeOptions = [
    'Bouldering',
    'Top Rope',
    'Lead Climb',
    'Outdoor Bouldering',
    'Outdoor Top Rope',
    'Outdoor Lead Climb',
];
  const routeRatings = ['VB', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8+',];

  return (
    <div>
             <div className="logActivityForm">
                <div className="logActivityForm__rows">

                    <div className="logActivityForm__rows--spacing">
                        <legend>Title</legend>
                        <input type="text" id="title" name="title"
                            value={props.activityData.title}
                            onChange={props.onFormChange}
                            required/>
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>Rating</legend>
                        <input type="number" id="Rating" name="rating" min="0" max="5" step="1"
                        value={props.activityData.rating}
                        onChange={props.onFormChange} required />    
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>Route Type</legend>
                        <select id="route_type" name= "route_type"
                            value={props.activityData.routeType}
                            onChange={props.onFormChange}
                            required>
                            {routeTypeOptions.map(type =>(
                                <option key={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>Description</legend>
                        <textarea rows="5" cols = "60" maxLength="1000" id="description" name = "description"
                        value={props.activityData.description}
                        onChange={props.onFormChange}></textarea>
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>Date</legend>
                        <input type="date" placeholder="Date" name="date" required
                        value={props.activityData.date}
                        onChange={props.onFormChange}
                        />
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>Location</legend>
                        <input type="text" id="location" name="location" required
                        value={props.activityData.location}
                        onChange={props.onFormChange}
                        />
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend># of Climbs Completed</legend>
                        <input type="number" name="climbsCompleted" id="climbsCompleted" min="0" step="1" required
                        value={props.activityData.climbsCompleted}
                        onChange={props.onFormChange}
                        />
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>Toughest Route Completed:</legend>
                        <select id="route_type" name='route_type' value={props.activityData.toughestRouteCompleted}
                            onChange={props.onFormChange}
                            required>
                            {routeRatings.map(type =>(
                                <option key={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>Image Link (optional)</legend>
                        <input type="url" name="imageLink" placeholder="Image Upload" 
                        value={props.activityData.imageLink}
                        onChange={props.onFormChange}
                        />
                    </div>

                    <div className="logActivityForm__rows--spacing">
                        <legend>YouTube Link (optional)</legend>
                        <input type="url" name="youtubeLink" placeholder="YouTube Link (optional)"
                        value={props.activityData.youtubeLink}
                        onChange={props.onFormChange}
                        />
                    </div>
                    
                </div>
                
                {/* create a field that contains the user data? */}

                <div className="logActivityForm__rows--spacing">
                    <button className="buttonSubmit buttonSubmit__green" onClick={props.onLogActivity} >
                        Save
                    </button>
                    <Link to="./profile">
                        <button className="buttonSubmit buttonSubmit__black">Cancel</button>
                    </Link>
                </div>
                
            </div>
        </div>
  );
}

export default ActivityForm;
