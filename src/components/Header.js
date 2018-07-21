import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Scrabbly!
          </Link>
          <Link to="/login" className="right">
            Login
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
