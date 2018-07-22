import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';

class Roster extends Component {
  constructor(props) {
    super(props);
    this.props.fetchPlayers();
    // this.state = {
    //   players : [],
    // }
    console.log('players: ' + JSON.stringify(this.props.roster));
  }

  render() {
    return (
      <div>
        <h4>Roster</h4>
        <a href="/player/new" className="waves-effect waves-light btn">
          <i className="material-icons left">add</i>
          Add Player
        </a>
      </div>);
  }
}

function mapStateToProps({ auth, roster }) {
  return { auth, roster };
}

export default connect(mapStateToProps, { fetchPlayers })(Roster);
