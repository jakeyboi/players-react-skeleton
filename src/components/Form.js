import React from 'react';
import _ from 'lodash';

export default (formFields, submitButtonName, onSubmit) => (
  <div>
    <form onSubmit={this.handleSubmit}>
      {_.map(formFields, ({ label, name, type }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            name={name}
            type={type}
            value={this.state[name]}
            onChange={onSubmit}
          />
        </div>
      ))}
      <button
        type="submit"
        className="center-align teal btn-flat right white-text"
      >
        Login
      </button>
    </form>
  </div>
);

// export default Form;
