import axios from 'axios';
import { REGISTER_USER, LOGIN_USER, ADD_PLAYER } from './types';

const URL = 'https://players-api.developer.alchemy.codes/api';

export const registerUser = formValues => async (dispatch) => {
  console.log(`form values: ${ JSON.stringify(formValues)}`);
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = formValues;

  const newUser = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    confirm_password: confirmPassword,
  };

  try {
    const res = await axios.post(`${URL}/user`, newUser);
    console.log(res.data);
    dispatch({ type: REGISTER_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// Jake Irvin, jbirvin1289@gmail.com 3jUbe0eSnPkbJp@sGXHA

export const loginUser = formValues => async (dispatch) => {
  console.log(`form values: ${  JSON.stringify(formValues)}`);
  const { email, password } = formValues;
  const user = {
    email,
    password,
  };

  try {
    const res = await axios.post(`${URL}/login`, user);
    console.log(res.data);
    dispatch({ type: LOGIN_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// {"success":true,"player":{"first_name":"test","last_name":"player","rating":3,"handedness":"left","id":"5b54ed52310d217ff3901431"}}

export const addPlayer = formValues => async (dispatch) => {
  console.log(`form values: ${JSON.stringify(formValues)}`);
  const { firstName, lastName, rating, handedness } = formValues;
  const player = {
    first_name: firstName,
    last_name: lastName,
    rating,
    handedness
  };

  const token = '';
  const authConfig = { headers: { Authorization: 'Bearer ' + token }};

  try {
    const res = await axios.post(`${URL}/players`, player, authConfig);
    console.log(res.data);
    dispatch({ type: ADD_PLAYER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}
