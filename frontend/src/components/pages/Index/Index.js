import React from 'react';
import { Link } from 'react-router-dom'
import './Index.css';

function Index() {
  return (
    <div>
      <div className="header">
        <h1 className="title">Arete</h1>
        <p>Know your leads.</p>
        <div className="container__buttons">
            <Link className="button" to="/profile">Log In</Link>
            <Link className="button" to="#">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Index;


