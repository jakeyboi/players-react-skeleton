import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import newPlayerFields from './form/newPlayerFields';
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
    this.props.addPlayer(this.state);
  }

  renderFields() {
    return _.map(newPlayerFields, ({ label, name, type, checked }) => {
      if (type !== 'radio') {
        return (
          <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
              name={name}
              type={type}
              value={this.state[name]}
              onChange={this.handleChange}
            />
          </div>);
      }
      return (
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
      );
    });
  }

  render() {
    // if (!this.props.auth) {
    //   return <Redirect to={{ pathname: '/' }} />;
    // }

    if (this.props.roster) {
      return <Redirect to={{ pathname: '/roster' }} />;
    }

    return (
      <div>
        <h4>Add Player</h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
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

function mapStateToProps(state) {
  const { auth, roster } = state;
  return { auth, roster };
}

export default connect(mapStateToProps, { addPlayer })(Player);
