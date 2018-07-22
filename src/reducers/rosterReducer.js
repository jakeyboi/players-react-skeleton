import { ADD_PLAYER } from '../actions/types';

export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case ADD_PLAYER:
      return action.payload;
    default:
      return state;
  }
}
