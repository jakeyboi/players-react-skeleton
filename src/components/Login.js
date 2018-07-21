import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import formFields from './loginFormFields';
import { loginUser } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  renderFields() {
    return _.map(formFields, ({ label, name, type }) => (
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

  render() {
    if (this.props.auth) {
      return <Redirect to={{ pathname: '/roster' }} />;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <button
            type="submit"
            className="center-align teal btn-flat right white-text"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);