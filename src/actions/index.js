import axios from 'axios';
import { REGISTER_USER, LOGIN_USER } from './types';

const URL = 'https://players-api.developer.alchemy.codes/api';

export const registerUser = formValues => async (dispatch) => {
  console.log(`form values: ${  JSON.stringify(formValues)}`);
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
  console.log('form values: ' + JSON.stringify(formValues));
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
