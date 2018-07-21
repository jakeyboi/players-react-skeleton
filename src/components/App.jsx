import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Roster from './Roster';
import Player from './Player';

class App extends Component {
  componentDidMount() {
    // this.props.registerUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/roster" component={Roster} />
            <Route exact path="/player/new" component={Player} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
// mapstatetoprops, actions
export default connect(
  null,
  actions
)(App);
