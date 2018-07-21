import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="row">
    <div className="col s12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Are you articulate?</span>
          <p>
            Test your might (and your vocabulary) with Scrabbly, the world&#39;s
            most premier Scrabble league!
          </p>
        </div>
        <div className="card-action center-align">
          <a href="/register">Register Now</a>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
