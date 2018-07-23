import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';

class Roster extends Component {
  constructor(props) {
    super(props);
    this.props.fetchPlayers();
  }

  renderPlayers() {
    if (this.props.roster) {
      const { players } = this.props.roster;
      return (
        <table className="striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Handedness</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {_.map(players, ({ id, first_name, last_name, handedness, rating}) =>
              (<tr key={id}>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{handedness}</td>
                <td>{rating}</td>
              </tr>)
            )}
          </tbody>
        </table>
      );
    }
    return null;
  }

  render() {
    const styles = {
      marginTop: '20px',
    };
    return (
      <div>
        <div className="row">
          <div className="col s8">
            <h4>Roster</h4>
          </div>
          <div className="col s4" style={styles}>
            <a href="/player/new" className="waves-effect waves-light btn">
              <i className="material-icons left">add</i>
              Add Player
            </a>
          </div>
        </div>
        {this.renderPlayers()}
      </div>);
  }
}

function mapStateToProps({ auth, roster }) {
  return { auth, roster };
}

export default connect(mapStateToProps, { fetchPlayers })(Roster);
