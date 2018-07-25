import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import newPlayerFields from './form/newPlayerFields';
import newPlayerRadio from './form/newPlayerRadio';
import { addPlayer } from '../actions';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rating: 0,
      handedness: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleRadioChange(e) {
    this.setState({ handedness: e.target.id });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/roster');
    this.props.addPlayer(this.state, this.props.auth.token);
  }

  renderFields() {
    return _.map(newPlayerFields, ({ label, name, type }) => (
      <div key={name}>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          type={type}
          value={this.state[name]}
          onChange={this.handleChange}
        />
      </div>
    ));
  }

  renderRadios() {
    return _.map(newPlayerRadio, ({ label, name, type }) => (
      <div key={name}>
        <p>
          <label htmlFor={name}>
            <input
              name="handedness"
              type="radio"
              id={name}
              onChange={this.handleRadioChange}
            />
            <span>{label}</span>
          </label>
        </p>
      </div>
    ));
  }

  render() {
    if (!this.props.auth) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <div>
        <h4>Add Player</h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <label htmlFor="handedness">Handedness</label>
          {this.renderRadios()}
          <button
            type="submit"
            className="center-align teal btn-flat right white-text"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps, { addPlayer })(Player));
