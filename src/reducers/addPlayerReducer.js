import { ADD_PLAYER } from '../actions/types';

export default function (state = null, action) {
  console.log('addPlayerReducer state: ' + JSON.stringify(state));
  switch (action.type) {
    case ADD_PLAYER:
      return ADD_PLAYER;
    default:
      return state;
  }
}
