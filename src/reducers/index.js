import { combineReducers } from 'redux';
import authReducer from './authReducer';
import rosterReducer from './rosterReducer';

export default combineReducers({
  auth: authReducer,
  roster: rosterReducer,
});
