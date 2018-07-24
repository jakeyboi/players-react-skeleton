import { FETCH_ROSTER } from '../actions/types';

export default function (state = null, action) {
  console.log('rosterReducer: ' + JSON.stringify(action.payload));
  switch (action.type) {
    case FETCH_ROSTER:
      return action.payload;
    default:
      return state;
  }
}
