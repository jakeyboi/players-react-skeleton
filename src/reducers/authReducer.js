import { REGISTER_USER, LOGIN_USER } from '../actions/types';

export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case REGISTER_USER:
      return action.payload || false; // the response when registered
    case LOGIN_USER:
      return action.payload || false;
    default:
      return state;
  }
}
