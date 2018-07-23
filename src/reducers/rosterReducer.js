import { ADD_PLAYER, FETCH_ROSTER } from '../actions/types';

export default function (state = null, action) {
  console.log('action.payload: ' + JSON.stringify(action.payload));
  switch (action.type) {
    case ADD_PLAYER:
      return action.payload;
    case FETCH_ROSTER:
      return action.payload;
    default:
      return state;
  }
}
