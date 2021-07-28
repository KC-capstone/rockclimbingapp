import React from 'react';
import Nav from '../../Nav/Nav.js';
import { Link } from 'react-router-dom';


function LogActivity() {
  return (
      <div>
    <div className="pageCenter">
    <Nav />
    <h1>Log your Activity</h1>
    <div className="logActivityForm">
        <form action="#" method="PUT">
            <div className="logActivityForm__rows">
                <div className="logActivityForm__rows--spacing">
                    <legend>Title</legend>
                    <input type="text" id="title" value="Rock Climb" required/>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Rating</legend>
                    <input type="number" id="Rating" name="rating" min="0" max="5" step="1" required />    
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Route Type</legend>
                    <select id="route_type" required>
                        <option>Bouldering</option>
                        <option>Top Rope</option>
                        <option>Lead Climb</option>
                        <option>Outdoor Bouldering</option>
                        <option>Outdoor Top Rope</option>
                        <option>Outdoor Lead Climb</option>
                    </select>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Description</legend>
                    <textarea rows="5" cols = "60" maxlength="1000" id="description"></textarea>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Date</legend>
                    <input type="date" placeholder="Date" required/>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend># of Climbs Completed</legend>
                    <input type="number" id="climbsCompleted" min="0" step="1" required/>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Toughest Route Completed:</legend>
                    <select id="route_type" required>
                        <option>N/A</option>
                        <option>V</option>
                    </select>
                    <select id="route_type" required>
                        <option>N/A</option>
                        <option>B</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8+</option>
                    </select>
                </div>
                <div className="logActivityForm__rows--spacing">
                    <legend>Upload an Image (optional)</legend>
                    <input type="file" placeholder="Image Upload" />
                </div>
                <div className="logActivityForm__rows--spacing">
                    <input type="url" placeholder="YouTube Link (optional)" />
                </div>
                
            </div>
            <div className="logActivityForm__rows--spacing">
                <button className="buttonSubmit buttonSubmit__green" type="submit">Submit</button>
                <Link to="./profile">
                    <button className="buttonSubmit buttonSubmit__black">Cancel</button>
                </Link>
            </div>
            

        </form>    
    </div>
    
</div>

    </div>
  );
}

export default LogActivity;
