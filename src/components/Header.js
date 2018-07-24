import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  // renderContent() {
  //   switch (this.props.auth) {
  //     case null:
  //       return;
  //     case false:
  //       return 'Logged Out';
  //     default:
  //       return 'Logged in';
  //   }
  // }

  render() {
    const styles = { marginRight: '10px'};
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Scrabbly!
          </Link>
          <Link style={styles} to="/login" className="right">
            Login
          </Link>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
